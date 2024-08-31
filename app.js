let eyeButtonPass = document.getElementsByClassName("eye-button-pass");
let passInputBox = document.getElementsByClassName("pass-input-box");

let a = 0;
function changeType() {
  if(a%2==0) {
    passInputBox[0].setAttribute("type", "text");
    a++;
  } else {
    passInputBox[0].setAttribute("type", "password");
    a++;
  }
}
eyeButtonPass[0].addEventListener("click", changeType);

window.setInterval( function() {
  let bodyWidth = width = window.innerWidth;
  if(bodyWidth<860) {
  }
},10)