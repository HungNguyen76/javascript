/* 
Gới thiệu 1 số hàm built-in
    1.Alert
    2.Console
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval

*/

/* 
    Giới thiệu toán tử trong JS
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical
*/

/* 
    Toán tử số học
    + Cộng
    - Trừ
    * Nhân
    ** Luỹ Thừa
    / Chia
    % Chia lấy số dư
    ++ Tăng 1 giá trị số
    -- Giảm 1 giá trị số
*/

//Toán tử ++, --
// Prefix & Postfix

var a = 6;
//việc 1: + 1 cho a, a = a + 1 => a = 7
//viec 2: tra ve a sau khi dc + 1
// console.log(++a);

//viec 1: `a copy`, `a copy` = 6
//viec 2: tru 1 cua a, a = a - 1 => a = 5
//viec 3: tra ve `a copy`
var output = a++;
console.log("output: ", output); //6
console.log("a: ", a); //7

var number = 6;
var output2 = number++ + --number;
// 6 + 6
console.log("output2: ", output2);

/* 
    Toán tử gán
    Toán tử     ví dụ       tương đương
    =           x = y         x = y
    +=          x += y        x = x + y 
    -=          x -= y        x = x - y
    *=          x *= y        x = x * y
    /=          x /= y        x = x / y
    **=         x **= y       x = x ** y
*/
var a = 1;
a += 2;
console.log(a); //3

/*
    Toán tử chuỗi - String operator

*/
var name = "Hung";
name += " Nguyen";
console.log(name); // Hung Nguyen
/*
    Toán tử so sánh
    Toán tử
    ==                  Bằng
    !=                  Không bằng
    >                   Lớn hơn
    <                   Nhỏ hơn
    >=                  Lớn hơn hoạc bằng
    <=                  Nhỏ hơn hoặc bằng
*/
var x = 1;
var y = 2;
if (x != y) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

/*
    Boolean

*/
var t = 1;
var h = 2;
var isSuccess = t > h;
console.log(isSuccess); // false

/*
    If-else
    trong JS co 6 gia tri sau:
        1.  0
        2. false
        3. '' hoac ""
        4. undefined
        5. NaN
        6. null
    6 giá trị này convert sang boolean = false;
    ngoài những giá trị trên đều là true
*/
if (true) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

/**
 *  Toán tử Logic
 * 1. && - And // đòi hỏi tất cả điều kiện phải đúng
 * 2. || - Or   // chỉ cần 1 vế đúng
 * 3. ! - Not
 *
 */
var m = 1;
var n = 2;
var z = 3;
if (m > 0 && n > 0 && z > 0) {
  console.log("Dieu kien dung - toan tu logic");
}
if (m < 0 || n < 0 || z > 0) {
  console.log("Dieu kien dung - toan tu logic"); // vẫn chạy
}

/**
 * Kiểu dữ liệu trong JS
 * 1. dữ liệu nguyên thuỷ - primitive data
 * -Number
 * -String
 * -boolean
 * -undefined
 * -null
 * -symbol
 *
 * 2.Dứ liệu phức tạp - complex data
 * -function
 * -object
 */

//String type
var fulName = "Minh ' Hung ";
console.log(fulName); //Minh ' Hung

//Undefined type
var age;
console.log(age); //undefined

//Symbol
var id = Symbol("id"); //unique
var id2 = Symbol("id"); //unique
console.log(id == id2); // false vì đặc tính unique

//Function
//function tự định nghĩa
var myFunction = function () {
  // alert('Hi xin chao cac ban')
};
myFunction();

//Object type
var myObject = {
  name: "Hung Nguyen",
  age: 32,
  address: "Tphcm",
  myFunc: function () {},
};
console.log("myObject: ", myObject);

//Array type
var myArray = ["Javascript", "PHP", "Ruby"];
console.log(myArray);

//Toán tử so sánh p.2
/**
 * ===
 * !==
 */
var b1 = 1;
var b2 = "1";
console.log(b1 == b2); //true
console.log(b1 === b2); //false vi so sanh type and value

/**
 * hiểu hơn về câu lệnh điều kiện
 * và phép so sánh
 *
 */
var c1 = 1;
var c2 = 2;
var result = "A" && "B";
//gỉai thích: toán tử && sẽ lấy phần tử đầu tiên xem có false nằm trong 1 trong 6 giá trị:
// false, 0, null, '', undefined, Nan ko, nếu ko sẽ lấy phần tử kế tiếp gán vào result
//nếu phần tử đầu tiên là 1 trong 6 giá trị false, thì sẽ gán ngay cho resutl luôn
console.log(result); //B
var result2 = "A" && "B" && NaN & "D";
console.log(result2); //NaN

if (result2) {
  console.log("Dieu kien dung - &&");
} else {
  console.log("Dieu kien sai - &&");
}

var result3 = "A" || "B" || undefined || "C";
//Giai thich: || ngược lại &&
console.log(result3); //A

/**
 * Chuỗi trong JS
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào?  LÝ DO?
 *  - Kiểm tra data type
 * 2.Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4.Chú ý độ dài khi viết code
 * 5. Template string ES6
 */

var fullName1 = new String("Minh Hung"); // cach nay it xai
console.log(typeof fullName1); //object

var fullName2 = "Minh Hung la 'Sieu nhan'";
console.log(fullName2); // Minh Hung la 'Sieu nhan'

