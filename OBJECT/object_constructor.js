// //Object Constructor: Xay dung doi tuong
// /**Object Constructor */
// function User(name, fullName, age, address) {
//   this.name = name;
//   this.fullName = fullName;
//   this.age = age;
//   this.address = address;
//   // khoi tao 1 funcion trong 1 others
//   this.getName = function () {
//     return `${this.name} ${this.fullName}`;
//   };
// }
// /**Object protoype */ //(nguyên mẫu của object)
// User.prototype.className = "F8"; // thêm 1 thuộc tính từ bên ngoài, nằm trong proto

// // new + object constructor
// var student = new User("Nga", "Nguyen", 20, "BAcNinh");
// var teacher = new User("Dam", "Tran", 50, "HaNoi");
// console.log(teacher.getName()); //goi toi ham getName thi funcion duoc thuc thi
// teacher.mail = "Dam@gmail.com";
// delete teacher.mail; // xoa 1 others trong methods
// student.mail = "nga@gmai.com"; // tao them thuoc tinh cho student( khong anh huong den ban thiet k ban dau)
// console.log(teacher);
// console.log(teacher.className);
// // console.log(student);

// //Doi tuong date
// function getNextYear() {
//   const currentDate = new Date();
//   return currentDate.getFullYear() + 1; // 2024
// }
// var ren = getNextYear();
// console.log(ren);

// var date = new Date();
// console.log(date.getFullYear()); //2023
// Math object
// console.log(Math.PI);
// console.log(Math.round(1.4)); // ham lam tron
// console.log(Math.abs(-4)); // tri tuyet doi
// console.log(Math.ceil(4.1)); // ham lam tron tren
// console.log(Math.floor(4.99)); // ham lam tron duoi
// console.log(Math.random()); // tra ve so ngau nhien nho hon 1
// console.log(Math.floor(Math.random() * 10)); // tra ve so nguyen ngau nhien nho hon 10
// var random = Math.floor(Math.random() * 5);
// var bonus = ["1000", "2000", "3000", "4000", "5000"];
// console.log(bonus[random]);

// console.log(Math.min(1, 2, 3));
// console.log(Math.max(1, 2, 3));

function User(namee, age, school, gender) {
  (this.namee = namee),
    (this.age = age),
    (this.school = school),
    (this.gender = gender),
    (this.genderName = function () {
      return `${this.namee} ${this.school}`;
    });
}
var men = new User("Thang", 20, "HANU", "NAM");
console.log(men.genderName());
men.mail = "thang@gmail.com";
console.log(men);
delete men.gender;
console.log(men);
