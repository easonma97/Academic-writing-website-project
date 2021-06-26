from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer
import sys

upload = "uploads/" + str(sys.argv[1])
print(upload)
with open('intermidiate.txt', 'w') as file:
    for page_layout in extract_pages(upload):
        for element in page_layout:
            if isinstance(element, LTTextContainer):
                for text_line in element:
                    file.write(text_line.get_text())
