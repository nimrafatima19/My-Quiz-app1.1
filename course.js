
let htmlQuiz = document.getElementById("htmlQuiz")
let cssQuiz = document.getElementById("cssQuiz")
let javascriptQuiz = document.getElementById("javascriptQuiz")

function quiz1() {
    window.location.assign("testkey.html")
}
htmlQuiz.addEventListener("click", quiz1)


function quiz2() {
    window.location.assign("csskey.html")
}

cssQuiz.addEventListener("click", quiz2)



function quiz3() {
    window.location.assign("javascriptKey.html")
}

javascriptQuiz.addEventListener("click", quiz3)

