/*
Hàm built-in
1.Alert
2.Console
3.Confirm
4.Prompt
5. Set timeout //Cách 1 khoảng thời gian chạy 1 lần(không lặp lại)
6. Set interval //Cách 1 khoảng thời gian chạy 1 lần(lặp lại)
 */

/*
Toán tử ++ -- 
Prefix & Postfix */

/*
Chuỗi

Case sử dụng backslash
- var fullName = 'Nam Le Le la \'abc\' abc';

1.Length
console.log(fullName.length)

2.Find index
console.log(fullName.indexOf('Le')); return 5
console.log(fullName.indexOf('Nam')) return 0
console.log(fullName.indexOf('Le),6) 6:vị trí bắt đầu tìm kiếm, return 8 

3.Cut string
console.log(fullName.slice(7,9)) return Le, 5:start, 7: end
console.log(fullName.slice(-2,0 )) return abc

4.Replace
// Chỉ tìm đc 1 chữ đầu tiên
console.log(fullName.replace('Le', 'nam')) return Nam nam Le la ....
// Biểu thức chính quy trả về toàn bộ
console.log(fullName.replace(`/Le/g, 'nam')) return Nam nam nam la ....

5.Covert to upper case 
console.log(fullName.toUpperCase());

6. Covert to lower case
console.log(fullName.toLowerCase());

7.Trim
console.log(fullName.trim()); // xóa kí tự khoảng trắng 2 đầu

8.Split
var language = 'JS, PHP, Ruby, JavaScript'
console.log(language.split(', ')); Tách thành array, 
// ', ' điểm chung để cắt thành phần tử

9.Get a character by index
var myString='Nam Le'
console.log(myString.charAt(0)) return N // 0: vị trí lấy
*/

/*
Array

var language = 
    {

    }'JavaScr
    'Ruy'
];

var'PH     language2 = [
    'Da}rt',
    'Java'
]

1.To string
language.toString() => JavaScript,PHP,Ruby

2. Join
language.join('')=>JavaScriptPHPRuby
language.join(', ')=>JavaScript, PHP, Ruby

3. Pop //Xóa element cuối array và trả về ptử đã xóa
language.pop() => Ruby

4. Push // Thêm ptử cuối mảng và trả về độ dài mới của mảng
language.push('Dart')=>JavaScript,PHP,Ruby,Dart
language.push('Dart', 'Java')=> JavaScript,PHP,Ruby,Dart,Java

5. Shift //Xóa element đầu array và trả về ptử đã xóa
language.shift()=>JavaScript

6. Unshift // Thêm ptử đầu mảng và trả về độ dài mới của mảng
language.unshift('Dart', 'Java') => Dart, Java, JavaScript, PHP, Ruby

7. Splicing //Xóa, cắt, chèn ptử mới vào array
//Xóa
language.splice(1, 1) => JavaScript,Ruby
language.splice(1, 2) => JavaScript
//Chèn 

//1: index nơi chèn, 0: có xóa gì ko
language.splice(1, 0, 'Dart') => JavaScript,Dart,PHP,Ruby 
language.splice(1,1, 'Dart') => JavaScript,Dart,Ruby

8. Concat // Nối array
language.concat(language2) => JavaScript,PHP,Ruby,Dart,Java //Hợp vào mảng language

9. Slicing
//1: Vị trí bắt đầu, 2: vị trí kết thúc
language.slice(1, 2) => PHP
language.slice(0) => JavaScript,PHP,Ruby
language.slice(-2, -1) => PHP

*/


/*
Function

- Argument

function log(){
    console.log(arguments)
}

log('Log 1', 'Log 2', 'Log 3'); => object

Các loại function:
1. Declare function

hosting: Có thể thực thi được khi gọi trước khi định nghĩa func

log();

function log(){}

2. Expression function

hosting: Không thể thực thi khi được gọi trước định nghĩa

var log = function () {}

setTimeout( function () {}=> { }, timeout);

var myOb= {
    myFunction : function () {}
}

3.Arrow function
*/



/*

Object

var myObject = {
    name: 'NamLe',
    age: 21,
    add: 'VN',
    getName: function(){
        return this.name;
    }

}

var myKey = 'name';

//add new key, new value 
myObject.email= 'abc@gmail.com'

//get value
myObject.name; => NamLe
myObject['name']; => NamLe
myObject[myKey]; => NamLe
myObject.getName(); => NamLe

//delete
delete myObject.name;



Object constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;;
    this.avatar = avatar;
    this.getName = (){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Nam', 'Le', 'Avatar');
var user = new User('Nam', 'Nam', 'Avatar');

Object Prototype

//Thêm thuộc tính, phương thức chung
User.prototype.className='PM1802'
User.prototype.getClassName = function() {
    return this.className;
}


*/



