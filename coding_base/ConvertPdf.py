import numpy as np
import pandas as pd
import torch
from transformers import BertTokenizer
from torch.utils.data import TensorDataset
from transformers import BertForSequenceClassification
from torch.utils.data import DataLoader, SequentialSampler

fp = open("intermidiate.txt")
data = fp.read()

data = data.replace('\n', ' ')
result = data.split(".")

df = pd.DataFrame(columns=['Sentence'])
for sentence in result:
    df = df.append({'Sentence': sentence}, ignore_index=True)
#drop the last row as it is empty
df.drop(df.tail(1).index, inplace=True)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased',
                                          do_lower_case=True)

model = BertForSequenceClassification.from_pretrained("bert-base-uncased",
                                                      num_labels=85,
                                                      output_attentions=False,
                                                      output_hidden_states=False)

model.to(device)

model.load_state_dict(
    torch.load("finetuned_BERT_epoch_20.model",
               map_location=torch.device('cpu')))


encoded_data = tokenizer.batch_encode_plus(
    df.Sentence.values,
    truncation=True,
    add_special_tokens=True,
    return_attention_mask=True,
    padding=True,
    max_length=256,
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


def predict(dataloader_val):
    model.eval()
    predictions = []

    for batch in dataloader_val:
        batch = tuple(b.to(device) for b in batch)

        inputs = {'input_ids': batch[0],
                  'attention_mask': batch[1],
                  }

        with torch.no_grad():
            outputs = model(**inputs)

        logits = outputs[0]

        logits = logits.detach().cpu().numpy()
        predictions.append(logits)

    predictions = np.concatenate(predictions, axis=0)
    preds_flat = np.argmax(predictions, axis=1).flatten()
    return preds_flat


end = predict(dataloader_test).tolist()

df_database = pd.read_excel("academic_phrase_bank.xls", usecols="C,D")
possible_labels = df_database.Class.unique()

label_dict = {}
for index, possible_label in enumerate(possible_labels):
    label_dict[possible_label] = index

df_database['label'] = df_database.Class.replace(label_dict)
res = end
for i in range(len(end)):
    res[i] = df_database[df_database.label == end[i]].Class.values[0]

df['class_predict'] = res
with open('result.txt', 'w') as file:
    file.write(df.to_string())