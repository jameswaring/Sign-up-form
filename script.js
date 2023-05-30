const form = document.querySelector("#form-section")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // check whether the passwords are the same
    if(!passConfirmCheck()){
        document.getElementById("passmessage").innerHTML = "Passwords don't match"
        document.getElementById("passwordConf").className="invalid-entered";
        document.getElementById("password").className="invalid-entered";
    }
    // check whether the password is strong enough
    else if(!checkPassStrength()){
        document.getElementById("passmessage").innerHTML = "Use letters, numbers, upper and lower case"
        document.getElementById("passwordConf").className="invalid-entered";
        document.getElementById("password").className="invalid-entered";
    }
    // success message
    else{
        document.getElementById("passmessage").innerHTML = "Account created. Redirecting..."
    }
})

document.getElementById("fname").addEventListener("click", function(e){
    console.log(e)
    if(document.querySelector("#fname").value == ""){
        document.getElementById("fname").className="invalid-entered";
    }
});

document.getElementById("surname").addEventListener("click", function(e){
    console.log(e)
    if(document.querySelector("#surname").value == ""){
        document.getElementById("surname").className="invalid-entered";
    }
});

document.getElementById("email").addEventListener("click", function(e){
    console.log(e)
    if(document.querySelector("#email").value == ""){
        document.getElementById("email").className="invalid-entered";
    }
});

document.getElementById("password").addEventListener("click", function(e){
    console.log(e)
    if(document.querySelector("#password").value == ""){
        document.getElementById("password").className="invalid-entered";
    }
});

document.getElementById("passwordConf").addEventListener("click", function(e){
    console.log(e)
    if(document.querySelector("#passwordConf").value == ""){
        document.getElementById("passwordConf").className="invalid-entered";
    }
});

function passConfirmCheck(){
    const password = document.querySelector("#password").value
    const passwordconf = document.querySelector("#passwordConf").value
    console.log(password===passwordconf)
    return (password===passwordconf ? true : false)
}

function checkPassStrength(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
    const password = document.querySelector("#password").value
    return (regex.test(password) ? true : false)
}

