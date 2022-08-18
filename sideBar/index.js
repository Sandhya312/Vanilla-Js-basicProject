let menutoggle = document.getElementById('menutoggle');
let sideBar = document.getElementById('sideBar');
let menu =   document.getElementById('menu');
let cross = document.getElementById('cross');
let list = document.querySelectorAll('.list');

function openfunct(){
  list.forEach((item)=>{
    item.classList.remove('open');
    this.classList.add('open')
  })
}
list.forEach((item)=>{
  item.addEventListener('click',openfunct);
})


//sidebar event===============
menutoggle.addEventListener('click',()=>{
  sideBar.classList.toggle('active');
menu.classList.toggle('hide');
cross.classList.toggle('show');

})