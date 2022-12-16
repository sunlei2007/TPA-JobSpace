"use strict";
 

const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const btnLogin = document.querySelector(".form-submit");
const inputEmail = document.querySelector(".username");
const inputPassword = document.querySelector(".password");
 

window.onload = function () {

    if (!localStorage.getItem("userinfo")) {
        const user = {};
        user.email = "jobspace@gmail.com";
        user.password = "Jobspace321#";
        
        localStorage.setItem("userinfo", JSON.stringify(user));
    }


 
    setTimeout(() => {
        modal.classList.add("dialog-ani");
        modalContainer.style.display = "block";
    },100);
}
 
btnLogin.onclick = function () {

    const userObj = JSON.parse(localStorage.getItem("userinfo"));
    
    if (inputEmail.value.trim() === "" || inputPassword.value.trim()==="") {
        return true;
    }
    if (inputEmail.value.trim() !== userObj.email || inputPassword.value.trim() !== userObj.password) {
         
        alert("Incorrect username or password");
        return false;
    }
     
    window.location.replace("index.html");
     
    return false;
     
     
}

