// Func
const mainWrapper = document.getElementById("main");
const modal = document.getElementById("lightbox");
const body = document.getElementById("body");
const modalCloseBtn = document.getElementById("close");
const openModalBtn = document.getElementById("lightbox");

const onOpenModal = () => {
    mainWrapper.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
 }
  
 const onCloseModal = () => {
    mainWrapper.attr('aria-hidden', 'false')
    modal.attr('aria-hidden', 'true')
 }