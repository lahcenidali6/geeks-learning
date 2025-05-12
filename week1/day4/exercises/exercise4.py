class Family:
    def __init__(self , last_name):
        self.memebers=[{}]
        self.last_name=str(last_name)
    def born(self,**childs):
        for child in childs:
            if child not in self.memebers:
                self.memebers.append(child)
                print("welcome in our family")
            else:
               print("the child is already memebers in family")

child1=Family("child")
child1.born(["youssef","mohammed"])

