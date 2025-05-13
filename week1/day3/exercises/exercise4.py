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
        if isinstance(self.animals, list):
            if animal_sold in self.animals:
                self.animals.remove(animal_sold)
                print("The animal has been removed :)")

            else :
               print("the animal isn't in the list!")
        elif isinstance(self.animals, dict):
            if animal_sold in self.animals[animal_sold[0].upper()]:
                self.animals[animal_sold[0].upper()].remove(animal_sold)
                print("The animal has been removed :)")
            else :
                 print("the animal isn't in the list!")
        
           
    
    def sort_animals(self):
        list_animals_grouped = {}
        self.animals.sort()
        for animal in self.animals:
            if animal[0].upper() in list_animals_grouped:
                list_animals_grouped[animal[0]].append(animal)
            else :
                list_animals_grouped[animal[0]]=[animal]
        self.animals.clear()
        self.animals=list_animals_grouped

    def get_groups(self):
        for group in self.animals:
            print(f"{group} :")
            for animal in self.animals[group] :
                print(animal)


new_york_zoo=Zoo("new_york_zoo")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Cat")
new_york_zoo.sell_animal("Ape")
new_york_zoo.sort_animals()
new_york_zoo.get_groups()


