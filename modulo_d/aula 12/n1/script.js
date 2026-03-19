function start(){
    var now = new Date()
    var hour =  now.getHours()
    var minutes = now.getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    hour = 5

    msg.innerHTML = `It's ${hour}:${minutes} now.`
    if(hour<5 || hour >=19){
        img.src = `img-night.jpg`
        document.body.style.background = `#0B1D3A`
    }else if(hour<12){
        img.src = `img-day.jpg`
        document.body.style.background = `#21cbff`
    }else if(hour<19){
        img.src = `img-afternoon.jpg`
        document.body.style.background = `#e2ae1d`
    }
}

