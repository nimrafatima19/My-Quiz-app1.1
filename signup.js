import { auth, createUserWithEmailAndPassword } from "./firebase.js"

function register() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.assign("index.html")
            
        })
        .catch((error) => {
            const errorMessage = error.message;
            const errorCode = error.code;''
        
          c
            
        });
}

let signupBtn = document.getElementById("signupBtn")

signupBtn.addEventListener("click",register)

let loginAccount = document.getElementById("loginAccount")

function accountLogin(){
    window.location.assign("index.html")
}

loginAccount.addEventListener("click",accountLogin)