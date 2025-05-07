
from datetime import date
birthday= input ("insert your birthday in this format DD/MM/YYYY : ")

birthday = birthday.split("/")[-1]
year= date.today().year

age =int(date.today().year)-int(birthday)

lastNumber=age%10
numOfcan=(11-lastNumber)//2
cakeHead=""
for num in range(1,12):
    if num > numOfcan and num <=lastNumber+numOfcan:
        cakeHead+="i"
    else:
        cakeHead+="-"
print(f"    {cakeHead}\n   |:H:a:p:p:y:|\n __|___________|__\n ^^^^^^^^^^^^^^^^^|\n|:B:i:r:t:h:d:a:y:|\n|                 |\n~~~~~~~~~~~~~~~~~~~")

if year%4==0:
    print(f"    {cakeHead}\n   |:H:a:p:p:y:|\n __|___________|__\n ^^^^^^^^^^^^^^^^^|\n|:B:i:r:t:h:d:a:y:|\n|                 |\n~~~~~~~~~~~~~~~~~~~")
