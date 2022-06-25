## SO sánh

- Cú pháp truy cập

function fn() {
    //bind
    fn.bind()

    fn.call()

    fn.apply()
}

.Là các methods được kế thừa từ Function.prototype

function fn() {
    fn.bind === Function.prototype.bind //true
    fn.call === Function.prototype.call //true
    fn.apply === Function.prototype.apply //true
}

## Khác nhau
- Các đối số và cách hoạt động

function fn() {}
