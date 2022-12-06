async function loadData(searchText="iphone"){
    try{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        const response = await fetch(url);
        const data = await response.json();
        displayData(data.data);
    }
    catch(error){
        const phoneContainer = document.getElementById("phone-container");
        phoneContainer.innerHTML = `<div id="error-container">Something Went wrong</div>`;
    }
   
}

function displayData(data){
    data = data.slice(0,20);
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML = "";
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
        console.log(data.length);
        if(!data.length)
        document.getElementById("no-match").style.display = "block";

}
document.getElementById("search-btn").addEventListener('click',function(){
    const inputBtn = document.getElementById("search-input");
    var searchValue = inputBtn.value;
    inputBtn.value="";
    loadData(searchValue);
});
loadData();