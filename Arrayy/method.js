var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 300,
  },
  {
    id: 2,
    name: "HTML & CSS",
    coin: 200,
  },
  {
    id: 3,
    name: "Python",
    coin: 300,
  },
  {
    id: 4,
    name: "React.JS",
    coin: 777,
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

// filter() // tra ve tat ca phan tu co diem chung
// var listCourse = courses.filter(function (course) {
//   return course.name == "React.JS";
// });
// console.log(listCourse);

/**map() */
var newCourse = courses.map(function courseHandler(course) {
  // Expresss Function
  console.log(course);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coinText: `Gia: ${course.coin}`,
  };
  courseHandler();
});
// console.log(newCourse);

function courseHandler(course) {
  // Funcion Declaration
  console.log(course);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coinText: `Gia: ${course.coin}`,
  };
}

var newCourse = courses.map(courseHandler);
// console.log(newCourse);

var newCourse = courses.map(function courseHandler(course) {
  // console.log(course);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coinText: `Gia: ${course.coin}`,
  };
});
// console.log(newCourse);

/**reduce() */
var total = 0;
for (var course of courses) {
  // console.log(course);

  total += course.coin;
}

// /**Reduce() */

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//   // accumulator: bien luu tru
//   // currntValue: gia tri cua phan tu hien tai
//   // currentIndex: chi muc cua phan tu hien tai
//   // originArray: mang ma phan tu hien tai thuoc ve

//   var total = accumulator + currentValue.coin;

//   console.log(currentIndex);
//   console.log(currentValue);
//   console.log(total);
//   return total;
// }
// var totalCoin = courses.reduce(coinHandler, 0);

// coinHandler: bien luu tru
// 0: gia tri khoi tao duoc gan cho accumulator