/*

Loop 

1. for - Lặp với điều kiện đúng
2. for in - Lặp qua các key của object

var myObject = {
    name: 'NamLe',
    age: 18,
    address: 'VN'
};

for (var key in myObject) {
    console.log(myObject[key]); => NamLe
                                   18
                                   VN
}

var myArray = [
    'JavaScript',
    'PHP', 
    'Ruby'
];

for (var key in myArray) {
    console.log(myArray[key]); => JavaScript
                                  PHP
                                  Ruby
}

3. for of - Lặp qua các value của Object, không lặp được qua value của object 

var myArray = [
    'JavaScript',
    'PHP', 
    'Ruby'
];

for (var value of myArray) {
    console.log(value); => JavaScript PHP Ruby
}

//Cách lấy qua object

for (var value of Object.values(myObject)){
    console.log(value);
}

4. while - Lặp khi điều kiện đúng
5. do while - Lặp ít nhất 1 lần, sau đó lặp lại khi điều kiện đúng

*/


/*
Array Methods

var courses = [
    {id: 1, name:'JavaScript', coin:250 },
    {id: 2, name:'HTML, CSS', coin: 0},
    {id: 3, name:'Ruby', coin: 0 },
    {id: 4, name:'PHP', coin: 400},
    {id: 5, name:'ReactJS', coin: 500 }
];

//Lập qua từng phần tử của mảng
1. forEach();

courses.forEach(function(course){
    console.log(index, course);
});

*Tái lập lại forEach

Array.prototype.forEach2 = function(callback) {  

    for (var index in this){
        if(this.hasOwnProperty(index)){  //Kiểm tra từng index có nằm trong thuộc tính gần nhất
                                         // chứ không phải nằm trong pr
            callback(this[index], index, this);
        }
    } 
}

//Kiểm tra tất cả phần tử phải thỏa mãn 1 điều kiện gì đó
2. every();

courses.every(function(course, index){
    return course.coin === 0; => false //Vì có coin != 0
})

*Tái lập lại every

Array.prototype.every2 = function(callback){
 
    var bool = false;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(!result){
                bool = false;
                break;
            }
            else {
                bool = true;
            }
        }
    }
    return bool;
}

var arrs = ['PHP', 'PHP', 'Ruby', 'JavaScript'];

var check = arrs.every2( (arr) => {
    return arr.length > 2;
})    

console.log(check)

//Kiểm tra chỉ cần 1 phần tử thỏa mãn 1 điều kiện gì đó
3. some(); 

courses.some(function(course, index){
    return course.coin === 0; => true //Vì có coin == 0
})

*Tái lập lại some 

Array.prototype.some2 = function(callback){
 
    var bool = false;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this);
            if(result){
                bool = true;
            }
            else {
                bool = false;
            }
        }
    }
    return bool;
}

//Tìm value, chỉ trả về 1 value duy nhất
4. find();

courses.find(function(course, index){
    return course.name === 'JavaScript'; => 1 object chứa name == 'JavaScript' //Vì có name == 'JavaScript'
})

//Tìm value, trả về tất cả phần tử thỏa mãn
5. filter();

courses.filter(function(course, index){
    return course.name === 'JavaScript'; => tất cả object chứa name == 'JavaScript' //Vì có name == 'JavaScript'
})

*Tái lập lại filter

Array.prototype.filter2 = function(callback) {
    var newArr = [];
    
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            
            var result = callback(this[index], index, this);

            if(result){
                newArr.push(this[index]);
            }
        };    
    }
    return newArr;
}

//Chỉnh sửa array
6. map();

var newCourses = courses.map(function(course, index){
    return {
        id: course.id,
        name: 'Khóa học: ' + course.name,
        coin: course.coin,
        coinText: 400
    }  
})
console.log(newCourses);

*Tái lập lại map()

Array.prototype.map2 = function(callback){
    for (var i = 0; i < this.length; i++){
        callback(this[i]);
    }
}


//Nhận về 1 giá trị duy nhất sau khi thực hiện trên array
7. reduce();

function coinHandler(accumulator, currentValue, currentIndex, originArray) { //originArray = courses
    return accumulator + currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler, 0)  //0: khởi tạo biến lưu trữ (initial value)

console.log(totalCoin);


//Flat - Làm phẳng mảng

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8 ,9]];

var flatArray = depthArray.reduce(function(output, depthItem ){
    return flatArray.concat(depthItem);
}, [])


// Tái lập lại reduce

var numbers = [1 , 3 , 5, 7];

Array.prototype.reduce2 = function (callback, result) {
    
    var i = 0;
    if(arguments.length < 2){
        i = 1;
        result = this[0];
    }
    
    for (; i < this.length; i++){  //Có truyền initial value, i = 2 nếu không truyền initial value
        result = callback(result, this[i], i, this);
    }

    return result;
}

var total = numbers.reduce2( (sum, number) => {
    return sum + number ;
})

console.log(total)


*/


