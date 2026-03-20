function count(){
    var start = document.getElementById('startNumber')
    var end = document.getElementById('endNumber')
    var step = document.getElementById('stepNumber')
    var result = document.getElementById('result')
    result.innerHTML = ''
    result.style.fontSize = '25px'
    
    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        result.innerHTML = `Counting failed, pease try again.`
    }else if(Number(step.value) <= 0){
        result.innerHTML = `Please check the step number.`
    }else if(Number(start.value) > Number(end.value)){
        for(var i = Number(start.value); i >= Number(end.value); i -= Number(step.value)){
            result.innerHTML += `${i} \u{1F449} `
        }
        result.innerHTML += ` \u{1F3C1}`
    } else{
        for(var i = Number(start.value); i <= Number(end.value); i += Number(step.value)){
            result.innerHTML += `${i} \u{1F449} `
        }
        result.innerHTML += ` \u{1F3C1}`
    }
    

}