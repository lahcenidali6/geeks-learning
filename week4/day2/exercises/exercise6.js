const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

const studentsPassedCourse=students.filter(student=>student.isPassed)

students.filter(student=>student.isPassed).forEach((studentPassed=>{
    console.log(`Good job ${studentPassed.name}, you passed the course in ${studentPassed.course}`)
}))