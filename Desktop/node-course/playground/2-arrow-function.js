// const square=function(x) {
//     return x*x

    
// }
// const square = (x) => {
//  return x*x }

// console.log(square(3))
const event={
    name: "Birthday party",
    guestList:['sonal','shikhar','yashi'],
    printGuestlist: function(){
        
        console.log("guest list for", this.name)
        this.guestList.forEach((guest) => {
            console.log(guest,"is attending", this.name)
        })
    }
   
}
event.printGuestlist()