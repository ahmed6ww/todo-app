from fastapi import FastAPI
from sqlmodel import SQLModel,Field,create_engine,Session
from todo_app import setting 
from todo_app.setting import DATABASE_URL

#Create Model
class Todo (SQLModel, table=True):
    id:int | None = Field(default=None, primary_key=True)
    content:str = Field(index=True,min_length=3,max_length=54)
    is_completed : bool = Field(default=False)

connection_string:str = str(setting.DATABASE_URL).replace("postgresql","postgresql+psycopg")

engine = create_engine(connection_string,connect_args={"sslmode":"require"},pool_recycle=300, echo=True)

SQLModel.metadata.create_all(engine)

todo1 : Todo = Todo(content="First todo")
todo2 : Todo = Todo(content="Second todo")

session = Session(engine)

#Session
session.add(todo1)
session.add(todo2)
print(f"Before commit {todo1}")
session.commit()
print(f"After commit {todo1}")
session.close()


app = FastAPI()

# Define root endpoint
@app.get("/")
async def root():
    return {"message": "Hello"}

# Run FastAPI server with uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)