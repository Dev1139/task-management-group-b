from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "DevPlus - Backend  running with uv!"}