"use strict";

// Func
var mainWrapper = document.getElementById("main");
var modal = document.getElementById("lightbox");
var body = document.getElementById("body");
var modalCloseBtn = document.getElementById("close");
var openModalBtn = document.getElementById("lightbox");

var onOpenModal = function onOpenModal() {
  mainWrapper.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');
};

var onCloseModal = function onCloseModal() {
  mainWrapper.attr('aria-hidden', 'false');
  modal.attr('aria-hidden', 'true');
};