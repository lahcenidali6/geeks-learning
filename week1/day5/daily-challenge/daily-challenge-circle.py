import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("must provide one of the radius or diameter ")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}, area: {self.area:.2f}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __le__(self, other):
        return self < other or self == other

    def __ge__(self, other):
        return self > other or self == other