var fullName3 = "Day la dau \\";
console.log(fullName3); //Day la dau \

var fullName4 = "Minh Hung  ";
console.log(fullName4.length); // 11

var fullName5 =
  "Một số case sử dụng backslash" +
  "1. Một số case sử dụng backslash" +
  "2. Một số case sử dụng backslash" +
  "3. Một số case sử dụng backslash";
console.log(fullName5);

var firstName1 = "Minh";
var lastName1 = "Nguyen";
console.log(`Toi la: ${firstName1} ${lastName1}`);

/**
 * Làm việc với chuỗi
 * 1. Length
 * 2. Find index
 * 3. Cut string
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */
var myString = "Hoc JS tai F8!";
console.log("Lam viec voi chuoi: ", myString.length); //14
console.log(myString.indexOf("JS")); //4
console.log(myString.indexOf("ABC")); //-1 : vi ko co trong chuoi myString

var myString2 = "Hoc JS tai JS JS F8!";
console.log(myString2.indexOf("JS", 6)); //11 : bắt đầu tìm từ index thứ 6
console.log(myString2.lastIndexOf("JS")); //14 : vị trí cuối cùng của JS
console.log(myString2.search("JS")); //4 : search tuong duong indexOf

console.log(myString.slice(4, 6)); //JS : 4 la vi tri bat dau, 6 la vi tri ket thuc
console.log(myString.slice(4)); //JS tai F8!

console.log(myString.replace(/JS/g, "Javascript"));

console.log(myString.toUpperCase()); //HOC JS TAI F8!
console.log(myString.toLowerCase()); //hoc js tai f8!

console.log(myString.trim()); //bỏ khoảng trắng 2 đầu của chuỗi myString

var languages = "Javascript, PHP, Ruby";
console.log(languages.split(", ")); //['Javascript', 'PHP', 'Ruby']
console.log(languages.split(",")); //['Javascript', ' PHP', ' Ruby']
console.log(languages.split("")); //['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', ',', ' ', 'P', 'H', 'P', ',', ' ', 'R', 'u', 'b', 'y']

var myString7 = "Minh Hung";
console.log(myString7.charAt(0)); //M
console.log(myString7.charAt(10)); //trả về chuỗi rỗng
console.log(myString7[1]); // i

/**
 * Kiểu số (number) trong JS
 * 1. Tạo giá trị Number
 *  -Các cách tạo
 *  -Dùng cách nào? tại sao? nên dùng cách 1, tránh tạo bằng từ khoá New
 *  -kiểm tra data type
 *
 * 2.Làm việc với Number
 *  -To string
 *  -To fixed
 *
 * keywords to search: Javascript number methods
 */
var age3 = 18;
var PI = 3.14;

var otherNumber = new Number(9); // ít xài
console.log("Lam viec voi so: ", typeof age3);

var result4 = 20 / "ABC";
console.log(result4); //NaN : đại diện 1 số ko hợp lệ

console.log(result == NaN); //false
console.log(isNaN(result)); //true

console.log(age3.toString()); //'18'
console.log(PI.toFixed("")); //3
console.log(PI.toFixed("1")); //3.1
//với thập phân nhỏ hơn .5 sẽ làm tròn dưới
//với thập phân lớn hơn hoặc = .5 làm tròn lên

/**
 * Mảng trong JS - Array
 * 1. Tạo mảng
 *  -Cách tạo
 *  -Sử dụng cách nào? Tại sao?
 *  -Kiểm tra data type?
 * 2.Truy suất mảng
 *  -Độ dài mảng
 *  -Lấy phần tử theo index
 * Array chứa được tât cả loại dữ liệu của JS
 */
var langage1 = [
  "JS",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
  123,
];
var langage2 = new Array(
  "JS",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
  123
); // ko khuyến cáo sử dụng vì phức tạp

console.log(typeof langage1); // object
console.log(Array.isArray(langage1)); // true
console.log(Array.isArray({})); // false

var langage3 = ["Javascript", "PHP", "Ruby", "Dart"];
console.log(langage3[0]); //Javascript

/**
 * Làm việc với mảng
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 *
 * keyword: Javascript array  methods
 */
var languages5 = ["Javascript", "PHP", "Ruby"];
console.log(languages5.toString()); //Javascript,PHP,Ruby
console.log(languages5.join("")); //JavascriptPHPRuby
console.log(languages5.pop()); //Ruby : xoá phần tử cuối mảng, trả về phần tử đã xoá
languages5.push("Dart"); //4 : thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(languages5); //['Javascript', 'PHP', 'Dart']
console.log(languages5.shift()); // Javascript : xoá phần tử đầu mảng, trả về phần tử đã xoá
console.log(languages5.unshift("Dart")); // 3 : ngược vs push, thêm 1 hay nhiều phần tử vào đầu mảng , và trả về độ dài mới của mảng
console.log(languages5); //['Dart', 'PHP', 'Dart']
languages5.splice(1, 2); // xoá phan tu : 1 start number, 2 là số phần tử muốn xoá
console.log(languages5); // ['Dart']
languages5.splice(1, 1, "C#"); //1: start number, 2 là số lượng elements mún xoá, 3 là elements mún truyền vào
console.log(languages5); //['Dart', 'C#']

