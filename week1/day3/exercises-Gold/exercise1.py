class Circle:
    def __init__(self, rad):
        self.rad=rad
    def perimeter(self):
        return 2 *3.14* self.rad

    def area(self):
        return 3.14* self.rad ** 2

    def definition(self):
        print("A circle is a shape with all points equidistant from its center")