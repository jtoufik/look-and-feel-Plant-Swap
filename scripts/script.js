let postButton = document.querySelector(".post-button");

postButton.addEventListener("click", toggleAntwoordlijst);



function toggleAntwoordlijst() {

  var antwoordLijst = document.querySelector(".antwoordlijst");

  antwoordLijst.classList.toggle("wel-relevant");

}



let terugButton = document.querySelector(".terug-button");

terugButton.addEventListener("click", toggleAntwoordlijst);