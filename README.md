# PDF Text Extractor Web App

This is a simple FastAPI-based web application that allows users to upload PDF files and extract text from them.

## Features

- **PDF Text Extraction**: Upload PDF files and extract text content using `pypdf`.
- **Interactive UI**:
  - **Copy**: One-click copy to clipboard.
  - **Edit**: Edit the extracted text directly in the browser.
  - **Close**: Clear the result and reset the view.
- **Responsive Design**: Clean and professional interface with a dedicated promotion section.

## Prerequisites

- Python 3.10 or higher
- `pip` package manager

## Installation

1. Clone the repository or navigate to the project directory.
2. Install the required dependencies:

   ```bash
   pip install fastapi uvicorn python-multipart pypdf
   ```

## Usage

1. Start the server:

   ```bash
   uvicorn main:app --reload
   ```

   The server will start at `http://0.0.0.0:8000`.

2. Open your web browser and go to:
   [http://localhost:8000](http://localhost:8000)

3. Click on the upload area to select a PDF file.
4. Click the "Extract Text" button.
5. The extracted text will appear below the button.

## Project Structure

- `main.py`: The FastAPI backend application.
- `static/index.html`: The frontend HTML file.
- `extract_pdf.py`: Original script for reference.
