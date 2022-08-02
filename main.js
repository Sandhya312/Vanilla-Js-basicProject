let cardContainer = document.getElementById('card-container');

    let xmr = new XMLHttpRequest();

    xmr.open("Get","data.json",true);

    xmr.onload =function(){

         if(this.status==200){
             let cards = JSON.parse(this.responseText);
             let output = " ";
             for(let i in cards){
                 output +=`
                 <div class="d-flex justify-content-center align-items-center card m-5 shadow p-3 mb-5 bg-body rounded" style=" width: 18rem;">
                     <h1 class="text-center ">${cards[i].heading}</h1>
                     <img src="${cards[i].image}" class="card-img-top p-3" alt="calculator"style="width: 18rem; height: 18rem; ">
                     <div class="card-body">
                      <button type="button"  class=" btn btn-outline-info"><a class="text-decoration-none" target="_blank" href="${cards[i].link}">View</a></button>
                      </div>
                 </div>  `;
             }
             cardContainer.innerHTML= output;
         }
    }
    xmr.send();