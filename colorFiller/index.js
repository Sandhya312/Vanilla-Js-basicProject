let color = [ "red", "green","blue","pink","azure","beige"];
document.getElementById('button').addEventListener('click', backColor);
function backColor(){
    let span = document.querySelector('span');
    let randomNum = getRandomNum();
    span.innerText = color[randomNum];
    // console.log(randomNum);
    document.body.style.backgroundColor=color[randomNum];;
}
function getRandomNum(){
   return Math.floor(Math.random()* color.length);
}


