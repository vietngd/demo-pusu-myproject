//Object Constructor: Xay dung doi tuong
/**Object Constructor */
function User(name, fullName, age, address) {
  this.name = name;
  this.fullName = fullName;
  this.age = age;
  this.address = address;
  // khoi tao 1 funcion trong 1 others
  this.getName = function () {
    return `${this.name} ${this.fullName}`;
  };
}

// new + object constructor
var student = new User("Nga", "Nguyen", 20, "BAcNinh");
var teacher = new User("Dam", "Tran", 50, "HaNoi");
console.log(teacher.getName()); //goi toi ham getName thi funcion duoc thuc thi
teacher.mail = "Dam@gmail.com";
delete teacher.mail; // xoa 1 others trong methods
student.mail = "nga@gmai.com"; // tao them thuoc tinh cho student( khong anh huong den ban thiet k ban dau)
console.log(teacher);
console.log(student);
