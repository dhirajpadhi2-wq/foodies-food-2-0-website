// LOADER
window.addEventListener("load", function(){
document.getElementById("loader").style.display = "none";
});

// POPUP
function openPopup(){
document.getElementById("popup").style.display = "flex";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}

function sendWhatsApp(){
let name = document.getElementById("name").value;
let order = document.getElementById("order").value;

let phone = "919938467223";

let url = "https://wa.me/" + phone + 
"?text=Hello Foodies Food 2.0,%0AName: " + name + 
"%0AOrder: " + order;

window.open(url, '_blank');
}
