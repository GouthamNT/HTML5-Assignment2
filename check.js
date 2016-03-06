

function enter() {
    var input = document.querySelectorAll('input');
    var name = input[1].value + ', ' + input[0].value,
        email = input[2].value,
        password = input[3].value;
    console.log(input[1].value,input[0].value,input[2].value,input[3].value)
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('pass',password);
    for(var keyvalue in localStorage) {
        console.log(localStorage[keyvalue]);
    }
}

function check() {
    var input = document.querySelectorAll('input');
    var email = input[0].value,
        password = input[1].value;
    if(localStorage.getItem('email') === email && localStorage.getItem('pass') === password) {
        return true;
    } else {
        var message = document.querySelector('#message');
        message.textContent = 'Invalid email or password';
        return false;
    }
}

function fetch() {
    var result = document.querySelector('#result');
    result.textContent = 'Hi '+ localStorage.getItem('name');
}