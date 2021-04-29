var theButtons = document.querySelectorAll(".btn-outline-success");
var buttonArray = Array.from(theButtons);

buttonArray.forEach(function(button){
  button.addEventListener("click", function(){ 
    myFunction(this); 
  });
});

function myFunction(element) { 
  var answer = element.nextElementSibling.querySelector("pre");
  answer.classList.toggle("hidden");
}