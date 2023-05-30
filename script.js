const form = document.querySelector("#form-section")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // check whether the passwords are the same
    if(!passConfirmCheck){
        document.getElementById("passmessage").innerHTML = "Password's don't match"
    }
    // check whether the password is strong enough
    else if(!checkPassStrength){
        document.getElementById("passmessage").innerHTML = "Use letters, numbers, upper and lower case"
    }
    // success message
    else{
        document.getElementById("passmessage").innerHTML = "Account created. Redirecting..."
    }
})


function passConfirmCheck(){
    const password = document.querySelector("#password").value
    const passwordconf = document.querySelector("#passwordConf").value
    return (password===passwordconf ? true : false)
}

function checkPassStrength(){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
    const password = document.querySelector("#password").value
    return (regex.test(password) ? true : false)
}