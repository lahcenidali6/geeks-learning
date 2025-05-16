from menu_item import MenuItem
from  menu_manager import MenuManager

def View_an_Item():
    name=str(input("type the name of item : "))
    item=MenuManager.get_by_name(name)
    if item:
        print(f"item name: {item[1]} and the price: {item[2]}$")
    else:
        choice = str(input(f"{name} isn't exist in the menu\nDid you want to add it (Y/N): ")).upper()
        if choice=="Y" :
            add_item_to_menu()
        elif choice=="N":
            pass
        else:
            print("The choice not exist ! \n")
            
def add_item_to_menu():
    name=str(input("Type the name of item: "))
    price = int(input("Type the price of item: "))
    item = MenuItem(name,price)
    message = item.save()
    print(message)

def remove_item_from_menu():
    name=str(input("type the name for item you will delete it: "))
    item=MenuItem(name,10)
    message = item.delete()
    print(message)

def update_item_from_menu():
    name=str(input("Type the name of item you will update it: "))
    item = MenuItem(name,0)
    new_name=str(input("Type the new name of item: "))
    new_price = int(input("the price: "))
    message= item.update(new_name,new_price)
    print(message)

def show_restaurant_menu():
    items=MenuManager.all_items()
    for item in items :
        print(item)
        

def show_user_menu():
    choice=str(input("View an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)\nExit(E): ")).upper()
    if choice=="V":
        View_an_Item()
        show_user_menu()
    elif  choice=="A":
        add_item_to_menu()
        show_user_menu()
    elif  choice=="D":
        remove_item_from_menu()
        show_user_menu()
    elif  choice=="U":
        update_item_from_menu()
        show_user_menu()
    elif  choice=="S":
        show_restaurant_menu()
        show_user_menu()
    elif  choice=="E":
        print("Good By :)")
    else:
        print("The choice not exist ! \n")
        show_user_menu()
        
show_user_menu()

