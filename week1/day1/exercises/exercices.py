


#exercise 1
print("Hello world")
print("Hello world")
print("Hello world")
print("Hello world")

#exercise 2
results = (99**3)*8
print(results)

#exercise 3
name=input("enter your name: ")
if name.lower()=="lahcen":
    print("awsome , you have the same name as me")

else :
    print ("hello "+name)
#exercise 4
height = int(input("Enter your height in cm :"))
if height >  145:
    print("you're tall enough to ride")
else: 
    print("you aren't tall enough to ride")

#exercise 5
my_fav_numbers= set()
my_fav_numbers.add(10)
my_fav_numbers.add(23)
my_fav_numbers.remove(23)
friend_fav_numbers=set()
friend_fav_numbers.add(80)
friend_fav_numbers.add(3)
friend_fav_numbers.add(17)
our_fav_numbers=my_fav_numbers | friend_fav_numbers
print(our_fav_numbers)

#exercise 6
#its not possible to add more integers directly to an existing tuple
#exercise 7
basket=["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.insert(-1,"Kiwi")
basket.insert(0,"Apples")
basket.count("Apples")
basket.clear()
print(basket)


#exercise 8
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
i=0
while  i < len(sandwich_orders):
    if sandwich_orders[i] =="Pastrami sandwich":
        sandwich_orders.pop(i)
    i+=1

finished_sandwiches=[]
while sandwich_orders:
    order = sandwich_orders[0]
    finished_sandwiches.append(order)
    sandwich_orders.remove(order)


for  order in finished_sandwiches:
    print (f"I made your {order}")