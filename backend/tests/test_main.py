from fastapi.testclient import TestClient
from fastapi import FastAPI
from sqlmodel import create_engine
from todo_app import setting
from todo_app.main import app


connection_string:str = str(setting.TEST_DATABASE_URL).replace("postgresql","postgresql+psycopg")
engine = create_engine(connection_string, connect_args={"sslmode":"require"},pool_size=10)


#TEST NO 1: root test
def test_root():
    client = TestClient(app=app)
    response = client.get("/")
    data = response.json()
    assert response.status_code == 200
    assert data == {"message":"Welcome to ToDo App"}
    
