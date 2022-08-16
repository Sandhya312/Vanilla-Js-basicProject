//b8b6f775d8014f778da5ffd29552ea08
//  content +=  `
// <div class="accordion-item">
// <h2 class="accordion-header" id="headingTwo">
//  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

//  </button>
//  </h2>
//   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//    <div class="accordion-body">
//    <strong>  <b>Breaking News ${i}</b></strong>${data[2].articles[i]} 
//   </div>
// </div>
// </div>`;
let accordion = document.getElementById("accordionExample");

fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b8b6f775d8014f778da5ffd29552ea08")
.then(Response => Response.json())
.then(data =>{
    let content = " ";
    for(let item in data){
        let dataItem = data[item];
        // console.log(dataItem)
        
        for (let key in dataItem) {
            let datakey = dataItem[key]
            // console.log(datakey)
            if(datakey.content !=null){
                // console.log(datakey)
                 content +=  `
            <div class="accordion-item">
            <h2 class="accordion-header" id="heading${key}">
             <button class="accordion-button  text-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}" aria-expanded="false" aria-controls="collapse${key}">
               <b> ${datakey.title}</b>             </button>
             </h2>
              <div id="collapse${key}" class="accordion-collapse collapse" aria-labelledby="heading${key}" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                <p class="text-info">${datakey.content} . <a href="${datakey.url}" target="_blank">Read More</a> </p>
              </div>
            </div>
            </div>`;

            }
           
        }
        
    }


   accordion.innerHTML = content;
})
  .catch(error=> console.error(error));