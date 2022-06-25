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


//Hoisting với var
console.log(address) //undefined
//console.log(lastName) //lastName is not defined
var address = 11

// Hoisting cho function : đối với function sẽ được hoisting nguyên cả function lên top luôn
console.log(sum(6,9)) //15

function sum(a,b){
    return a + b
}

//Hoisting với let và const
{
   // console.log(fullNam) 
    //Uncaught ReferenceError: Cannot access 'fullNam' before initialization
    let fullNam = 'Nguyen Minh Hung'
}
//Lưu ý: khai báo biến với "let", "const" khi được hoisted không tạo được giá trị
// và được đưa vào "Temporal Dead Zone"

//Bonus ví dụ hoisting
const counter2 = makeCounter()
console.log(counter2()) // in ra 1
 
function makeCounter() {
    let counter = 0

    return increase
    
    function increase() {
        return ++counter;
    }
}
/**
 * Với let a = 1: tạo ra biến a, cấp 1 ô nhớ, lưu 1 vào ô nhớ
 * 
 * Biến             Giá trị             Ô nhớ
 * a                1                   1
 * 
 * Với let b = a: Tạo ra biến b, cấp một ô nhớ khác, sao chép trị của a (là 1)
 * vào 1 ô nhớ mới
 * 
 * Biến             Giá trị             Ô nhớ
 * a                1                   1
 * b                1                   1
 */

//Primitive Type / value type
let a = 1
let b = a
a = 2
console.log(b) // 1


// ví dụ khác về Tham trị
function sum(a,b) {
    a = 0
    b = 0
    console.log(a,b) //0,0
}
const c = 1
const d = 2
sum(c,d)
console.log(c,d) //1,2


//Reference Type : Tham chiếu
/**
 * Cách hoạt động: với const aR = {name: 'Merz'}: tạo biến aR, cấp 1 ô nhớ, lưu
 * {name: 'Merz'} vào ô nhớ, trả về địa chỉ đã lưu và gán cho biến aR
 * 
 * Biến                 Giá trị             Địa chỉ             Ô nhớ
 * aR                     <#001>             #001                {name: 'Merz'}
 * 
 * Với const bR = aR. Tạo biến bR, trỏ biến bR tới cùng địa chỉ ô nhớ của biến aR
 * 
 * Biến                 Giá trị             Địa chỉ             Ô nhớ
 * aR                    <#001>              #001                {name: 'Merz'}
 * bR                    <#001>    
 * 
 * Với a.name = 'BMW' : Sửa giá trị của key name trong ô nhớ thành 'BMW'
 * 
 * Biến                 Giá trị             Địa chỉ              Ô nhớ
 * aR                    <#001>              #001                {name: 'BMW'}
 * 
 * Kết quả cuối cùng console.log(bR.name) là BMW. Vì a và b được trỏ tới cùng 1 ô nhớ
 * nên việc sửa đổi giá trị của object thông qua biến a và b là như nhau
 */
let aR = {
    name: 'Merz'
}
let bR = aR
aR.name = 'BMW'
console.log(bR) //{name: 'BMW'}


/**
 * Hãy cùng quan sát mô tả những gì diễn ra trong bọ nhớ
 * 
 * Biến             Giá trị             Địa chỉ             Ô nhớ
 * aC               <#002>              #001                {name: 'Porsche'}
 *                                      #002                {name: 'Honda', model: 'Civic'}
 * 
 * Mỗi khi tạo ra object mới với cú pháp {} thì sẽ có một ô nhớ mới được sử dụng
 * Trong ví dụ trên thì một đia chỉ mới #002 cũng đông thời được tạo ra va thay thế
 * cho dịa chỉ #001 của biến aC
 */
let aC = {
    name: 'Porsche'
}
aC = {
    name: 'Honda',
    model: 'Civic'
}

/**
 * Biến             Giá trị             Địa chỉ         Ô nhớ
 *                                      #001           {firstName:'Oanh', lastName:'Ha',introduction: 'Girl'}    
 * student          <#002>              #002           {name: 'Oanh Ha', profile:<#001>}
 */ 

const student = {
    name: 'Oanh Ha',
    profile: {
        firstName: 'Oanh',
        lastname: 'Ha',
        introduction: 'Girl'
    }
}
//ví dụ khác của Tham chiếu
function func(obj) {
    obj.name = 'Mercedes'
    console.log(obj)//{name: 'Mercedes'}
}
const ax = {
    name: 'BMW'
}
func(ax)
console.log(ax) // {name: 'Mercedes'}

