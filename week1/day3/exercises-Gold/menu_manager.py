class MenuManager:
    def __init__(self):
        self.menu =[
            {
                "name": "Soup",
                "price": 10,
                "spice_level": "a little spicy",
                "gluten": False
            },
            {
                "name": "Hamburger",
                "price": 15,
                "spice_level": "not spicy",
                "gluten": True
            },
            {
                "name": "Salad",
                "price": 18,
                "spice_level": "not spicy",
                "gluten": False
            },
            {
                "name": "French Fries",
                "price": 5,
                "spice_level": "very spicy",
                "gluten": False
            },
            {
                "name": "Beef bourguignon",
                "price": 25,
                "spice_level": "a little spicy",
                "gluten": True
            }
        ]
    def add_item(self, name, price, spice, gluten):
        self.menu.append(
            {
                "name":name,
                "price":price,
                "spice_level":spice,
                "gulten":gluten
            }
        )
    def update_item(self, name, price, spice, gluten):
        check=False
        for dish in self.menu:
            if dish["name"]==name:
                check=True
                dish["name"]=name
                dish["price"]=price
                dish["spice_level"]=spice
                dish['gluten']=gluten
        else:
            if check:
                print("the dish has been updated")
            else:
                print("the dish is not in the menu")
    def remove_item(self, name):
        check=False
        for dish in self.menu:
            if dish["name"]==name:
                check=True
                self.menu.remove(dish)
                print("the dish has been removed!")
        else:
            if check==False:
                print("the dish is not in the menu ")
        
