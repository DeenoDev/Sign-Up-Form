const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".errorMessage");

const inputs = [email,phone,password,confirmPassword,errorMessage];

inputs.forEach((item)=>{
    item.addEventListener("focusin", ()=> {
        errorMessage.textContent = " ";
        item.classList.remove("error");
        if(item==password || item==confirmPassword){
            password.classList.remove("error");
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value){
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "Passwords don't match";
        return;
    }
    if(password.value.length < 8){
        password.classList.add('error');
        errorMessage.textContent = "Password needs to be at least 8 characters long.";
        return;
    }
    if(!password.value.match())
};

const form = document.querySelector("form");
form.addEventListener("submit", submit);