//cách chữa ví dụ trên để trả về 2 object mới 
function createCar(obj) {
    obj = JSON.parse(JSON.stringify(obj)) //tạo biến obj mới, cấp phát vùng nhớ mới cho obj
    //còn 1 cách khác
    //obj = {...obj} // cách này chỉ dùng khi obj chỉ có 1 cấp
    obj.name = 'Mercedes'
    return obj
}
const car = {
    name: 'BMW'
}
const newCar = createCar(car)
console.log(car) // {name:'BMW'}
console.log(newCar) // {name:'Mercedes'}

//so sánh 2 object giống hệt nhau : phỏng vấn hay hỏi
let x = {
    name: 'BMW'
}
let y = {
    name: 'BMW'
}
console.log(x === y) //false vì x và y đang trỏ về 2 vùng nhớ khác nhau

//nhưng nếu gán x = y sẽ trả về true
x = y 
console.log(x === y) // true : vì giờ x và y đều trỏ về 1 địa chỉ vùng nhớ

// ví dụ này cũng sẽ hỏi khi phỏng vấn
const e = {
    name: 'Honda'
}
e.name = 'Huyndai'
console.log(e) // {name: 'Huyndai'}


//This keyword
const iPhone7 = {
    //Thuộc tính - Property
    name: 'iPhone 7',
    color: 'Pink',
    weight: 300,

    // Phương thức - Method
    takePhoto() {
        console.log(this)
    },
    
    objChild: {
        name: 'Object Child',
        methodChild() {
            console.log(this) // this ở đay sẽ chỉ đến objChild
        }
    }
}
iPhone7.objChild.methodChild() //{name: 'Object Child', methodChild: ƒ}

//ví dụ khác về This
function Car(name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function() {
        console.log('Running... ', this)
    }
}
const mercedesS450 = new Car('Mercedes S450', 'black', 1200)
console.log(mercedesS450.run()) 
//Running...  Car {name: 'Mercedes S450', color: 'black', weight: 1200, run: ƒ}

//1 ví dụ khác về this trong DOM của Html
// const button = document.querySelector('button')

// button.onclick = function() {
//     console.log(this) //<button>Click me!</button>
// }

//ví dụ về this trong OOP
function CreateNewCar(name, color) {
    this.name = name
    this.color = color
    
}
CreateNewCar.prototype.run = function() {
    //Context
    function test() {
        console.log(this) 
        // this này k phải của CreateNewCar mà của window, 
        //vì hàm run này tạo ở bên ngoài CreateNewCar
    }
    /**
     * nhưng nếu sài arrow function
     * const test = () => {
     *  console.log(this) 
     * // vì hàm arrow k có this
     * // nên this này sẽ tham chiếu đến hàm bên ngoài gần nhất của nó
     * // lúc này this nó sẽ lấy hàm run của CreateNewCar
     * //sẽ trả về CreateNewCar{name: 'Porsche', color: 'yellow'}
     * }
     */
    test()
}

const porsche = new CreateNewCar('Porsche', 'yellow')
const mercedesMaybach = new CreateNewCar('Mercedes Maybach', 'black')

console.log(porsche.name) // Porsche
console.log(mercedesMaybach.name) //Mercedes Maybach

console.log(porsche.run())//Window {window: Window, self: Window, document: document, name: '', location: Location, …}


//Bind method
this.firstName = 'Hung'
this.lastName = 'Nguyen'

const teacher = {
    firstName: 'Hung',
    lastName: 'Minh',
    getFullName(data1, data2) {
        console.log(data1, data2)
        return `${this.firstName} ${this.lastName}`
    }
}
const person = {
    firstName: 'Ho',
    lastName: 'PHi'
}
//Case 1: 
console.log(teacher.getFullName()) // Hung Minh

//Case 2:
const getTeacherName = teacher.getFullName.bind(person, 'Test 3', 'Test 4')
// bind trả về hàm mới
console.log(getTeacherName()) 
//Test 3 Tes 4
//Ho PHi

//Ví dụ về bind trong thực tế
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll

console.log(document.querySelector('#heading').innerText) //Hello bind() method

