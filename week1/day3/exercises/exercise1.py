class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1=Cat("loki",3)
cat2=Cat("luna",1)
cat3=Cat("Leo",4)
cats=[cat1,cat2,cat3]

def find_old_cat():
    oldest = max(cats, key=lambda cat: cat.age)   
    return oldest     

old_cat=find_old_cat()
print(f"The oldest cat is {old_cat.name } and is {old_cat.age} years old")