import math

class Pagination:
    def __init__(self,list_items=None,page_size=10):
        if list_items==None:
            self.list_items=[]
        else :
            self.list_items= list_items
        self.page_size=page_size
        self.current_idx=0
        self.total_num_pages=math.ceil(len(self.list_items)*page_size)
    def get_visible_items(self):
        




