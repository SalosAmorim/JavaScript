var now = new Date()
var hour =  now.getHours()
var minutes = now.getMinutes()
var msg = document.getElementById('msg')
var img = document.getElementById('img')

function start(){
    msg.innerHTML = `It's ${hour}:${minutes} now.`
    img.src = `img-day.jpg`
}

