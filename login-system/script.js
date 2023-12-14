const { message } = require("statuses");

    

function setFormMessage(formElement , type){
    const messageElement=formElement.querySelector(".form_message");
    messageElement.textContent=message;
    messageElement.classList.remove("form_message--success","form_message--error");
    messageElement.classList.add(`form_message--${type} `);
}


function setInputError(inputElement,message){
    inputElement.classList.add("form_input--error");
    inputElement.parentElement.querySelector(".form_input--error-message").textContent=message;
}
function clearInpurError(inputElement){
    inputElement.classList.remove("form_input--error");
    inputElement.parentElement.querySelector(".form_input--error-message").textContent="";
}
document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.querySelector("#login");
    const createAccountForm=document.querySelector("#createAccount");
    
   if (loginForm.addEventListener("submit",e=> {e.preventDefault();
    setFormMessage(loginForm,"error"," ");})) {
    
    message="sorry invalid username or password";
    
   } 
});

    document.querySelectorAll(".form_input2").forEach(inputElement=>{
        inputElement.addEventListener("blur",e=>{
            if(e.target.id==="User_name" && e.target.value.length>0 && e.target.value.length<6){
                setInputError(inputElement,"username must be atleast 6 letters in length ");
            }
        });
        inputElement.addEventListener("input",e=>{
            clearInpurError(inputElement);
        });
    });
