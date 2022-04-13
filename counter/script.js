let value = document.getElementById("value");
let count = 0;
let btns = document.querySelectorAll("button");
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let status = e.currentTarget.classList;
    console.log(status);
    if (status.contains("decrease")) {
      count--;
      document.body.style.backgroundColor = "beige";
      value.style.color = "red";
    } else if (status.contains("increase")) {
      count++;
      document.body.style.backgroundColor = "azure";
      value.style.color = "blue";
    } else if (status.contains("reset")) {
      count = 0;
      document.body.style.backgroundColor = "white";
      value.style.color = "black";
    }

    // if(count>0){
    //     document.body.style.backgroundColor='azure';
    //     value.style.color='blue'
    // }else if(count<0){
    //     document.body.style.backgroundColor='beige';
    //     value.style.color='red';
    // }else{
    //     document.body.style.backgroundColor='white';
    //     value.style.color='black';
    // }
    value.innerText = count;
  });
});