var languages6 = ["C++", "Java"];
console.log(languages5.concat(languages6)); //['Dart', 'C#', 'C++', 'Java']
console.log(languages5.slice(1, 2)); //['C#'] : cắt mảng : 1 start number, 2 end number
console.log(languages5.slice(0)); //['Dart', 'C#'] : cách copy mảng

/**
 * Hàm (function) trong JS
 * 1. Hàm ?
 *  - Một khối mã
 *  - Làm 1 việc cụ thể
 *
 * 2. Loại Hàm
 *  - Buil-in
 *  - Tự định nghĩa
 *
 * 3. Tính chất
 *  - Không thực thi khi được định nghĩa
 *  - Sẽ thực thi khi được gọi
 *  - Có thể nhận tham số
 *  - Có thể trả về 1 giá trị
 * 4. Tạo hàm đầu tiên
 */
//Tên hàm chứa chữ: a -z A-Z 0-9 _ $
function showDialog() {
  //code
  alert("Hi xin chao cac ban!");
}
// showDialog()

/**
 * 1. Tham số ?
 *  - Định nghĩa?
 *  - Kiểu dữ liệu?
 *  - Tính private?
 *  - 1 tham số
 *
 * 2. Truyền tham số
 *  - 1 tham số
 *  - Nhiều tham số
 *
 * 3. Argument?
 *  - Đối tượng arguments
 *  - Giới thiệu vòng for of
 */
function writeLog(message) {
  // message la tham so
  console.log(message);
}
writeLog("Day la message"); // truyền text vào như vầy gọi là đối số
writeLog(123); //123

//private là chỉ được biến message trong {} của function
function writeLog2(message, message2) {
  // message la tham so
  console.log(message);
  console.log(message2); //undefined vì ko được truyền giá trị vào
}
writeLog2("TEST");

function writeLog3() {
  console.log(arguments); //Arguments(3) ['Log1', 'Log2', 'Log3']
}
writeLog3("Log1", "Log2", "Log3");

function writeLog4() {
  var myString = "";
  for (var param of arguments) {
    //console.log(param) // Log 1 Log 2 Log 3
    myString += `${param} - `;
  }
  console.log(myString); //Log1 - Log2 - Log3 -
}
writeLog4("Log1", "Log2", "Log3");

//Return trong hàm - Javascript cơ bản
function cong(a, b) {
  return a + b;
}
var result = cong(2, 8);
console.log(result); //10
// nếu 1 hàm ko return sẽ trả về giá trị undefined

/**
 * Một số điều cần biết về function
 * 1. Khi function được đặt trùng tên?
 * 2. Khai báo biến trong hàm?
 * 3. Định nghĩa hàm trong hàm?
 */
function showMessage() {
  console.log("Message 1");
}
function showMessage1() {
  console.log("Message 2");
}
showMessage(); // Message 2 : function định nghĩa sau sẽ ghi đè function định nghĩa trước

function showMessage2() {
  function showMassage3() {
    console.log("Message 3");
  }
  showMassage3();
}
showMessage2(); //Message 3

/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */
showMessage5(); // Declaration function : nhờ cơ chế hoisting
function showMessage5() {
  //declaration function
  console.log("Declaration function");
}
var showMessage6 = function () {
  //expression function
  console.log("Expression function");
};
//declare va express khac nhau ve co che hoisting
//declare thì hoisting được, còn express thì ko hoisting được

setTimeout(function autoLogin() {}); //expression function

var myObject1 = {
  //expression function
  myFunc: function () {},
};

//Polyfill?
//hỗ trợ các trình duyệt cũ sử dụng phương thức includes của String.prototype
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}

//Object trong Javascript
var emailKey = "email";
var myInfo = {
  name: "Minh Hung", //key: value,
  age: 32,
  address: "TPHCM",
  [emailKey]: "minhu7676@gmail.com",
  getName: function () {
    return this.name;
  },
};
//Function -->  phương thức/method
//Others --> Thuộc tính/property

myInfo.email = "nmhung.7676@gmail.com"; // cach 1 thêm key value vô object
myInfo["position"] = "developer"; // cach 2

var myKey = "address";

delete myInfo.age; // xoá 1 element trong object

console.log(myInfo); //{name: 'Minh Hung', age: 32, address: 'TPHCM', email: 'nmhung.7676@gmail.com'}
console.log(myInfo[myKey]); //TPHCM
console.log(myInfo.getName()); //Minh Hung

//Object constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`; //this này trong getName()
  };
}
var author = new User("Minh", "Nguyen", "Avatar");
var user = new User("Vu", "Nguyen", "Avatar");

author.title = "Chia sẻ dạo tại F8";
user.comment = "Liệu có khoá asp.net ko ad :D";

console.log(author);
console.log(user);
console.log(author.getName()); //Minh Nguyen
console.log(user.getName()); //Vu Nguyen

/**
 * Object prototype - Basic
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào?
 */
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};
console.log(user.className); //F8

//Đối tượng Date
//keyword: javascript date object mozilla
var date = new Date();
var date2 = Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();

console.log("Doi tuong date: ", date); //Doi tuong date:  Wed Jun 15 2022 17:27:25 GMT+0700 (Indochina Time)
console.log("Doi tuong date2: ", typeof date2); //string
console.log(`${day}/${month}/${year}`); // 15/6/2022

