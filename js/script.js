var link = document.querySelector(".button-map");

var popup = document.querySelector(".forms-popup");
var close = popup.querySelector(".closed");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=e-mail]");
var input = popup.querySelector(".entry-field");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		mail.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !mail.value || !input.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}else{
	if (isStorageSupport) {
		localStorage.setItem("login", login.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}
	}
});

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".popup-map-closed");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show2");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show2");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
	if (mapPopup.classList.contains("modal-show2")) {
		mapPopup.classList.remove("modal-show2");
		}
	}
});

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