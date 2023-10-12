let productsData = [
    {id:1 , title: "Flower tittle 1", image: "flowers-6.jpg" , desc: "this is some description about the product"},
    {id:2 , title: "Flower tittle 2", image: "flowers-6.jpg" , desc: "this is some description about the product"},  
    {id:3 , title: "Flower tittle 3", image: "flowers-6.jpg" , desc: "this is some description about the product"},  
    {id:4,  title: "Flower tittle 4", image: "flowers-6.jpg" , desc: "this is some description about the product"}, 
    {id:5 , title: "Flower tittle 5", image: "flowers-6.jpg" , desc: "this is some description about the product"}, 
    {id:6 , title: "Flower tittle 6", image: "flowers-6.jpg" , desc: "this is some description about the product"}, 
    {id:7 , title: "Flower tittle 7", image: "flowers-6.jpg" , desc: "this is some description about the product"},  
    {id:8 , title: "Flower tittle 8", image: "flowers-6.jpg" , desc: "this is some description about the product"},  

];
let cardsContainer = document.querySelector(".card_container");
let input = document.querySelector("input");


function createCard(card) {
 return   `     <div class="card" productId ="${card.id}" style="width: 18rem;">
    <img src="./${card.image}" class=" card-img-top img-fluid" alt="...">
    <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.desc}</p>


    </div>

    <div class="card-footer text-muted">
        <button id="${card.id}" type="button" class="btn btn-outline-success">details</button>
    </div>
</div>`
} 

for ( let card of productsData) {
    cardsContainer.innerHTML += createCard(card)
}

input.addEventListener("keyup", (e) =>{
    for (let card of productsData) {
     if (!card.title
        .trim()
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase())
        )

        {
          
        document.querySelector(`[productId="${card.id}"]`).style.display="none";
     }   else{
        document.querySelector(`[productId="${card.id}"]`).style.display="block";
     }
    }
})


const openBtns = document.querySelectorAll(".card-footer button")
const modalContainer = document.querySelector(".myModal-container")
const closeBtn = document.querySelector(".my_modal-footer button")



for (const btn of openBtns) {
    btn.addEventListener("click", ()=>{
        
        modalContainer.style.display = "flex"
          
    }) 
} 
closeBtn.addEventListener("click", ()=>{
    modalContainer.style.display = "none"
      
}) 
 function ModalGenerate(mod) {
    
 }
 