//Câu lệnh rẽ nhánh if-else
var date3 = 9;
if (date3 === 2) {
  console.log("Hôm nay là thú 2");
} else if (date === 3) {
  console.log("Hôm này là thứ 3");
} else {
  console.log("khong biet");
}

//Câu lệnh rẽ nhánh - Switch
var date6 = 9;

switch (date6) {
  case 2:
    console.log("Hôm nay là thứ 2");
    break;
  case 3:
    console.log("Hôm nay là thứ 3");
    break;
  case 4:
    console.log("Hôm nay là thứ 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
  default:
    console.log("Hôm nay là Chủ nhật");
}
// sử dụng switch case khi nào biết trước những giá trị
//mà ít hơn 3 case thì dùng if else
//khi nào sử dụng đúng sai, thì dùng if else

//Toán tử 3 ngôi - Ternary operator
var course = {
  name: "Javascript",
  coin: 0,
};
// if(course.coin > 0 ) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log('Miễn phí')
// }

var result7 = course.coin > 0 ? `${course.coin} Coins` : "Miễn Phí";
console.log(result7);

/**
 * Vòng lặp - Loop
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */
//For Loop
for (var i = 1; i <= 1000; i++) {
  // console.log(i) // in ra tu 1 -> 1000
}
var myArray3 = ["Python", "Java", ".Net", "C++"];
var arrayLength = myArray3.length;

for (var i = 0; i < arrayLength; i++) {
  console.log(myArray3[i]);
}

//For/in loop
var car = {
  name: "Mercedez",
  price: 3000,
  color: "Black",
};
for (var key in car) {
  console.log(car[key]);
  //Mercedez
  // 3000
  //Black
}

var myString10 = "Javascript";
console.log(myString[0]); //H

//For/of loop --> ko xài cho object được
var person = ["Dad", "Mom", "Son"];
for (var value of person) {
  console.log(value); // Dad Mom Son
}

var myContact = {
  phone: 0988,
  name: "Hung Minh",
};
for (var index of Object.keys(myContact)) {
  console.log(index);
  // phone
  // name
}
for (var i of Object.values(myContact)) {
  console.log(i);
  // 988
  // Hung Minh
}
var text = "Minh Hung";
for (var t of text) {
  console.log(t);
  // M
  // i
  // n
  // h
  //
  // H
  // u
  // n
  // g
}

//While loop
var i = 0;

// while (i < 1000) {
//     i++;
//     console.log(i)
// }

//do/while loop
var e = 0;
var isSucess = false;
do {
  e++;
  console.log("Nạp thẻ lần " + e); // Nạp thẻ lần 1
  //Thành công
  if (true) {
    isSucess = true;
  }
} while (!isSucess && e < 3);

//Break & Continue in Loop
for (var i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; // 0 2 4 6 8
  }
  console.log(i);

  // if(i >= 5) {
  //     break;
  // }
}

//Vòng lăp lồng nhau - Nested Loop
var myArray4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < myArray4.length; i++) {
  for (var j = 0; j < myArray4[i].length; j++) {
    console.log("Nested Loop ", myArray4[i][j]); // 1 2 3 4 5 6
  }
}

/**
 * Array methods:
 * 1. forEach() // chỉ lặp qua từng phần tử
 * 2. every() // dùng kiểm tra tất cả phần tử phải thoả mãn 1 điều kiện gì đó
 * 3. some()
 * 4. find()
 * 5. filter()
 * 6. map()
 * 7. reduce()
 */

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 10,
  },
];
// courses.forEach(function(course, index) {
//     console.log(course, index)
// })
var isFree = courses.every(function (course, index) {
  return course.coin === 0;
});
console.log(isFree); //false

var isFree1 = courses.find(function (course, index) {
  return course.name === "Ruby"; //{id: 3, name: 'Ruby', coin: 0} lặp qua từng phần tử,
  //phần tử nào return true là trả về và kết thúc vòng lặp luôn
  //thường dùng tìm kiếm ai đó theo danh bạ, luôn trả về 1 kết quả
});
console.log(isFree1);

var isFree2 = courses.filter(function (course, index) {
  return course.name === "Ruby";
  //{id: 3, name: 'Ruby', coin: 0}
  //{id: 6, name: 'Ruby', coin: 10}
});
console.log(isFree2);

//map method
var courses1 = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 10,
  },
];
function courseHandler(courses, index, originArray) {
  // console.log(course)
  return {
    id: courses.id,
    name: `Khoa hoc: ${courses.name}`,
    coin: courses.coin,
    coinText: `Gia ${courses.coin}`,
    index: index,
    originArray: courses, // tham số thứ 3 trả về mảng gốc ban đầu, nhưng ít xài
  };
}
var newCoures = courses1.map(courseHandler);
console.log("map method ", newCoures);
//{id: 1, name: 'Javascript', coin: 250}
//{id: 2, name: 'HTML, CSS', coin: 0}
//{id: 3, name: 'Ruby', coin: 0}
//{id: 4, name: 'PHP', coin: 400}
//{id: 5, name: 'ReactJS', coin: 500}
//{id: 6, name: 'Ruby', coin: 10}

//reduce method
//1. dễ hiểu
//2. ngắn gọn
//3. hiệu năng

