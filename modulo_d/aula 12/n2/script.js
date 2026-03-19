function AgeCheck(){
    var date = new Date()
    var now_year = date.getFullYear()
    var result = document.getElementById('result')
    var birthyear = Number(document.getElementById('birthyear').value)
    var age = now_year - birthyear
    var gender = document.getElementsByName('radiogender')



    if(birthyear > now_year || birthyear < 1900){
        window.alert('[ERROR] Please check the information and try again. ')
    } else if(age >= 65) {
        birthyear = 'Senior'
    } else if(age >= 18){
        birthyear = 'Adult'
    } else if(age >= 12){
        birthyear = 'Teen'
    } else if(age >= 6){
        birthyear = 'Child'
    }

    if(gender[0].checked == true){
        result.innerHTML = `You are: ${birthyear} Male with ${age} years.`
        result.style.textAlign = 'center'
    }else if(gender[1].checked == true){
        result.innerHTML = `You are: ${birthyear} Female with ${age} years.`
        result.style.textAlign = 'center'
    }else{
        window.alert('[ERROR] Please check the information and try again. ')
    }


}