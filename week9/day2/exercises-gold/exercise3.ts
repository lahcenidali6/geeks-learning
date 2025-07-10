class MathUtils {
  static PI: number = 3.14159;

  static circumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}


const circleCircumference = MathUtils.circumference(5);
console.log(`Circumference of circle with radius 5: ${circleCircumference}`);
