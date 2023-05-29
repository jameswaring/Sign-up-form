const form = document.querySelector("#form-section")
const password = document.querySelector("#password").value
const passwordconf = document.querySelector("#passwordConf").value
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(password)
    console.log(passwordconf)
    if(password != passwordconf){
        document.getElementById("passmessage").innerHTML = "Password's don't match"
    }
})