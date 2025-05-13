class Family:
    def __init__(self , last_name):
        self.memebers=[]
        self.last_name=str(last_name)
    def born(self,**kwargs):
        if kwargs not in self.memebers:
            if kwargs["age"]>18:
                kwargs["is_child"]=False
            else :
                kwargs["is_child"]=True

            self.memebers.append(kwargs)
            print("welcome on the family")
        else:
            print("is already in the family ")
    def is_18(self,memeber_name):
        for memeber in self.memebers:
            if memeber_name==memeber["name"]:
                if memeber["age"]>=18:
                    return True
                else :
                    return False
            else :
                print("the memebers isn't exist in family")

    def family_presentation(self):
        print(f"Family name : {self.last_name} \nmemebers of the family : ")
        for memeber in self.memebers:
            print(f"name : {memeber["name"]} , age : {memeber["age"]} , gender : {memeber["gender"]} , is_child : {memeber["is_child"]}")
        


family=Family("family1")
family.born(name='amin',age=24,gender="male")
family.born(name='mohammed',age=15,gender="male")
family.born(name='imane',age=18,gender="female")
print(family.is_18("amin"))
family.family_presentation()



