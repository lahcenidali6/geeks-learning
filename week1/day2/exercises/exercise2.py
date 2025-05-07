family = {}
name=""
age=""
while True:
    name=input("enter the name of the member : ")
    if name=="quit":
        break
    age=int(input("enter the age of the member : "))
    family[name]=age

print(dict(family))
total=0
for member in family:
    pay=0
    if family[member]<=3:
        pay=0
    elif family[member]>3 and family[member]<=12:
        pay=10
    else:
        pay=15
    total+=pay
    print(f"the member {member} have to pay {pay}$")
print(f"the whole family have to pay {total}$")

