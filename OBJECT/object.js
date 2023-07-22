// var favoriteKey = "favorite";
// var myInfo = {
//   name: "Nguyen Duc Viet",
//   age: 20,
//   address: "BacNinh",
//   [favoriteKey]: "Play Volleyball", //theme 1 key qua 1 bien
//   getName: function () {
//     return this.name; // this.name hoặc myInfo.name
//   },
// };
// console.log(myInfo.getName());
// myInfo.mail = "vietnguyen@authenticeducationhub.com";
// // console.log(myInfo); // truy xuat tat ca key
// // console.log(myInfo.name); //truy xuat 1 key : "name"
// console.log(myInfo[favoriteKey]);

// var myKey = "address";
// console.log(myInfo[myKey]); // truy xuat 1 key qua 1 bien
// // delete myInfo[favoriteKey]; // xoa 1 key
// console.log(myInfo);

/** Function --> Phuong thuc /methods
    Others --> Thuoc tinh / property
 */
//Object
var favoriteKey = "my favorite";
var student = {
  name: "Nguyen Duc Viet",
  age: "21 tuoi",
  address: "BacNinh",
  school: " PTIT",
  [favoriteKey]: "Play football",
  getName: function () {
    return `${this.name} ${this.age}`;
  },
};
student.mail = "vietnguyen@authenticeducationhub.com";
console.log(student);
console.log(student[favoriteKey]);
console.log(student.name);
console.log(student.getName());
delete student.school; // xoa 1 key
console.log(student);
