const init = {
    cars: ['BMW']
}
export default function reducer(state = init, action, args) {
    switch(action) {
        case 'ADD':
            const [newCar] = args
            return { 
                ...state,
                cars: [...state.cars, newCar]
            }
        default: 
            return state
    }
}

/**
 * cách vận hành: đầu tiên sẽ chạy vào file main  
 * file main sẽ import attach
 * attach sẽ truyền đối số là component và root
 * attach được import từ createStore
 * logic của attach: khi được thực thi sẽ set root là key và component là value
 * sau đó gọi hàm render, sau đó sẽ map qua hàm root
 * hàm render được gọi, sẽ map qua roots, nhận lại root vừa set và component 
 * component lúc này là file App.js, file app là hàm, nên khi core chạy sẽ gọi hàm đó
 * trường hợp đầu tiên, hàm App sẽ được gọi, nó sẽ nhận value của hàm App => html
 * html này đẩy qua html trong core.js xử lý và trả về output
 * output lưu vào root trong html
 * cuối cùng được render ra view màn hình
 * 
 * store: trung tâm
 * createStore là hàm nhận đối số là hàm reducer, trường hợp mặc định phải return 
 * giá trị khởi tạo làm state ban đầu, nên ban đầu phải có giá trị init BMW
 * state ban đầu của reducer cũng là init luôn, 
 * trường hợp đầu tiên, những action chưa được thực hiện, nên lọt vào default
 * return state mặc định chính là BMW, nên state core ban đầu nhận được là init
 * 
 * sau init chỉ còn 2 hàm là connect, dispatch
 * connect: đẩy dữ liệu từ store ngược vào view
 *  -init state là BMW, 
 *  -trong App.js gọi hàm connect, thưc thi vào lưu vào connector
 *      + connect khi chạy nhận vào 1 arrow function (nhận đối số là component)
 *      + nên return được lưu vào connector
 *      + connector là 1 hàm nhận vào đối số là component, nên nhận App làm đối số
 *  -connector trả về 1 hàm mới nữa, hàm này chạy component, nên sẽ run function App
 *  -hàm mới này trả về 1 object được hợp nhất bởi props, kho state, đối số sẽ truyền vào trong tương lai
 *  
 * dispatch: 
 *  -khi bắt sự kiên onclick, sẽ gọi dispatch truyền vào 1 action và value
 *  -khi dispatch chay, gọi reducer => lấy state từ lần trước đó (BMW) làm đối số 
 *  và đẩy action và dữ liệu mới vào
 *  lúc này actions là ADD -> lấy dữ liệu mới từ args là car mới
 *  return về object mới từ object cũ + newCar cuối mảng
 *  -sau khi trả về state mới, gọi hàm render -> gọi component 
 *  -> gọi lại App -> thông qua connector -> chạy lại connect 
 *  -> lấy lại state mới -> view nhận car mới và render lại
 */