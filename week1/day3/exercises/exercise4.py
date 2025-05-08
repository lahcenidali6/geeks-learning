from collections import defaultdict
class Zoo:
    def __init__(self,zoo_name):
        self.name=zoo_name
        self.animals=[]
    
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self,animal_sold):
        self.animals.clear()
        self.animals.append(animal_sold)
    
    def sort_animals(self):
        list_animals_grouped = defaultdict(list)
        for animal in self.animals:
            list_animals_grouped[animal.name[0]].append(animal)
        self.animals.clear()
        self.animals=list_animals_grouped
    def get_groups(self):
        for group in self.animals:
            print(f"the group {group} :")
            for animal in group :
                print(animal)
new_york_zoo=Zoo("new_york_zoo")
new_york_zoo.add_animal(animal1)
new_york_zoo.get_animals()
new_york_zoo.sell_animal(animal1)
new_york_zoo.sort_animals()


