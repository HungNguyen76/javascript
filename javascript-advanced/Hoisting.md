## Hoisting - Kéo lên / đưa lên

- Đưa các khai báo biến với "var" và khai báo hàm lên đầu phạm vi được khai báo

- Hoisting với "var", "function declaration"
- Xét ví dụ sau:
console.log(age) // undefined
console.log(fullName) //ReferenceError: fullName is not defined
var age = 16

- Xét ví dụ sau:

console.log(sum(6,9)) //15
function sum(a,b){
    return a + b
}

- Lưu ý: phần khai báo được đưa lên, phần gán không được đưa lên