//biến lưu trữ
//thực hiện việc lưu trữ
var totalCoin = 0;
for (var course of courses1) {
  //thực hiện việc lưu trữ
  totalCoin += course.coin;
}
//console.log(totalCoin) //1160
// g là biến lưu trữ
var g = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  g++;
  //thực hiện việc lưu trữ
  var total = accumulator + currentValue.coin;
  console.table({
    "Lượt chạy: ": g,
    "Biến tích trữ: ": accumulator,
    "Giá khoá học: ": currentValue.coin,
    "Tích trữ được: ": total,
  });
  return total;
}
var totalCoin1 = courses1.reduce(coinHandler, 0); //initial value
console.log(totalCoin1);

//cách viết ngắn gọn hơn
var totalCoin2 = courses1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.coin;
}, 0);
console.log(totalCoin2); // 1160

// ngắn hơn nữa
var totalCoin3 = courses1.reduce((a, b) => a + b.coin, 0);
console.log(totalCoin3); // 1160

//Bài tập reduce
//Flat - "làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

//lấy các khoá học đưa vào mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "Javascript",
      },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];
var newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.courses);
}, []);
console.log(newCourses); //(4) [{…}, {…}, {…}, {…}]
//0: {id: 1, title: 'HTML, CSS'}
//1: {id: 2, title: 'Javascript'}
//2: {id: 1, title: 'PHP'}
//3: {id: 2, title: 'NodeJS'}

//includes method: là phương thức của array và string
var title = "Reponsive web design";
console.log(title.includes("web")); //true

var courses5 = ["JS", "PHP", "Dart"];
console.log(courses5.includes("Dart")); //true

/**
 * Math Object
 *  -Math.PI
 *  -Math.round()
 *  -Math.abs() //absolute biến số âm thành dương
 *  -Math.ceil() //làm tròn trên
 *  -Math.floor()   //làm tròn dưới
 *  -Math.random() //trả về 1 số thập phân ngẫu nhiên nhỏ hơn 1
 *  -Math.min()
 *  -Math.max()
 */
//random()
var random = Math.floor(Math.random() * 5);
var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];
console.log("random: ", bonus[random]); //10 coin : ngẫu nhiên
console.log(Math.min(-100, 1, 89, 50, 60)); //-100
console.log(Math.max(-100, 1, 89, 50, 60)); //89

/**
 * Callback?
 * Là hàm (function) được truyền qua đối số khi gọi hàm khác
 * 1. Là hàm
 * 2. Được truyền qua đối số
 * 3. Được gọi lại trong hàm nhận đối số
 */
function myFunction5(param) {
  if (typeof param === "function") {
    param("Học lập trình");
  }
}
function myCallback(value) {
  console.log("Value: ", value);
}
myFunction5(myCallback); //Value: Học lập trình

//Callback - phần 2
Array.prototype.map2 = function (callback) {
  var output = [];
  var arrayLength = this.length;
  console.log(arrayLength); // 3 : ['Javascript', 'PHP', 'Ruby']
  for (var i = 0; i < arrayLength; ++i) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;
};
var courses8 = ["Javascript", "PHP", "Ruby"];

var html = courses8.map2(function (course) {
  return `<h2>${course}</h2>`;
});
console.log(html.join(""));

//forEach, find, filter, some, every, reduce

//forEach : đại diện cho vòng lặp for/in không care length bao nhiêu
//chỉ quan tâm có giá trị thật sự trong mảng không

Array.prototype.forEach2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};

var courses9 = new Array(1000);
courses9.push("Javascript", "PHP");

courses9.forEach2(function (course, index, array) {
  console.log(course, index, array);
  //Javascript 1000 (1002) [empty × 1000, 'Javascript', 'PHP']
  //PHP 1001 (1002) [empty × 1000, 'Javascript', 'PHP']
});

//filter
Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var result = callback(this[i], i, this);
      if (result) {
        output.push(this[i]);
      }
    }
  }
  return output;
};
var courses11 = [
  {
    name: "Javascript",
    coin: 680,
  },
  {
    name: "PHP",
    coin: 860,
  },
  {
    name: "Ruby",
    coin: 980,
  },
];
var filterCourse = courses11.filter2(function (course, index, array) {
  // console.log(course, index, array)
  return course.coin > 700;
});
console.log(filterCourse);

