// setTimeout(()=>{
//     console.log("2 sec")
// },2000)

//import { callbackify } from "util"

// const names=["sonal","shikhar","yashi"]
// const sname=names.filter((name)=>{
//     return name.length<=5
// })
// console.log(sname)

// const add = (a, b,callback => {
//     setTimeout(()=>{
//         callback(a+b)
//          },2000)
    
// })
// add(1,4,(sum)=>{
//     console.log(sum)
// })
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})