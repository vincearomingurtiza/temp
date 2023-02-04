console.log("I'm SIGNIN!");
document.addEventListener("DOMContentLoaded", function(){
    let signin_form = document.querySelector("#signin_form");
    signin_form.addEventListener("click", signinValidation);
});

function signinValidation(e){
    e.preventDefault();
    let inputs = document.querySelectorAll(".signin_input");
    inputs.forEach(function(){
        for(let element = 0; element < inputs.length; element++){
            if (inputs[element].value.length == 0){
                inputs[element].classList.add("error");
            } else{
                inputs[element].classList.remove("error");
            }
        }
    });
};