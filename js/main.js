
// Mobile menu start

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Mobile menu end

// Type animation start

const text=document.querySelector(".sec-text");

const textload =()=>{
    setTimeout(()=>{
        text.textContent = "a Freelauncer"
    },0);

    setTimeout(()=>{
        text.textContent = "a Professional Coder"
    },4000);

    setTimeout(()=>{
        text.textContent = "a Web Developer"
    },8000);
}

textload();
setInterval(textload, 12000);

// Type animation end