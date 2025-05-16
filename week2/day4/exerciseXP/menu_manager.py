import psycopg2
from menu_item import MenuItem

DB_NAME = "restaurant"
USER = "postgres" 
PASSWORD = "12345" 
HOST = "localhost"
PORT = "5432"

try:
    connection = psycopg2.connect(
        dbname = DB_NAME,
        user = USER,
        password = PASSWORD,
        host = HOST,
        port = PORT
    )
except Exception as e:
    print(f"Error: {e}")
cursor=connection.cursor()

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            query=f"select * from Menu_Items where item_name='{name}'"
            cursor.execute(query)
            item=cursor.fetchone()
            if item:
                return item
            else :
                return None
        except Exception as e:
            print(f"error {e}")
            
    @classmethod
    def all_items(cls):
        try:
            query=f"select * from Menu_Items"
            cursor.execute(query)
            rows = cursor.fetchall()
            items=[]                    
            for row in rows :
                items.append({"item_name": row[1], "item_price": row[2]})
            return items
        except Exception as e:
            print(f"error {e}")