//some: true / false : kiểm tra tối thiểu 1 phần tử trong mảng thoả mãn điều kiện
Array.prototype.some2 = function (callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        return true;
      }
    }
  }
  return false;
};
var courses12 = [
  {
    name: "Dart",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];
var someCourse = courses12.some2(function (course, index, array) {
  return course.isFinish;
});
console.log("some2: ", someCourse); // true

//every: true/false : kiểm tra tất cả elements trong mảng phải thoả mãn điều kiện
Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

var everyCourse = courses12.every2(function (course, index, array) {
  return course.isFinish;
});
console.log("every2: ", everyCourse);

//HTML DOM
/**
 * DOM có 3 thành phần
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */
//Javascript: Browser | Server (NodeJS)
//Browser: HTML -> DOM -> WEB API
var headingNode = document.getElementById("heading");
console.log(headingNode); //<h1 id="heading">JAVASCRIPT BASIC</h1>
var headingNode1 = document.getElementsByClassName("heading");
console.log(headingNode1); //HTMLCollection(3) [h1.heading, h1.heading, h1.heading]

//Css Selectors
var headingElement = document.querySelector(".boxx .heading-2:nth-child(2)");
console.log(headingElement); //<h2 class="heading-2">Heading 2</h2>

var headingNodes = document.querySelectorAll(".boxx .heading-2");
console.log(headingNodes); //NodeList(3) [h2.heading-2, h2.heading-2, h2.heading-2]

//Dom attributes
var headingEl = document.querySelector("h1");
headingEl.setAttribute("data-1", "headinggg");
headingEl.title = "Title test";
console.log(headingEl.getAttribute("class")); //heading-text
console.log(headingEl.getAttribute("title")); //Title test

//innerText, textContent
var headingEle = document.querySelector(".heading-test");

console.log(headingEle.innerText); //JAVASCRIPT BASIC Text
//innerText: lấy ra giống như những gì mình nhìn thấy mà thẻ đó show ra trên browser
console.log(headingEle.textContent);
// JAVASCRIPT BASIC
// Heading
// Text

//     .box {
//         width: 100px;
//         height: 100px;
//     }
// textContent: lấy nguyên bản textNode, tất cả những textNode trong thẻ element đó
headingEle.texContent = "New Heading";
headingEle.innerText = "<i>New Heading</i>";
//<i>New Heading</i> : k thể đưa thẻ tag vào innerText được

//innerHTML, outerHTML
//innerHTML: giúp thêm 1 element node, textNode, attribute node vào trong 1 element khác
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1>Heading</h1>";

console.log(document.querySelector("h1").innerHTML);

//DOM style
var boxEle = document.querySelector(".box");
console.log(boxEle.style);
//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

//cách gán Object.assign này là set css inline
Object.assign(boxEle.style, {
  width: "150px",
  height: "100px",
  backgroundColor: "green",
});
console.log(boxEle.style.backgroundColor); //green

/**
 * ClassList property
 * add
 * contains
 * remove
 * toggle
 */
var boxElem = document.querySelector(".box");
console.log(boxElem.classList); //DOMTokenList(2) ['box', 'box-2', value: 'box box-2']
boxElem.classList.add("red", "blue");

console.log(boxElem.classList.contains("red")); //true

boxElem.classList.remove("red"); // xoá class khỏi element
boxElem.classList.toggle("red"); // có rồi thì xoá, chưa có thì thêm vào

//DOM events
//1. Attributes events
//2. Assign event using the element node
var h3Element = document.querySelectorAll("h3");
for (var i = 0; i < h3Element.length; ++i) {
  h3Element[i].onclick = function (e) {
    console.log(e.target); //<span>DOM events 3</span> tuỳ vào click vào thẻ span nào
  };
}

//1. Input / select
//2. Key up/down
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e) {
  console.log(e.target.value);
};
inputElement.onkeydown = function (e) {
  console.log(e);
  //KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
};
//keyup : là khi bấm xuống r nhấc lên thì mới thực thi
//keydown: là khi bấm xuống là thực thi
//keypress: là thưc thi liên tục khi bấm xuống
inputElement.onkeyup = function (e) {
  console.log(e.which); // bắt được keyboard trên bàn phím ng dùng gõ vào
  switch (e.which) {
    case 27: //27: esc
      console.log("Exit");
      break;
  }
};

var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function (e) {
  console.log(e.target.checked);
};

var selectElement = document.querySelector("select");
selectElement.onchange = function (e) {
  console.log(e.target.value);
};

//1. preventDefault : ngăn chặn hành vi mặc định mà nó bình thường hay xảy ra
//2. stopPropagation : ngăn chặn hành vi nổi bọt, lan truyền
var aElements = document.links;
for (var i = 0; i < aElements.length; ++i) {
  aElements[i].onclick = function (e) {
    //chỉ cho chuyển trang khi click đúng url 'https://f8.edu.vn'
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

var ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
  // ngăn chặn hành vi mặc định của trình duyệt xảy ra khi on mouse down lên ul
  e.preventDefault();
};
ulElement.onclick = function (e) {
  console.log(e.target);
};

//stopPropagation
document.querySelector("div").onclick = function () {
  console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me!");
};

//Event listener
//1. Xử lý nhiều việc khi 1 event xảy ra
//2. Lắng nghe / Huỷ bỏ lắng nghe

var btn = document.getElementById("btn");
function viec1() {
  console.log("Viec 1");
}
function viec2() {
  console.log("Viec 2");
}
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);
setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);

/**
 * 1. Event listener -> OK
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best pratices
 * 9. Mistakes
 * 10.Performance
 */

//1. JSON là định dạng dữ liệu (chuỗi)
//2. Javascrip Object Notation
//3. JSON: Number, String, Boolean, Null, Array, Object

//Mã hoá                      / Giải mã
//Encode                      / Decode
//Stringify                    / Parse
//Tu Javascript types -> JSON / Tu JSON -> Javascript types

var json = '["Javascript", "PHP"]'; // array json
console.log(JSON.parse(json)); //['Javascript', 'PHP']

var jsonObject = '{"name": "Minh Hung", "age": 32}';

var jsonNum = "1";
console.log(JSON.parse(jsonNum)); //1 : number

var jsonBoolean = "true";
console.log(typeof JSON.parse(jsonBoolean)); //boolean

console.log(JSON.stringify(["Javascript", "PHP"])); //["Javascript","PHP"] : string

