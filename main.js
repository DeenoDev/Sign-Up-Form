const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email,phone,password,confirmPassword,errorMessage];

inputs.forEach((item)=>{
    item.addEventListener("focusin", ()=> {
        errorMessage.textContent = '';
        item.classList.remove("error");
        
    });
});