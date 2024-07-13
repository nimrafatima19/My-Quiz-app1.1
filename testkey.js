let keyInput = document.getElementById("keyInput")
let subBtn = document.getElementById("subBtn")
let cssSubBtn = document.getElementById("cssSubBtn")
let jsSubBtn = document.getElementById("jsSubBtn")
let csskeyInput = document.getElementById("csskeyInput")
let jskeyInput = document.getElementById("jskeyInput")

function submitkey(){
    if(keyInput.value == ""){
        alert("Please enter Test key 123")

    }else if(keyInput.value == "123"){
        window.location.assign("quiz.html")
    }
    else{
        alert("Invalid test key Please enter 123")
    }
}

subBtn.addEventListener("click",submitkey)

function csssubmitkey(){
    if(csskeyInput.value == ""){
        alert("Please enter Test key 234")

    }else if(csskeyInput.value == "234"){
        window.location.assign("quiz.html")
    }
    else{
        alert("Invalid test key Please enter 234")
    }
}
csssubmitkey()
// cssSubBtn.addEventListener("click",csssubmitkey)

function jsSubmitkey(){
    if(jskeyInput.value == ""){
        alert("Please enter Test key 345")

    }else if(jskeyInput.value == "345"){
        window.location.assign("quiz.html")
    }
    else{
        alert("Invalid test key Please enter 345")
    }
}
jsSubmitkey()
// jsSubBtn.addEventListener("click",jsSubmitkey)
