/**
 * 1. IIFE
 * 2. Closures
 * 3. Hoisting
 * 4. Strict mode
 * 5. This keyword
 * 6. Bind method
 * 7. Call method
 * 8. Apply method
 * 9. Catching, throwing erros
 * 10.Promise
 * 11. Async function await
 */

//Function Expression
const callNow = function() {
    console.log('NOW')
}
callNow();

//IIFE
(function() {
    console.log('IIFE')
})();

(function(message){
    console.log('Message: ', message)
})('Chào bạn!') //Message: Chào bạn!

//IIFE là private, ko gọi lại nó ở phạm vi bên ngoài được
//dùng đệ quy để gọi lại nó
let i = 0;
(function myFunc(){
    i++;
    console.log(i) // in ra từ 1 -> 10
    if(i< 10) {
        myFunc()
    }
})()

//mục đích dùng IIFE tạo phạm vi mới, đoạn code bên trong ko ảnh hưởng dự án gốc
//hầu hết thư viện đều viết bằng IIFE
;(function() {
    let fullName = 'Minh Hung'
})
//ko thể truy cập biến bên trong IIFE
//console.log(fullName)//Uncaught ReferenceError: fullName is not defined


//1 cách khác để tạo IIFE, dùng dấu + hay ! đều được nhưng ít xài
-function() {
    let fullName = 'MH';
    console.log(fullName)
}()

//biến cars is private, function add, edit , delete is public
const app = (function(){
    //Private
    const cars = []
    return {
        get(index){
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        },
    }
})();
app.add('BMW'); // undefined
app.get(0); //BMW


//Scope
// Thử tưởng tượng phạm vi scope trong Javascript như 1 chiếc hộp 
// chứa những chiếc hộp khác bên trong
// Chiếc hộp to nhất là global scope -> logger là chiếc hộp bên trong hộp global
// Chiếc hộp trong cùng là logger 2
// Biến trong hộp lớn nhất có thể truy cập bên trong những chiếp hộp nhỏ hơn
// nhưng biến trong hộp nhỏ hơn không thể truy cập bên ngoài chiếc hộp lớn hơn
// theo chiều xuôi
function logger(first, last) {
    const age = 18
    function logger2() {
        console.log(age)
    }
    //mỗi khi chạy hàm logger sẽ tạo 1 phạm vi mới
    console.log(first, last)
    logger2()
}
logger('Son', 'Dang') // Son Dang 
logger('Minh', 'Hung') // Minh Hung
logger('Dung', 'Nguyen')// Dung Nguyen

const age = 18
{
    const age = 16
    {
        {
            console.log(age) // 16 : lấy biến ở phạm vi gần nhất, 
            //và biến age khai báo ở 2 phạm vi khác nhau nên k báo lỗi
        }
    }
}

//Tránh việc đặt biến ngoài phạm vi global vì sẽ tốn bộ nhớ
// khi 1 function được thực thi xong, thì biến trong hàm đó sẽ xoá khỏi bộ nhớ

function makeCounter() {
    let counter = 0

    function increase() {
        return ++counter
    }
    return increase
}
const increase1 = makeCounter()
console.log(increase1())//1
console.log(increase1())//2
console.log(increase1())//3
// giải thích: biến increase1 được lưu trong bộ nhớ vì là global scope
// nên lần gọi sau tăng lên 1 và 2 và 3


//Closure
function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }
    return increase
}
const counter1 = createCounter()
console.log(counter1()) //1
console.log(counter1()) //2
console.log(counter1()) //3

//Ứng dụng closure để viết hàm logger
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}
//=============App=============
//Register.js
const infoLogger = createLogger('Info') 
//[Info] Bắt đầu gửi mail
infoLogger('Bắt đầu gửi mail') 
//[Info] Gửi mail lỗi lần 1, thử gửi lại...
infoLogger('Gửi mail lỗi lần 1, thử gửi lại...')

//Forgot Password.js
const errorLogger = createLogger('Error')
errorLogger('Email không tồn tại trong DB')
//[Error] Email không tồn tại trong DB
errorLogger('Gửi mail lỗi lần 1, thử gửi lại...')
//[Error] Gửi mail lỗi lần 1, thử gửi lại...

//ví dụ khác
function createStorage(key){
    // toán tử ?? mặc định nếu biểu thức đứng trước 
    // trả về undefined, null sẽ lấy vế đằng sau
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }
    return storage
}   
// Profile.js
const profileSetting = createStorage('profile_setting')
console.log(profileSetting.get('fullName')) 
// Minh Hung : lấy giá trị trong local storage và in ra

profileSetting.set('fullName', 'Minh Hung') 
//tạo giá trị trong local storage

//ví dụ khác của Closure : private như trong OOP
function createApp() {
    const cars = []

    return {
        add(car){
            cars.push(car)
        },
        show(){
            console.log(cars)
        }
    }
}
const app1 = createApp()
app1.add('BMW')
app1.show() // ['BMW']
app1.add('HOnda')
app1.add('Porsche')
app1.show()//(3) ['BMW', 'HOnda', 'Porsche'] : luôn trả ra giá trị mới nhất
// private là bên ngoài ko thể sửa được biến cars, chỉ sửa được hàm return public ra ngoài 