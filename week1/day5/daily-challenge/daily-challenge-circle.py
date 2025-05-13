import math
import turtle 

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
    

circle1=Circle(30)
circle2=Circle(50)
circle3=Circle(10)
circle4=Circle(5)
circles_list=[circle1,circle2,circle3,circle4]
circles_list.sort()

y=0
for circle in circles_list:
    y+=circle.diameter
    turtle.speed(10)
    turtle.hideturtle()
    turtle.penup()
    turtle.goto(0, y - circle.radius)  
    turtle.pendown()
    turtle.circle(circle.radius)
    
turtle.done()
