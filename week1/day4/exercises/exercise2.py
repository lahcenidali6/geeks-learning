class Dog :
    def __init__(self, name, age, weight):
        self.name=name
        self.age=age
        self.weight=weight
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return (self.weight/self.age*10)
    def fight(self, other_dog):
        if (self.run_speed()*self.weight)>(other_dog.run_speed()*other_dog.weight):
            return f"the winner is {self.name}"
        else :
            return f"the winner is {other_dog.name}"
    
# dog1 = Dog("Bolt", 4, 18)
# dog2 = Dog("Rex", 5, 20)
# dog3 = Dog("Shadow", 6, 16)

# print (dog1.fight(dog2))
# print(dog3.fight(dog2))

