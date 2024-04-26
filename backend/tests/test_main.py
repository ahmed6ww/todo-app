from fastapi.testclient import TestClient
from fastapi import FastAPI
from sqlmodel import create_engine,SQLModel,Session
from todo_app import setting
from todo_app.main import app,get_session


connection_string:str = str(setting.TEST_DATABASE_URL).replace("postgresql","postgresql+psycopg")
engine = create_engine(connection_string, connect_args={"sslmode":"require"},pool_size=10)


#TEST NO 1: root test
def test_root():
    client = TestClient(app=app)
    response = client.get("/")
    data = response.json()
    assert response.status_code == 200
    assert data == {"message":"Welcome to ToDo App"}
    
#TEST 2: post test
def test_create_todo():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        def db_session_override():
            return session
    app.dependency_overrides[get_session] = db_session_override 
    client = TestClient(app=app)
    test_todo = {"content":"create todo test", "is_completed":False}
    response = client.post("/todos",json=test_todo) 
    data = response.json()
    assert response.status_code == 200
    assert data["content"] == test_todo["content"]

#TEST 3: get all

def test_get_all():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        def db_session_override():
            return session
    app.dependency_overrides[get_session] == db_session_override
    client = TestClient(app=app)
    test_todo = {"content":"get all todos test","is_completed":False}
    response = client.post("/todos/",json=test_todo)
    data = response.json()
    response = client.get("/todos")
    new_todo = response.json()[-1]
    assert response.status_code == 200
    assert new_todo["content"] == test_todo["content"]


#TEST 4: single todo
def test_get_single_todo():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        def db_session_ovverride():
         return session
         
    app.dependency_overrides[get_session] == db_session_ovverride
    client = TestClient(app=app)
    test_todo = {"content":"get single todo","is_complete":False}
    response = client.post("todos/",json=test_todo)
    todo_id = response.json()["id"]
    res = client.get(f"/todos/{todo_id}")
    data = res.json()
    assert res.status_code == 200
    assert data["content"] == test_todo["content"]