let counter = 1896;
let el = document.getElementById('count');

let userName = document.getElementById('Name');
let number = document.getElementById('phone');
let mail = document.getElementById('mail');

let errorName = document.getElementById('errorName');
let errorPhone = document.getElementById('errorPhone');
let errorMail = document.getElementById('errorMail');
let btn = document.getElementById('started');

function checkName(name) {
    if (name != "" && name != null) {
        return true;
    }
    return false;
}

function checkNumber(num) {
    if (!isNaN(num) && num != null && num != '') {
        return true;
    }
    return false;
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        return true;
    }
    return false;
  }

function addValueToCounter(element, value) {
    element.textContent = value;
}
addValueToCounter(el, counter);

function clickBtn(){
    errorName.textContent ='';
    errorMail.textContent ='';
    errorPhone.textContent ='';
    if(checkName(userName.value) && checkNumber(number.value) && checkEmail(mail.value)){
        counter++;
        addValueToCounter(el, counter);

        userName.value = '';
        number.value = '';
        mail.value = '';
    }else{
        if(!checkName(userName.value)){
            errorName.textContent = "Check your name)"
        }
        if(!checkNumber(number.value)){
            errorPhone.textContent = "Check your phone number)"
        }
        if(!checkEmail(mail.value)){
            errorMail.textContent = "Check your email adress)"
        }
    }
}

btn.addEventListener("click", clickBtn);

