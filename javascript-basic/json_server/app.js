//4.Fetch
//JSON server: API server (Fake) / Mock API -> OK
// CRUD
// - Create: Tạo mới -> POST
// - Read: Lấy dữ liệu -> GET
// - Update: Chỉnh sửa dữ liệu -> PUT/ PATCH    
// - Delete: Xoá dữ liệu -> DELETE
//- Postman

var courseAPi = 'http://localhost:3000/courses'

function start() {
    //Lấy ra khoá học
    getCourses(renderCourses)
    handleCreateForm();
}
start();

//Functions
function getCourses(callback) {
    fetch(courseAPi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPi, options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseAPi + '/' + id, options)
        .then(function(response){
            response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if(courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course){
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">&times;</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}


function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name  = document.querySelector('input[name="name"]').value;
        var description  = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function() {
            getCourses(renderCourses)
        })
    }
}