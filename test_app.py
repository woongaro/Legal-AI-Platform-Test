import requests
import os

url = "http://localhost:8000/upload"
file_path = "KCI_FI002750670.pdf"

if not os.path.exists(file_path):
    print(f"File {file_path} not found.")
    exit(1)

with open(file_path, "rb") as f:
    files = {"file": f}
    try:
        response = requests.post(url, files=files)
        if response.status_code == 200:
            data = response.json()
            print("Success!")
            print(f"Filename: {data.get('filename')}")
            print(f"Extracted Text Length: {len(data.get('text', ''))}")
            print("First 100 chars of text:")
            print(data.get('text', '')[:100])
        else:
            print(f"Failed with status code: {response.status_code}")
            print(response.text)
    except requests.exceptions.ConnectionError:
        print("Could not connect to server. Is it running?")
