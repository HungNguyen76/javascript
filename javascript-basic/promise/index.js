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
var users = [
  {
    id: 1,
    name: "Truong Son",
  },
  {
    id: 2,
    name: "Minh Hung",
  },
  {
    id: 3,
    name: "Phi Ho",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Anh Hung chua ra video :(",
  },
  {
    id: 2,
    user_id: 2,
    content: "Vua ra xong em oi :)",
  },
  {
    id: 3,
    user_id: 1,
    content: "Cam on anh :))",
  },
];
//1. Lấy comments
//2. Từ comments lấy ra user_id
//3. từ user_id lấy ra user tương ứng

//Fake API
function getComments() {
  return new Promise(function (resolve) {
    resolve(comments)
  });
}
function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    resolve(result)
  });
}
getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

//Fetch
//Front end: xây dựng hiển thị giao diện người dùng
//Back end : xây dựng logic xử lý + cơ sở dữ liệu
//API (URL) -> Application programing interface
//Cổng giao tiếp giữa các PM
//Backend -> API(URL) -> Fetch -> JSON/XML
//->JSON.parse -> Javascript types
//-> Render ra giao diện với HTML

var postAPI ="https://jsonplaceholder.typicode.com/posts"
//stream
fetch(postAPI)
  .then(function(response){
    return response.json();
    //JSON.parse -> Javascript types
  })
  .then(function(posts){
    var htmls = posts.map(function(post){
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </li>`
    })
    var html = htmls.join('')
    document.getElementById('post-block').innerHTML = html
  })    
  .catch(function(err){
    alert ('Có lỗi')
  })

