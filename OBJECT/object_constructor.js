//Object Constructor: Xay dung doi tuong
/**Object Constructor */
function User(name, fullName, age, address) {
  this.name = name;
  this.fullName = fullName;
  this.age = age;
  this.address = address;
  this.getName = function () {
    return `${this.fullName} ${this.name}`; // this: khi goi den property naof thi this se la cai do
  };
}
// new + object constructor
var student = new User("Nga", "Nguyen", 20, "BAcNinh");
var teacher = new User("Dam", "Tran", 50, "HaNoi");

console.log(student.getName());

student.mail = "nga@gmai.com"; // tao them thuoc tinh cho student( khong anh huong den ban thiet k ban dau)
console.log(teacher);
