// Sample data structure for all questions
const schoolData = [
  {
    class: "Math",
    students: [
      { name: "Alice", grade: 90, activities: ["Chess", "Debate"] },
      { name: "Bob", grade: 80, activities: ["Soccer", "Debate"] },
    ],
  },
  {
    class: "Science",
    students: [
      { name: "Charlie", grade: 85, activities: ["Chess", "Drama"] },
      { name: "Diana", grade: 95, activities: ["Soccer", "Drama"] },
    ],
  },
];

// Question 1: Calculate the average grade for each class

function calculateAverageGrade(schoolData) {
 return schoolData.map((classData) => {
    return {
      class: classData.class,
      grade:
      classData.students.map((data) => data.grade).reduce((a, b) => a + b) /
      classData.students.length,
    };
  });
}

console.log(calculateAverageGrade(schoolData));

// [ { class: 'Math', grade: 85 }, { class: 'Science', grade: 90 } ]
