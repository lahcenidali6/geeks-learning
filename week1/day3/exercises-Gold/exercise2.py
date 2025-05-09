import random
class MyList:
    def __init__(self):
        self.letters=[]

    def revers(self):
        self.letters.reverse()
        return self.letters
    def sort(self):
        self.letters.sort()
    def sec_list(self):
        list=[]
        for i in range(0,len(self.letters)):
            ran_number=random.randint(0,100)
            list.append(ran_number)
        
        print(list)

list=MyList()
list.letters=['a', 'b','z', 'A', 'B', 'Z']
list.sort()
list.sec_list()