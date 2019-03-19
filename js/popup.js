var buyLink = document.querySelectorAll(".buy");
var orderPopup = document.querySelector(".to-order-popup");
var orderClose = orderPopup.querySelector(".to-order-popup-closed");

for(var i=0;i<buyLink.length;i++)buyLink[i].addEventListener("click",function(evt) {
	evt.preventDefault();
	orderPopup.classList.add("modal-show3")});

orderClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	orderPopup.classList.remove("modal-show3");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	if (orderPopup.classList.contains("modal-show3")) {
		orderPopup.classList.remove("modal-show3");
		}
	}
});