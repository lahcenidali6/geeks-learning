number = int(input("enter a number : "))
length = int(input("enter a length : "))
list = []
for num in range(1,length+1):
    list.append(number*num)

print (list)