  document.addEventListener("DOMContentLoaded", function(event) {
  	const itemContainter = document.querySelector('.showroom__items-container');
    itemContainter.addEventListener("click", function(event){
    	if(event.target.className === "delete-icon"){
    		event.target.closest(".item").parentNode.removeChild(event.target.closest(".item"));
    	}
    });
  });