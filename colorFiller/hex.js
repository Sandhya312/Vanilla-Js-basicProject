let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
document.getElementById('btn').addEventListener('click',ChangeBackg);
function ChangeBackg(){
    let span = document.querySelector('span');
    let hexa= '#';
    for(let i = 0; i<6;i++){
        hexa += hex[getRandomNum()];
    }
    // console.log(hexa);
    span.innerHTML = hexa;
    document.body.style.backgroundColor=hexa;
}
function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}