fetch("https://fakestoreapi.com/products")
.then(res=> res.json())
.then(data=>{

    let container = document.getElementById("container")
     for(let obj of data){
        let item=document.createElement("div");
        item.className="item border rounded border-dark-subtle position-relative"
        item.innerHTML=`
           <img src='${obj.image}' class='image'>
           <p class='text'><b>${obj.title}</b></p>
           <p class="text-success text-center fs-3">${obj.price}</p>
           <p class='description'>${obj.description}</p>
           <p class='rating position-absolute top-0 end-0'>${obj.rating.rate}⭐</p>`
           container.appendChild(item);

     }
     
    





})
