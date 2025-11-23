import pypdf
import os

pdf_path = '/Volumes/Seagate/01_coding_projects/test1/KCI_FI002750670.pdf'

try:
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open('extracted_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Text saved to extracted_text.txt")
except Exception as e:
    print(f"Error extracting text: {e}")
