var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 0,
  },
  {
    id: 2,
    name: "HTML & CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Python",
    coin: 0,
  },
  {
    id: 4,
    name: "React.JS",
    coin: 0,
  },
  {
    id: 5,
    name: "React.JS",
    coin: 100,
  },
];

// //forEach
// courses.forEach(function (course) {
//   console.log(course);
// });

// //every()
// var isFree = courses.every(function (course, index) {
//   console.log(index);
//   return course.coin === 0; // tat ca others dung thi moi tra ve true
// });

// // some()
// console.log(isFree);
// var isFree = courses.some(function (course, index) {
//   return course.coin === 100; //1 others dung thi tra ve true luon
// });
// console.log(isFree);

// // find()// tra ve 1 phan tu
// var course = courses.find(function (course, index) {
//   return course.name == "React.JS";
// });
// console.log(course);

// // filter() // tra ve tat ca phan tu co diem chung
// var listCourse = courses.filter(function (course, index) {
//   return course.name == "React.JS";
// });
// console.log(listCourse);

/**map() */
function courseHandler(subject) {
  console.log(" subject log:", subject);
  //   return {
  //     id: subject.id,
  //     name: `Khoa hoc: ${subject.name}`,
  //     coinText: `Gia: ${subject.coin}`,
  //   };
}
var newCourses = courses.map(courseHandler);
console.log(" newCourses log: ", newCourses);
