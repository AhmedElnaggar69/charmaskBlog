from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Lets the React dev server (port 5173) talk to this server (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

fruits = ["banana", "mango"]  # fake database


class Fruit(BaseModel):
    name: str


@app.get("/fruits")
def get_fruits():
    return fruits


@app.post("/fruits")
def add_fruit(fruit: Fruit):
    fruits.append(fruit.name)
    return fruits

# Run with:  uvicorn main:app --reload