/**
 * Promise
 * - Sync
 * - Async
 * - Nỗi đau
 * - Lý thuyết, cách hoạt động
 * - Thực hành, ví dụ
 */
//Sync / Async
// Đồng bộ là nào viết trước thực thi trước, viết sau thực thi sau
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// console.log(2); // số 2 in ra trước, 1s sau in ra số 1

//setTimeout, setInterval, fetch, XMLHttpRequest : đây là những thao tác bất đồng bộ

//Pyramid of doom
//Callback hell
// setTimeout(function () {
//   console.log(1); //viec 1
//   setTimeout(function () {
//     console.log(2); //viec 2
//     setTimeout(function () {
//       console.log(3); //viec 3
//       setTimeout(function () {
//         console.log(4); //viec 4
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/**
 * Promise
 * 3 trạng thái:
 * 1. Pending
 * 2. Fulfilled
 * 3. Rejected
 */
//var promise = new Promise( //Promise nhận vào constructor 1 function
//Executor
//function (resolve, reject) {
//gọi function executor này trước khi nhận vào đối tương promise
//Logic
//Thành công: resolve()
//Fake call API
// resolve([
//     {
//         id: 1,
//         name: 'Javascript'
//     }
// ])

//Thất bại: reject()
//reject("Co loi"); // Failure, Done
//}
//);
//then và catch nhận vào callback function, vào then khi promise resolve, vào catch khi promise reject

// promise
//     .then(function(course){
//         console.log(course) //0: {id: 1, name: 'Javascript'}, Done
//     })
//     .catch(function(error){
//         console.log(error) // Co loi, Done
//     })
//     .finally(function(){
//         console.log('Done')
//     })

//Promise chain
// var promiseChain = new Promise(
//     function(resolve, reject){
//         resolve()
//     }
// )
// promiseChain
//     .then(function(){
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3])
//             }, 3000)
//         })
//     })
//     .then(function(data){
//         console.log(data) //[1,2,3], Done
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(){
//         console.log('Done')
//     })

// function sleep(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms)
//     })
// }
// sleep(1000)
//     .then(function(){
//         console.log(1) //1 : sau 1s
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000)//2: sau 2s
//     })
//     .then(function() {
//         console.log(3)
//         return sleep(1000)//3: sau 3s
//     })
//     .then(function() {
//         console.log(4)
//         return sleep(1000)//4: sau 4s
//     })

// function sleepReject(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }
// sleepReject(1000)
//   .then(function () {
//     console.log(1); //1 : sau 1s
//     return sleepReject(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return new Promise(function (resolve, reject) {
//       reject("Có lỗi chỗ này nè");
//     });
//   })
//   .then(function () {
//     console.log(3);
//     return sleepReject(1000);
//   })
//   .then(function () {
//     console.log(4);
//     return sleepReject(1000);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
//in ra 1,2, Có lỗi chỗ này nè : ko in ra 3,4

//Promise.resolve
// var promiseResolve = Promise.resolve("Success!");
// promiseResolve.then(function (result) {
//   console.log("result:", result); //result: Success!
// });

//Promise.reject
// var promiseReject = Promise.reject("Error!");
// promiseReject
//   .then(function (result) {
//     console.log("result:", result);
//   })
//   .catch(function (error) {
//     console.log("error: ", error); //error: Error!
//   });

//Promise.all
// var promiseAll1 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([1])
//         },1000)
//     }
// )
// var promiseAll2 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([2,3])
//         },2000)
//     }
// )
// Promise.all([promiseAll1, promiseAll2])
//     .then(function(result){
//         var result1 = result[0]
//         var result2 = result[1]
//         console.log(result1.concat(result2)) // [1,2,3]
//     })
//promise all nếu có 1 thằng bị reject
// var promiseAllReject = Promise.reject('Co loi!')
// Promise.all([promiseAll1, promiseAllReject])
//     .then(function([result1, result2]){
//         console.log(result1.concat(result2))
//     })
//     .catch(function(error){
//         console.log(error) //Co loi!
//     })

/** ES6
 * 1. Let, const
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function
 * 5. Classes
 * 6. Default parameter values
 * 7. Destructuring
 * 8. Rest parameters
 * 9. Spread
 * 10. Enhanced object literals
 * 11. Tagged template literals
 * 12. Modules
 */

//1. Var / Let, Const: Scope, Hoisting
//2. Const / Var, Let: Assignment
//Code block: if else, loop, {}...

if (true) {
  var course = "Javascript";
}
console.log(course); // Javascript

if (true) {
  const coursePHP = "PHP";
}
//console.log(coursePHP) //Uncaught ReferenceError: coursePHP is not defined

{
  let courseJava = "Java";
  {
    {
      console.log(courseJava); //Java : truy cập được vì let nằm trong khối {} lớn
    }
  }
}
{
  const courseDart = "Dart";
  {
    {
      const courseDart = ".Net"; //courseDart không bị trùng
      console.log(courseDart); //.Net : ưu tiên block gần nhất
    }
  }
}
//Hoisting
e = 1;
var e;
console.log(e); //1
// sẽ hoisting lên đầu var e;
//chỉ có var hỗ trợ hoisting, const let ko được hoisting
// t = 1;
// let t;
//console.log(t)//Uncaught SyntaxError: Identifier 't' has already been declared (at main.js:1596:5)

