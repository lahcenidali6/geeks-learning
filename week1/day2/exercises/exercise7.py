import random
def get_random_temp(month):
    if 5<month<=8:
        season="summer"
    elif 8<month<=12:
        season ="autumn"
    elif 1<=month<4:
        season="winter"
    else :
        season="spring"

    if season=="winter" or season=="autumn":
        return round(random.uniform(-10,16),2)
    elif season=="spring":
        return round(random.uniform(16,25),2)
    elif season=="summer":
        return round(random.uniform(25,40),2)

def main():
    month=int(input ("enter the month  1 -> 12 : "))
    random_tem=get_random_temp(month)
    print(f"The temperature right now is {random_tem} degrees Celsius")
    if random_tem<0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif random_tem>=0 and random_tem<16:
        print("Quite chilly! Don’t forget your coat")
    elif random_tem>=16 and random_tem<23:
        print("wow ! , its good whather today")
    elif random_tem>=23 and random_tem<32 :
        print("so hot! what about the beach")
    else :
        print("you have to get yourself in the freezer")

   
main()