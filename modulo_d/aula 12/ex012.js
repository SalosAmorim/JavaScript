var now = new Date()
var hour = now.getHours()

console.log(`It's ${hour}`)
if (hour <4){
    console.log(`Good night!`)
}else if(hour <12){
    console.log(`Good morning!`)
}else if(hour <18){
    console.log(`Good afternoon!`)
}else{
    console.log(`Good night`)
}