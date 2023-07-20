var favoriteKey = "favorite";
var myInfo = {
  name: "Nguyen Duc Viet",
  age: 20,
  address: "BacNinh",
  [favoriteKey]: "Play Volleyball", //theme 1 key qua 1 bien
  getName: function () {
    return this.name; // this.name hoặc myInfo.name
  },
};
console.log(myInfo.getName());
myInfo.mail = "vietnguyen@authenticeducationhub.com";
// console.log(myInfo); // truy xuat tat ca key
// console.log(myInfo.name); //truy xuat 1 key : "name"
console.log(myInfo[favoriteKey]);

var myKey = "address";
console.log(myInfo[myKey]); // truy xuat 1 key qua 1 bien
// delete myInfo[favoriteKey]; // xoa 1 key
console.log(myInfo);

/** Function --> Phuong thuc /methods
    Others --> Thuoc tinh / property
 */