console.log($('#heading').innerText) //Uncaught TypeError: Illegal invocation
//báo lỗi vì do this trong trường hợp này k có context, ko biết trỏ về đâu
//vì hàm querySelector có con trỏ this nên bind vào document sẽ ko báo lỗi nữa  

//ví dụ khó hơn ứng dụng bind cho handle event listener

//dùng IIFE cho appRoot 
const appRoot = (() => {
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')
    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')
            root.innerHTML = html
        },
        handleDelete(e) {
            //closet là method của 1 DOM element, kiểm tra element đó hoặc cha 
            //của nó có chứa class đó hay ko
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn) {
                //data- là cách tạo ra dataset 
                //-> đặt tên index thì là dataset.index
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        init() {
            //Handle DOM events
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }
            //bind this để this trỏ về app mà ko trỏ về root
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})();
appRoot.init()



//Call method
function random() {
    console.log(Math.random())
}
random.call() //0.028769820153051073 : tương đương random() 
// call là 1 phương thức gọi hàm có sẵn trong constructor


const teacher1 = {
    firstName: 'Son',
    lastName: 'Dang'
}
const me = {
    firstName: 'Hung',
    lastName: 'Nguyen',
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
// call method sẽ bind this trước, sau đó gọi luôn hàm đó (bind + call)
// còn bind thì chỉ ràng buộc thôi
me.showFullName.call(teacher1) //Son Dang

//ví dụ khác của call nếu có strict mode 
/**
    'use strict'
    this.firstName: 'Son',
    this.lastName: 'Dang'

    function showFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
showFullName.call(this) // Son Dang
 */

//Ví dụ về call kế thừa trong OOP
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}
function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}
const chicken = new Chicken('Donald', 78, 2)
console.log(chicken) //Chicken {name: 'Donald', weight: 78, legs: 2}

function log() {
    console.log(arguments) //arguments này thừa hưởng constructor của Arguments
    
    //biến arguments thành array : học để hiểu nhưng ít xài 
    // dùng call để bind this thành arguments, và lặp qua 
    Array.prototype.forEach.call(arguments, item => {
        console.log(item) // 1 2 3 4 5
    })

    //còn 1 cách hay xài hơn của ES6
    const arr = [...arguments]
    console.log(arr)
}
log(1,2,3,4,5)// (5) [1, 2, 3, 4, 5]



//Apply method
const teacherApply = {
    firstName: 'Nhung',
    lastName: 'Nguyen'
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`
}

//apply tương tự như call, khác cú pháp []
let result1 = greet.apply(teacherApply, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)'])

console.log(result1) 
//Em chào cô Nhung Nguyen. Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)

//so sánh với call() method
result1 = greet.call(teacherApply, 'Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')
console.log(result1)


//ví dụ thứ 2
const chatting = {
    firstName: 'Minh',
    lastName: 'Thao',
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOffline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}
const me2 = {
    firstName: 'Hung',
    lastName: 'Nguyen',
    isOnline: false,
}
console.log('Teacher: ', chatting.isOnline) //Teacher:  false
chatting.goOnline() //Minh Thao is Online
console.log('Teacher: ', chatting.isOnline) //Teacher: true

console.log('Student: ', me2.isOnline) //Student:  false
chatting.goOnline.apply(me2) //Hung Nguyen is Online
console.log('Teacher: ', me2.isOnline) //Student: true

//apply kế thừa trong OOP
function AnimalParrot(name, weight) {
    this.name = name
    this.weight = weight
}
function Parrot() {
    AnimalParrot.apply(this, arguments) //kế thừa
    this.speak = function() {
        console.log('Nhà có khách')
    }
}
const conVet = new Parrot('Vẹt', 300)
console.log(conVet) //Parrot {name: 'Vẹt', weight: 300, speak: ƒ}


/**
 * Bind method
 * - Trả ra hàm mới với `this` tham chiếu tới `thisArg`
 * - Không thực hiện gọi hàm
 * - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
 */
// const newFn = fn.bind(thisArg, arg1, arg2, ...)

// newFn(arg1, arg2,...)


/**
 * Call method
 * - Thực hiện bidn `this` với `thisArg` va thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc từ `arg1, arg2 , ...`
 */
//fn.call(thisArg, arg1, arg2,...)

/**
 * Apply method
 * - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
 * - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
 */
//fn.apply(thisArg, [arg1, arg2, ...])