let closeIcon=document.querySelector('.close-icon');
let burgerIcon=document.querySelector('nav button');
let navbarCollapse=document.querySelector('.navbar-collapse');
let shadow=document.querySelector('.shadow');

closeIcon.onclick=()=>{
    navbarCollapse.classList.remove('show');
    shadow.classList.remove('active');
}

burgerIcon.onclick=()=>{
    shadow.classList.add('active');
}