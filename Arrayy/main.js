// var a = 3;
// var b = 1;
// var result = 0 || "M" || undefined || NaN;
// console.log("result:", result);
// if (result) {
//   console.log("Dieu kien dung");
// } else {
//   console.log("Dieu kien sai");
// }
// // function showDialog() {
// //   alert("Hi,Xin chao cac ban!");
// // }
// // showDialog();

// function writeLog() {
//   for (var param of arguments) {
//     //element dau tien s gan vao bien param roi lap di lap lai dn het mang argurments
//     console.log(param);
//   }
// }
// writeLog("Log1", "Log2", "Log3");
// var lastName = "Nguyen Duc Viet";
// var firstName = "PTIT";
// function fullName() {
//   console.log(`Toi la: ${lastName} ${firstName}`);
// }
// fullName();

// // expression function
// function showMessage2() {
//   console.log("GFdhdvferf");
// }
// setTimeout(function () {
//   //   alert("Hi");
// }, 1000);
// var myObject = function () {
//   console.log("ABC");
// };
// showMessage2();
// //Tao chuoi
// var fullName = 'Nguyen Duc Viet hoc "PTIT"';
// console.log(fullName.length);
// //Template String
// var myString = "Hoc JS tai JS JS F8";
// console.log(myString.indexOf("JS", 1)); // myString.indexOf('') : tim vi tri cu the cua phan tu( lastIndexOf: vi tri cuoi cung)
// console.log(myString.slice(0, 7)); // cat chuoi
// // Replace
// console.log(myString.replace(/JS/g, "JavaScript")); // ('JS' ,'JV') : thay doi 1 chuoi (/JS/,'JV'): ghi de tat ca chu "JS" thanh "JV" dgl bieu thuc chinh quy
// // Covert to upper caser: chuyen doi tat ca chuoi thanh chu hoa
// console.log(myString.toUpperCase());
// // convert to lower caser: chu hoa thanh chu thuong
// console.log(myString.toLowerCase());
// // Trim: loai bo khoang trang thua o trong chuoi
// console.log(myString.trim());
// // split
// var languages = " Javfa, PHfP, Rufby";
// console.log(languages.split(", "));
// // get a charactor by index
// const myString2 = "Nguyen Duc Viet";
// console.log(myString2[3]);
// var num = 1234.917188;

var date = 2;
switch (date) {
  case 2:
    console.log("Hom nay la thu 2");
  case 3:
    console.log("Hom nay la thu 3");
    break;
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  case 6:
    console.log("Hom nay la thu 6");
    break;
  case 7:
    console.log("Hom nay la thu 7");
    break;
  default:
    console.log("khong biet");
}
// toan tu 3 ngoi
var date = 5;
date > 6 ? console.log("hom nay la thu 2") : console.log("khong biet");
