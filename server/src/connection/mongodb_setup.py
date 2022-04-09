from dotenv import load_dotenv
from mongoengine import connect
import os

load_dotenv()

USERNAME = os.environ.get("USERNAME")
PASSWORD = os.environ.get("PASSWORD")
DATABASE = os.environ.get("DATABASE")

def mongodb_setup():
    connect(alias="miao", host=f"mongodb+srv://{USERNAME}:{PASSWORD}@miao.r1oin.mongodb.net/{DATABASE}?retryWrites=true&w=majority")