const courseConst = {
  name: "Javascript",
};
courseConst.name = "PHP";
//đây chi là thay đổi thuộc tính name cho object courseConst
//chứ không phải gán lại chính thằng courseConst
console.log(courseConst.name); //PHP

//Code thuần: var
//Babel: const, let
//khi định nghĩa biến và không gán lại biến đó: const
//khi cần gán lại giá trị cho biến : let

//Arrow function
const sum = (a, b) => a + b;
console.log(sum(2, 2)); //4

const sum2 = (a, b) => {
  return {
    a: a,
    b: b,
  };
};
//cách viết ngắn: const sum2 = (a,b) => ({a:a, b:b})

const context = {
  name: "PHP",
  getName: function () {
    return this; //context
  },
};
console.log(context.getName()); //{name: 'PHP', getName: ƒ}

const context1 = {
  name: "PHP",
  getName: () => {
    return this; //arrow function ko có context của chính nó, nên trả về object window
  },
};
console.log(context1.getName()); //Window {window: Window, self: Window, document: document, name: 'Hung Nguyen', location: Location, …}

//arrow function không có constuctor
const Course3 = (name, price) => {
  this.name = name;
  this.price = price;
};
//const jsCourse = new Course3('Golang', 1000)
//console.log(jsCourse)//Uncaught TypeError: Course3 is not a constructor

//Mutiline string
const lines = "Line1\nLine2";
console.log(lines); //Line1 Line2

const lines2 = "Line1\n" + "Line2\n" + "Line3\n";
console.log(lines2);

const lines3 = `Line1
Line2
Line3`;
console.log(lines3); //Line1 Line2 Line3: tự xuống hàng

//Classes
class CourseClass {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  run() {
    const isSuccess = false;
  }
}
const netCourse = new CourseClass(".NET", 3000);
const jsCourse = new CourseClass("Javascript", 4000);
console.log(netCourse); //CourseClass {name: '.NET', price: 3000}
console.log(jsCourse); //CourseClass {name: 'Javascript', price: 3000}

//Enhanced object literals
//1.Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var nameGolang = 'Golang'
var price = 1000;
var courseEOL = {
  nameGolang,
  price,
  getName() {
    return nameGolang;
  }
}
console.log(courseEOL)//{name: 'Golang', price: 1000}
console.log(courseEOL.getName())//Golang

var fieldName = 'name'
var fieldPrice = 'price'
const course7 = {
  [fieldName] : 'Flutter',
  [fieldPrice] : 1000
}
console.log(course7) //{name: 'Flutter', price: 1000}

//Default parameter
function defaultParam(param) {
  if(typeof param === 'undefined') {
    param = 'Gia tri mac dinh'
  }
  console.log(param)
}
defaultParam()//Gia tri mac dinh

function defaultParamEs6( param = 'Default Value'){
  console.log(param)
}
defaultParamEs6(undefined) //Default Value

function alert1(log, type='log') {
  console[type](log)
}
// alert1('Message...', 'error')

//Destructuring
var arrayDest = ['Javascript', 'Flutter', 'React', 'Angular']
var [a,b,c] = arrayDest;
console.log(a,b,c)//Javascript Flutter React  

var courseSpread = {
  name1: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name1: 'Reactjs'
  }
}
var {name1, ...rest} = courseSpread;
console.log(name1)//Javascript
console.log(rest)//{price: 1000, image: 'image-address'}

var {name1: parentName, children:{name1}} = courseSpread;
console.log(name1) //Reactjs

var {description = 'default description'} = courseSpread;
console.log(description) //default description 

function Spread(...params) {
  console.log(params)
}
console.log(Spread(1,2,3,4,5,6,7,8))//(8) [1, 2, 3, 4, 5, 6, 7, 8]

//Rest parameter
function restFunc({name, price, ...rest}){
  console.log(name) //JS
  console.log(price) //1000
  console.log(rest) //{description: 'Description content'}
}
restFunc({
  name: 'JS',
  price: 1000,
  description: 'Description content'
})

//Spread operator
var defaultConfig = {
  api: 'https://domain-trang-khoa-hoc',
  apiVersion: 'v1',
  other: 'other'
}
var exerciseConfig = {
  ...defaultConfig,
  api: 'https://domain-trang-bai-tap'
}
console.log(exerciseConfig) //{api: 'https://domain-trang-bai-tap', apiVersion: 'v1', other: 'other'}


var arraySR = ['Angular', 'React', 'Vue', 'Flutter']
//đây là rest vì truyền vào tham số
function spreadRest(...rest) {
  for (var i = 0; i < rest.length; i ++) {
    console.log(rest[i])
  }
}
//đây là spread vì đây là truyền đối số
spreadRest(...arraySR) // Angular React Vue Flutter

//Tagged template literals
function highLight([first, ...strings], ...values) {
  //console.log('first: ', first);//first:  Học lập trình
  //console.log('strings: ', strings);//strings:  (2) [' tại ', '']
  //console.log('values: ', values);//values:  (2) ['Javascript', 'F8']

  return values.reduce(
    (acc, curr) => [...acc,`<span>${curr}</span>`, strings.shift()],
    [first]
  )
  .join('')
}
var brand = 'F8'
var course = 'Javascript'
const html1 = highLight`Học lập trình ${course} tại ${brand}!`
console.log(html1)//Học lập trình <span>Javascript</span> tại <span>F8</span>!


