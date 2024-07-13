import { auth, onAuthStateChanged, sendEmailVerification   } from "./firebase.js"



onAuthStateChanged(auth, (user) => {
    if (user) {
        let emailName = document.getElementById("email")
        let verifyMail = document.getElementById("verify")
        let btn2 = document.getElementById("btn2")
        const uid = user.uid;
        console.log(user)
        emailName.innerHTML = user.email
        if(user.emailVerified == true){
            verifyMail.innerHTML="your email is verified"
            btn2.style.display = "flex"
            clickSend.style.display = "none"

        }
        else{
            verifyMail.innerHTML= "Not verified"
           
        }
    } else {

    }
});

function send(){
   
sendEmailVerification(auth.currentUser)
  .then(() => {
    alert("Your verification email link has been send")
  });

}

let clickSend = document.getElementById("clickSend")

clickSend.addEventListener("click",send)

let btn3 = document.getElementById("btn3")

function cont(){
    window.location.assign("card.html")
}
btn3.addEventListener("click",cont)