/*

Math Object
1. Math.PI
2. Math.round() //Làm tròn số
3. Math.abs() // Trị tuyệt đối
4. Math.ceil() // Làm tròn trên
5. Math.floor() // Làm tròn dưới
6. Math.random() 
7. Math.min()
8. Math.max();

*/


/*

Callback
1. Là hàm
2. Được truyền qua đối số
3. Được gọi lại trong hàm đối số


*/


/*

1. Promise

- Sync (Đồng bộ)
- Async (bất đồng bộ)

+ setTimeout
+ setInterval
+ Fetch
+ xmlHttpRequest
+ file reading
+ request animation frame

- Pain

//Callback hell
// Pyramid of doom

- Lý thuyết, cách hoạt động 
- Thực hành



2. Fetch
3. DOM location
4. Local storage
5. Session storage
6. Coding convention
7. Best pratices
8. Mistakes
9. Performance

*/

 //3 trạng thái
//- Pending (trạng thái chờ)
//- Fullfilled (thực thi thành công)
//- Reject (thực thi thất bại)

// var promise = new Promise(
//     //Executor
//     function(resolve, reject) {
//         // Logic
//         // Success: resolve() 
//         resolve({
//             "name": "namle",
//             "age": 20
//         })
        
//         // Failed: reject()
//         reject('Error!');
//     }
// )

// promise
//       .then(function(data){
//           console.log(data);
//       }) //Đc thực thi khi gọi resolve
//       .catch(function(error){
//           console.log(error);
//       }) //Đc thực khi khi gọi reject
//       .finally(function(){}) //Đc thực khi khi gọi cả 2


// //Chain (chuỗi nối nhau)

// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     })
// }

// Chạy tuần tự
// sleep(1000)
//           .then(function(){
//               console.log(1)
//               return sleep(1000);
//           })
//           .then(function(){
//             console.log(2)
//             return sleep(1000);
//         })
//         .then(function(){
//             console.log(3)
//             return sleep(1000);
//         })


//Chạy đến khi gặp reject thì sẽ return ra catch
// sleep(1000)
//           .then(function(){
//               console.log(1)
//               return sleep(1000);
//           })
//           .then(function(){
//             console.log(2)
//             return new Promise(function(resolve,reject){
//                 reject('Error');
//             });
//         })
//         .then(function(){
//             console.log(3)
//             return sleep(1000);
//         })
//         .catch(function(error){
//             console.log(error);
//         })

//1. Promise.resolve

//var promise = Promise.resolve(); //Trả về luôn thành công

//2. Promise.reject (tương tự)

//3. Promise.all (Chạy song song 2 promise)
// var promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve([1])
//     }, 2000);
// })

// var promise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve([2,3])
//     }, 4000);
// })

// Promise.all([promise1, promise2]).then(
//     function(result){
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2)); 
//     }
// )

var users =[
    {id: 1,
    "name": "namle"},
    {id: 2, 
    "name": "abc"},
];

var comments = [
    {id:1,
    user_id:1,
    "content": "abc" },
    {id:2,
    user_id:2,
    "content": "xyz" },
    {id:3,
    user_id:1,
    "content": "sdas" },
    {id:4,
        user_id:1,
        "content": "sdas" }
];

function getComment(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        })
    }, 1000)
}

function getUsersByID(userIDs){
    return new Promise(function(resolve){
        setTimeout( function (){
            var result = users.filter(function(user){
                return userIDs.includes(user.id);
            })
            resolve(result);
        },1000)
    })
}

getComment()
          .then(function(comments){
              var userIDs = comments.map(function(comment){
                  return comment.user_id; 
              });

              return getUsersByID(userIDs)
                                .then(function(data){
                                    return {
                                        users: users,
                                        comments: comments
                                    };
                                });
          })
          .then(function(data){
              var commentBlock = document.getElementById('comment-box');
              var html ='';
              data.comments.forEach(function(comment){
                  var user = data.users.find(function(user){
                      return user.id == comment.user_id;
                  })
                  html += `<li>${user.name}: ${comment.content}</li>`
              })
              commentBlock.innerHTML = html;
          })





