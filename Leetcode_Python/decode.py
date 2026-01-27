from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/documents.readonly"]
DOC_ID = "YOUR_DOC_ID"

creds = service_account.Credentials.from_service_account_file(
    "credentials.json",
    scopes=SCOPES
)

service = build("docs", "v1", credentials=creds)
doc = service.documents().get(documentId=DOC_ID).execute()

table_rows = []

for element in doc["body"]["content"]:
    if "table" in element:
        for row in element["table"]["tableRows"]:
            cells = []
            for cell in row["tableCells"]:
                text = ""
                for content in cell["content"]:
                    if "paragraph" in content:
                        for elem in content["paragraph"]["elements"]:
                            if "textRun" in elem:
                                text += elem["textRun"]["content"]
                cells.append(text.strip())
            table_rows.append(cells)

print(table_rows)
