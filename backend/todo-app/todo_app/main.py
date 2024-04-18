from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def todo():
    return {"Message":"hola"}