const drawer = document.querySelector("[data-drawer]");
const openButton = document.querySelector('[data-command="show-modal"]');
const closeButton = document.querySelector("[close]");

openButton.addEventListener("click", () => {
	drawer.showModal();
})