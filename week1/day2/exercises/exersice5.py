import random
def random_num(num):
    if num < 1 and num > 100:
        print("unaccepted value , must the value beetween 1 and 100")
    else:
        num2=random.randint(1,100)
        if num==num2:
            print("You won")
        else :
            print(f" you fail! the number is {num2} and the number that you chose is {num}")

random_num(45)