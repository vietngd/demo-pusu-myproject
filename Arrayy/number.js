// var age = 18;
// var PI = 3.1444123248;

// var result = 20 / "abc";
// console.log((result = 20 / "abc"));
// console.log(isNaN(result)); // kime tra xem cos phai so hop le khong
// // Lam viec voi Number
// console.log(PI.toFixed(7));

var language = ["Javascript", "PHP", "Ruby", "Dart"];
console.log(language.toString()); // chuyen du lieu sang string
console.log(language.join(" - ")); //thay doi dau ","
console.log(language.pop()); // xoá phần tử ở cuối mảng và in ra nó
console.log(language.push("C++")); // thêm phần tử " C++ " vào cuối mảng và in ra độ dài
console.log(language.shift()); // xoá phần tử đầu mảng và in ra nó
console.log(language.unshift("HTML")); // thêm phần tử " HTML" vào đầu mảng và in ra độ dài
console.log(language);
var language2 = ["C++", "Python"];
console.log(language.concat(language2)); //merge 2 mang
console.log(language.slice(1, 2)); // lấy ra 1 phần tử bắt đầu từ ptu thứ 2
console.log(language);
language.splice(1, 0, "Python"); // trỏ đến phần tử thứ 2 -> 0 xoá ptu nào -> chèn thêm ptu "Python" vào vị trí đang trỏ
console.log(language);

function getLastElement(array) {
  return array[array.length - 1];
  console.log(array[array.length - 1]);
  console.log(array.slice(array.length - 1));
  console.log(array.slice(0, 1));
}

var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
