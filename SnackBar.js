let allBtns = document.querySelectorAll(".btns button");
let allMesseges = document.getElementById("toastBox");

allBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
            let messgeDiv = document.createElement("div");
            messgeDiv.className = "toast";
            if(e.target.innerHTML === "success"){
                messgeDiv.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>Successfully submitted`;
                messgeDiv.classList.add("success");
            }else if(e.target.innerHTML === "error"){
                messgeDiv.innerHTML = `<i class="fa-sharp fa-solid fa-circle-xmark"></i>Please fix the error!`;
                messgeDiv.classList.add("error");
            }else{
                messgeDiv.innerHTML = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i>Invalid input,check again`;
                messgeDiv.classList.add("invalid");
            }
            allMesseges.appendChild(messgeDiv);
            setTimeout(()=>{
                messgeDiv.remove();
            },6000);
    });
});



















/* let allBtns = document.querySelectorAll(".btns button");
let allMesseges = document.querySelectorAll(".messeges div");
let sucess = document.querySelector(".success");
let error = document.querySelector(".error");
let invalid = document.querySelector(".invalid");

allBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        allMesseges.forEach((messege)=>{
            setTimeout(() => {
                messege.classList.remove("active");
            },6000);
        });
        if(e.target.innerHTML === sucess.className){
            sucess.classList.add("active");
        }else if(e.target.innerHTML === error.className){
            error.classList.add("active");
        }else{
            invalid.classList.add("active");
        };
    });
}); */
