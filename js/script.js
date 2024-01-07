const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
      
myModal.addEventListener("shown.bs.modal", () => {
         myInput.focus();
      });