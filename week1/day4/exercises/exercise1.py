class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self , sounds ):
        return f"{sounds}"

cat1 = Bengal("Luna", 2)
cat2 = Chartreux("Milo", 3)
cat3 = Siamese("Zoe", 1)
all_cats=[cat1,cat2,cat3]

sara_pets=Pets(all_cats)
for cat in sara_pets.animals:
    print(cat.walk())