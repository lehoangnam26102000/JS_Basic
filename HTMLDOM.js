/*

1. Element: ID, Class, Tags
//Css selector, HTML collection

var headingNode = document.querySelector('.title');
var get1BoxItem = document.querySelector('.box .heading-2:first-child'); // Lấy con đầu tiên của class box
var get2BoxItem = document.querySelector('.box .heading-2:nth-child(2)'); //Lấy thứ 2
var getAllItem = document.querySelectorAll('.box .heading-2') // Lấy tất cả


var getForm = document.forms;
var getForm1 = document.forms['form-1']; //   ||document.forms[0] //Giống như mảng, có thể vòng lặp để lấy
                                         //   Tương đương getElementsByTagName, getElementsByClassName, querySelectorAll

1. innerHTML // Thêm 1 element vào trong 1 element khác

var boxElement = document.querySelector('.box-2');
boxElement.innerHTML = '<h1>Heading 2</h1>';

console.log(boxElement.innerHTML); // Lấy ra element bên trong

2. outerHTML //Ghi đè element làm cho mất element bị ghi đè

2. Attribute

var headingElement = document.querySelector('h1');

//Add attribute title
headingElement.title='heading';

//Add className
headingElement.className = 'heading';

//Set attribute không hợp lệ cho element
headingElement.setAttribute('href', 'heading');

//get value Attribute
headingElement.getAttribute('class');

3. Text

-innerText //Chỉ lấy text, bỏ qua khoảng trắng, element tag bên trong
-textContent // Lấy text, lấy khoảng trắng, bỏ qua element tag bên trong
-innerHTML // Lấy text , khoảng trắng và element tag bên trong 


4. Node Properties
*/


/**

DOM CSS

var boxElement = document.querySelector('.box');

*Setter
//Cách 1
boxElement.style.width = '100%';
boxElement.style.height = '100%';

//Cách 2

Object.assign(boxElement.style, {
    width : '100%',
    height : '100%',
})

*Getter
console.log(boxElement.style.width); => 100%

*DOM Event

//onClick
var boxElement = document.querySelector('.box-2');

var h1Element = document.querySelectorAll('h1');

// boxElement.onclick = function(e){
//     alert(Math.random()*10);
//     console.log(e.target);
// }

for (var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function(e){
        console.log(e.target);
    }
}


//oninput

var inputElement = document.querySelector('input[type="text"]');
//get text in input
inputElement.oninput = function(e){
    console.log(e.target.value);
} 


//onchange

var inputElement = document.querySelector('input[type="checkbox"]');
//get text in input
inputElement.onchange = function(e){
    console.log(e.target.checked);
}


var inputElement = document.querySelector('select');
//get text in input
inputElement.onchange = function(e){
    console.log(e.target.value);
}


//onkeyup /on keydown
Dùng để chủ yếu xem là phím nào (e.which)


*preventDefault

var aElements = document.querySelectorAll('a');

for (var i = 0; i < aElements.length; i++){
    aElements[i].onclick = function(e){
        if(!e.target.href.startsWith("https://www.facebook.com")){
            e.preventDefault();
        }
    }
}

*stopPropagation

document.querySelector('.test').onclick = function(e){ // return DIV
    console.log('DIV');
}

document.querySelector('button').onclick = function(e){ // return click me, DIV
    e.stopPropagation(); // sẽ chỉ return lại click me
    console.log('Click me');
}

*/


/*

ClassList Property
1. add //Thêm class
2. contains //Kiểm tra class có tồn tại hay không
3. remove //Xóa class
4. toggle //Nếu có thì sẽ xóa, nếu không có sẽ thêm

var boxElement = document.querySelector('.box-2');

boxElement.classList.add('red');

*/


/**

EventListener

//Cách xử lý DOM Event
var buttonElement = document.querySelector('.btn');

buttonElement.onclick = function () { //Thực hiện công việc 1, 2
    console.log('viec 1');
    console.log('viec 2');
}

setTimeout(() => { //Sau 3 giây click không được nữa
    buttonElement.onclick = () => {}
}, 5000)

//Cách xử lý EventListener

function viec1() {
    console.log('viec 1');
}

function viec2() {
    console.log('viec 2');
}   

buttonElement.addEventListener('click', viec1)

buttonElement.addEventListener('click', viec2)

setTimeout(() => {
    buttonElement.removeEventListener('click', viec1)
},2000)

 */
//abc



