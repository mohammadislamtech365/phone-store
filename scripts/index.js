async function loadData(){
    try{
        const url = "https://openapi.programming-hero.com/api/phones?search=iphone";
        const response = await fetch(url);
        const data = await response.json();
        displayData(data.data);
    }
    catch(error){
        console.log(error);
    }
   
}

function displayData(data){
    console.log(data);
    const phoneContainer = document.getElementById("phone-container");
    data.forEach(item=>{
        const phoneCard = document.createElement("div");
        phoneCard.classList.add("phone-card-container");
        phoneCard.innerHTML = `
        <div class="phone-img-container">
            <img src="${item.image}" alt="">
        </div>
        <div class="phone-name">
            ${item.phone_name}
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}
loadData();