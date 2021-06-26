# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import pandas as pd
import torch
import random
import sys
import json
from urllib.request import urlopen
from transformers import BertTokenizer
from torch.utils.data import TensorDataset
from transformers import BertForSequenceClassification
from torch.utils.data import DataLoader, SequentialSampler



df = pd.read_excel("academic_phrase_bank.xls", usecols="C,D")

possible_labels = df.Class.unique()

label_dict = {}
for index, possible_label in enumerate(possible_labels):
    label_dict[possible_label] = index

df['label'] = df.Class.replace(label_dict)
df.head()

# device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
device = torch.device('cpu')
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',
                                              do_lower_case=True)

model = BertForSequenceClassification.from_pretrained("bert-base-uncased",
                                                          num_labels=len(label_dict),
                                                          output_attentions=False,
                                                          output_hidden_states=False)

model.to(device)

model.load_state_dict(
        torch.load("finetuned_BERT_epoch_20.model",
                   map_location=torch.device('cpu')))


def predict_one(dataloader_val):
    model.eval()
    #   predictions = []

    for batch in dataloader_val:
        batch = tuple(b.to(device) for b in batch)

        inputs = {'input_ids': batch[0],
                    'attention_mask': batch[1],
                    }

        with torch.no_grad():
            outputs = model(**inputs)

        logits = outputs[0]

        logits = logits.detach().cpu().numpy()
        logits = logits.flatten()

    preds_top_5 = sorted(range(len(logits)), key=lambda i: logits[i], reverse=True)[:5]
    return preds_top_5


def create_data_loader_from_sentence(sentence):
    encoded_data = tokenizer.encode_plus(
        sentence,
        add_special_tokens=True,
        return_attention_mask=True,
        return_tensors='pt'
    )

    input_ids = encoded_data['input_ids']
    attention_masks = encoded_data['attention_mask']

    dataset_test = TensorDataset(
        input_ids,
        attention_masks,
    )

    dataloader_test = DataLoader(
        dataset_test,
        sampler=SequentialSampler(dataset_test),
        batch_size=32
    )

    return dataloader_test


hostName = "localhost"
serverPort = 8081


class MyServer(BaseHTTPRequestHandler):
    """
    Two different URLS:
    * /simple/argument
    * /more/argument
    """
    def is_simple_request(self):
        parts = self.path.split('/')
        return parts[1].lower() == "simple"

    def is_more_request(self):
        parts = self.path.split('/')
        return parts[1].lower() == "more"

    def get_url_argument(self):
        parts = self.path.split('/')
        if len(parts) > 1:
            return parts[2]
        else:
            return ""

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        if self.path != "favicon.ico":
            if self.is_simple_request():
                self.handle_simple_request()
            elif self.is_more_request():
                self.handle_see_more()
            else:
                print("Unknown request: %s" % self.path)
                self.wfile.write(bytes("Unknown request", "utf-8"))

    def handle_simple_request(self):
        """
        Handles a /simple/ request
        :return:
        """
        data_load = create_data_loader_from_sentence(self.get_url_argument().replace('%20', ' '))
        
        result = predict_one(data_load)

        for i in result:
            end = df[df.label == i].Phrase.values
            self.wfile.write(bytes(random.choice(end) + '\n', "utf-8"))

        for i in result:
            self.wfile.write(bytes(df[df.label == i].Class.values[0] + '\n', "utf-8"))

    def handle_see_more(self):
        """
        Handle a /more/ request
        :return:
        """
        df = pd.read_excel("academic_phrase_bank.xls", usecols="C,D")
        input = self.get_url_argument().replace("%20", " ")
        print("Argument from more: %s" % input)
        output = df[df.Class == input].Phrase.values
        for result in output:
            print(result)
            self.wfile.write(bytes(result + '\n', "utf-8"))


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    webServer.database = df
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
