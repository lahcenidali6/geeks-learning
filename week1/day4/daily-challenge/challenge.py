import math

class Pagination:
    def __init__(self,list_items=None,page_size=10):
        if list_items==None:
            self.list_items=[]
        else :
            self.list_items= list_items
        self.page_size=page_size
        self.current_idx=0
        self.total_num_pages=math.ceil(len(self.list_items)/page_size)
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.list_items[start:end]
    def go_to_page(self , page_num):
        if page_num > (self.total_num_pages) and page_num > 0:
            raise ValueError("invalid page number")
        else:
            self.current_idx=page_num-1
    def first_page(self):
        self.current_idx=0
        return self
    def last_page(self) :
        self.current_idx=(self.total_num_pages-1)
        return self
    def next_page(self):
        self.current_idx+=1
        return self
    def previous_page(self):
        self.current_idx-=1
        return self
    def __str__(self):
        return str(self.get_visible_items())

    

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())

p.next_page()

print(p.get_visible_items())

p.last_page()

print(p.get_visible_items())

p.go_to_page(10)

print(p.current_idx + 1)
        




