"use strict";

/* Open Modal Form */
document.querySelector("article button").addEventListener('click', function () {
  document.getElementById("contact_modal").style.display = "block";
});
/* Close Modal Form */

document.querySelector("header button").addEventListener('click', function () {
  document.getElementById("contact_modal").style.display = "none";
});
/* Start Custom Error Text for Validation Form */

/* First Name Check Message */

var first = document.getElementById("first");

first.oninvalid = function (first) {
  first.target.setCustomValidity('Prenom doit comporter entre 3 et 30 lettres !');
};

first.oninput = function (first) {
  first.target.setCustomValidity('');
};
/* Last Name Check Message */


var last = document.getElementById("last");

last.oninvalid = function (last) {
  last.target.setCustomValidity('Nom doit comporter entre 3 et 30 lettres !');
};

last.oninput = function (last) {
  last.target.setCustomValidity('');
};
/* Email Check Message */


var email = document.getElementById("email");

email.oninvalid = function (email) {
  email.target.setCustomValidity('Veuillez entrer une adresse e-mail valide !');
};

email.oninput = function (email) {
  email.target.setCustomValidity('');
};
/* Text Message Check */


var text = document.getElementById("text");

text.oninvalid = function (text) {
  text.target.setCustomValidity('Ce champ ne doit pas être vide !');
};

text.oninput = function (text) {
  text.target.setCustomValidity('');
};
/* Validation On Submit / Return Validation Message - NO SECOND SUBMIT */


var test = document.getElementsByTagName('form')[0].addEventListener("submit", function (event) {
  event.preventDefault();
  /*     
    document.getElementById('modal-form').innerHTML = 
        "<div class='merci'><h2>Message envoyé<br><p>Merci !</p></h2></div>"+
        "<div class='button-end'><button id='end' type='button' class='end'>Ferme</button></div>";
        document.getElementById("end").addEventListener('click',()=> {
        document.getElementById("contact_modal").style.display = "none"; 
    })
  */

  /* Validation On Submit / Return Validation Message */

  var modalEnd = document.getElementById('modal-form');
  /* Recreate Modal */

  modalEnd.style.display = "none";
  modalEndBody = document.getElementById('modal');
  var divTitle = document.createElement('div');
  divTitle.setAttribute("class", "merci");
  var divSubtitle = document.createElement('div');
  divSubtitle.setAttribute("class", "button-end");
  var h2 = document.createElement('h2');
  h2.innerText = "Message envoyé";
  var p = document.createElement('p');
  p.innerText = "\nMerci !";
  var btt = document.createElement('button');
  btt.setAttribute("class", "end");
  btt.setAttribute("id", "end");
  btt.setAttribute("type", "button");
  btt.innerText = "Fermé";
  modalEndBody.appendChild(divTitle);
  modalEndBody.appendChild(divSubtitle);
  divSubtitle.appendChild(btt);
  divTitle.appendChild(h2);
  h2.appendChild(p);
  endClose();
  /* End Form */

  function endClose() {
    document.getElementById("end").addEventListener('click', function () {
      document.getElementById("contact_modal").style.display = "none"; // location.reload();
    });
  }
  /* LOG result */


  var parsedUrl = new URL(window.location.href);
  var urlId = parsedUrl + "/" + last.name + "=" + last.value + "/" + first.name + "=" + first.value + "/" + email.name + "=" + email.value + "/" + text.name + "=" + text.value;
  var formDataSent = "prenom: " + last.value + "\nnom: " + first.value + "\nemail: " + email.value + "\ntext: " + text.value;
  console.log(urlId);
  console.log(formDataSent);
});