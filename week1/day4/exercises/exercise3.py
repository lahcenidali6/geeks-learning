from exercise2 import Dog
import random
class PetDog(Dog):
    def __init__(self ,name, age, weight, trained=False):
        Dog.__init__(self, name,age, weight)
        self.trained=trained

    def train(self):
        print(self.bark())
        self.trained=True

    def play(self ,*names):
        for name in names:
            print(name,end=' ')
        print("all play together")
    
    def do_a_trick(self):
        sentences=["does a barrel roll","stands on his back legs","shakes your hand","plays dead"]
        if self.trained:
            print(f"{self.name} {sentences[random.randint(0,3)]}")

dog1=PetDog("rex",5,18)

dog1.train()
dog1.do_a_trick()