// /** Chuỗi */
// var problem = "Hoc HTML & CSS tai F8";

// /** 1. indexOf: tim vi tri cua mot phan tu >< lastIndexOf: tim vi tri cuoi cung cua phan tu
//  *  2. slice: cat phan tu trong chuoi( tu dau den dau)
//  *  3. Replace: thay doi 1 phan tu bang 1 1phan tu khac
//  *  4. trim: loai bo khoang trong ở đầu và cuối chuỗi
//  *  5. split: trả ra 1 mảng khi đã cắt chuỗi
//  */
// console.log(problem.split("H"));
// console.log(problem.length); // do dai chuoi
// console.log(problem.indexOf("CSS")); // tim vi tri cua ptu
// console.log(problem.lastIndexOf("H")); // tim vi tri cuoi cung cua ptu
// console.log(problem.slice(0, 7)); //cat phan tu tu 0 den 7
// console.log(problem.replace(/HTML/g, "JavaScript")); // thay doi tat ca chu " HTML" thanh " JavaScript"
// console.log(problem.toLowerCase()); // chuyen chu hoa sang chu thuong
// console.log(problem.toUpperCase()); // chuyen chu thuong sang chu hoa

// /** MẢNG*/
// //  1. toString: chuyển dữ liệu từ arr sang string
// //  2. join: thay đổi dấu " ," giữa các phần tử
// //  3. pop: xoá element cuối mảng và in ra phần tử đó
// //  4. push: thêm 1 element vào cuối mảng và in ra độ dài mảng
// //  5. shift: xoá element ở đầu mảng và in ra nó
// //  6. unshift: thêm elenmt ở đầu mảng và in ra độ dài mảng
// //  7. splice: cắt, thêm, xoá 1 phần tử trong mảng
// //  8. concat: merge 2 mảng
// //  9. slice: cắt 1 ptu trong mảng nhưng mảng ban đầu vẫn giữ nguyên

// var languages = ["HTML & CSS", "JavaScript", "PHP", "Ruby"];
// console.log(languages.toString()); // HTML & CSS, JavaScript, PHP, Ruby
// console.log(languages.join(" - ")); //HTML & CSS - JavaScript - PHP - Ruby
// console.log(languages.pop()); //Ruby;
// console.log(languages); // ["HTML & CSS", "JavaScript", "PHP"]
// console.log(languages.push("Python")); //4
// console.log(languages); // ["HTML & CSS", "JavaScript", "PHP","Python"]

// console.log(languages.shift()); //HTML & CSS
// console.log(languages); // ["JavaScript", "PHP","Python"]

// console.log(languages.unshift("C++")); //4
// console.log(languages); // ["C++", "JavaScript", "PHP", "Python"]

// console.log(languages.slice(0, 3)); // ["C++", "JavaScript", "PHP"]
// console.log(languages); // ["C++", "JavaScript", "PHP","Python"]
// console.log(languages.splice(2, 0, "React.JS"));
// console.log(languages); //  ["C++", "JavaScript", "PHP","Python","React.JS"]

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

/**MAP() */
function coinHandler(course) {
  console.log(course);
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    price: ` Gia: ${course.coin}`,
  };
}
var newCourse = courses.map(coinHandler);
console.log(newCourse);

var newCourse = courses.map(function (course) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    price: ` Giaa: ${course.coin}`,
  };
});
console.log(newCourse);

// /** REDUCE() */
// var totalCoin = courses.reduce(function (total, course) {
//   return total + course.coin;
// }, 0); // 0: intitia value( khong bat buoc): khi khong co thi no se lay phan tu dau tien lam gia tri khoi tao
// console.log(totalCoin);
// //TEST
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOuput, depthItem) {
//   return flatOuput.concat(depthItem);
// }, []);
// console.log(flatArray);

// var topics = [
//   {
//     topic: "Front-end",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS",
//       },
//       {
//         id: 2,
//         title: "JavaScript",
//       },
//     ],
//   },
//   {
//     topic: "Back-end",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "Node.JS",
//       },
//     ],
//   },
// ];
// var newCourse = topics.reduce(function (course, topics) {
//   return course.concat(topics.courses);
// }, []);
// console.log(newCourse);
