// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done"), 1000)
// })


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// })


// let promise = new Promise(function(resolve, reject) {
//     reject("done")

//     reject(new Error("..."))
//     setTimeout(() => resolve("..."))
// })


// let promise = new Promise(function(resolve, reject) {
//     reject(123)
// })


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000)
// })

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// })

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )


// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000)
// })

// promise.then(alert)


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Ошибка!")), 1000)
// })

// promise.catch(alert)


// new Promise((resolve, reject) => {
//     setTimeout(() => resolve('value'), 2000)
// })
//     .finally(() => alert("Промис завершен"))
//     .then(result => alert(result))


// new Promise((resolve, reject) => {
//     throw new Error("error")
// })
//     .finally(() => alert("Промис завершен"))
//     .catch(err => alert(err))


// let promise = new Promise(resolve => resolve("готово!"))

// promise.then(alert)


// function loadScript(src, callback) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script')
//         script.src = src

//         script.onload = () => resolve(null, script)
//         script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`))

//         document.head.append(script)
//     })
// }


// let promise = new Promise(function(resolve, reject) {
//     resolve(1)
//     setTimeout(() => resolve(2), 1000)
// })

// promise.then(alert)


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000).then(() => alert('выполнить через 3 секунды'))


// function showCircle(cx, cy, radius) {
    
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     return new Promise (resolve => {
//         setTimeout(() => {
//             div.style.width = radius * 2 + 'px';
//             div.style.height = radius * 2 + 'px';
//         }, 0);
//     })
//   }

// showCirle(150, 150, 100).then(div => {
//     div.classList.add('message-ball')
//     div.append("hello, world!")
// })