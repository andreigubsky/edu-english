// const playlist = ["My name", true, 5];

// // обект
// // ключ: значение

// const playObj = {
//     name: "My name",
//     rating: 5,
//     isFavorite: true,
//     tracks: ["track-1", "track-2"],
//     skills:{
//         html: true,
//         css: true,
//         js: false
//     }
// };

// const key = 'name';
// console.log(playlist)
// console.log(playObj.rating)

// //не знаем имя ключа свойства обьекта

// console.log(playObj[key])

// playObj["rating"]

// playObj.user = "Alice";
// //playObj["user"] = "Alice";

// // console.log(playObj)
// // console.log(playObj.tracks)

// console.log(playObj.skills.jss)

// const arr = [1,2,3]
// arr.hello = "la"
// console.log(arr)
// //console.log(Array.from() )

// function foo(){
//     console.log("hello")
// }

// foo.lala = "fdf"

// console.log(foo)

// const a = {x: 1, y: 2}
// const b = {x: 1, y: 2}
// const c = {...a};

// a.x = 100;
// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a==b)

//синтаксис коротких свойств js
// const username = 'Alice'
// const age = 20;

// const user ={
//     username,
//     age
// }

// console.log(user)

// function foo(name, age){
//     return {
//         name, age
//     }
// }

// console.log(foo("Dima", 20))

//обчислювальна властивість
// const inputName = "color"
// const obj = {
//     [inputName]: "red",
//     inputName: "red",
// }

// console.log(obj)

// const feedback = {
//   good: 5,
//   heutral: 3,
//   bad: 10,
// };

// let total = 0;

// // for(const key in feedback){
// //     console.log(key)
// //     console.log( feedback[key])
// // }

// // const keys = Object.keys(feedback);
// // console.log(keys)

// // for(const key of keys){
// //     console.log(total +=feedback[key]);
// // }

// // const values = Object.values(feedback);
// // for (const num of values){
// //     total+=num;
// // }
// // console.log(total);

// const user = {
//   name: 'Alice',
//   hobby: 'html',
//   premium: true,
// };

// const user2 = {
//   name: 'Petya',
//   hobby: 'html',
//   premium: true,
// };

// function foo(obj) {
//   obj.mood = 'happy';
//   obj.hobby = 'skydiving';
//   obj.premium = false;

//   console.log(user);

//   const userKeys = Object.keys(obj);
//   for (const key of userKeys) {
//     console.log(`${key} : ${obj[key]}`);
//   }
// }

// foo(user)
// foo(user2)


const salaries = {
    alice: 130,
    petya: 100,
    yura: 160
}

function summa(obj) {
    let sum = 0;
    const values = Object.values(obj);
    for(const value of values){
        sum+= value;
    }
    return sum;

}

console.log(summa(salaries));