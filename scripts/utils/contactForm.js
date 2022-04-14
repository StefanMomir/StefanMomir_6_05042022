const startModal = document.getElementById("start-modal");
const endModal = document.getElementById("close-modal");

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Listen Key Action
startModal.addEventListener('click', displayModal);
endModal.addEventListener('click', closeModal);


var data = new FormData(document.getElementById("contact_me"));
fetch("SERVER-SCRIPT", { method: "post", body: data });