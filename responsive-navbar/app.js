let btn = document.querySelector('.btn');
let navlist = document.querySelector('.nav-list');
let btnElem = document.querySelector('.elem');

btn.addEventListener('click',function(){
    navlist.classList.toggle('active');
    btnElem.classList.toggle('active-btn');
    console.log("clicked");
});