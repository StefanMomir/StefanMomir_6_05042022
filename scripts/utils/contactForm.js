/* Open Modal Form */
document.querySelector("article button").addEventListener('click', () => {
    document.getElementById("contact_modal").style.display = "block"; 
})

/* Close Modal Form */
document.querySelector("header button").addEventListener('click', () => {
    document.getElementById("contact_modal").style.display = "none"; 
})

/* Start Custom Error Text for Validation Form */

/* First Name Check Message */
let first = document.getElementById("first");
first.oninvalid = (first) => {
    first.target.setCustomValidity('Prenom doit comporter entre 3 et 30 lettres !');
};
first.oninput = (first) => { first.target.setCustomValidity(''); }

/* Last Name Check Message */
let last = document.getElementById("last");
last.oninvalid = (last) => {
    last.target.setCustomValidity('Nom doit comporter entre 3 et 30 lettres !');
}; 
last.oninput = (last) => { last.target.setCustomValidity(''); }

/* Email Check Message */
let email = document.getElementById("email");
email.oninvalid = (email) => {
    email.target.setCustomValidity('Veuillez entrer une adresse e-mail valide !');
}
email.oninput = (email) => { email.target.setCustomValidity(''); }

/* Text Message Check */
let text = document.getElementById("text");
text.oninvalid = (text) => {
    text.target.setCustomValidity('Ce champ ne doit pas être vide !');
}
text.oninput = (text) => { text.target.setCustomValidity(''); }

/* Validation On Submit / Return Validation Message - NO SECOND SUBMIT */
document.getElementsByTagName('form')[0].addEventListener("submit", (event) => {
        event.preventDefault();       
        document.getElementById('modal-form').innerHTML = 
            "<div class='merci'><h2>Message envoyé<br><p>Merci !</p></h2></div>"+
            "<div class='button-end'><button id='end' type='button' class='end'>Ferme</button></div>";
            document.getElementById("end").addEventListener('click',()=> {
            document.getElementById("contact_modal").style.display = "none"; 
        })

/* Validation On Submit / Return Validation Message - MULTIPLE MESSAGE SUBMIT POSSIBLE *
let modalEnd = document.getElementById('modal-form');
                modalEnd.style.display ="none";
                modalX = document.getElementById('modal');
            let Dcc = document.createElement('div');
            let btt = document.createElement('button');
                btt.setAttribute("class","end");
                btt.setAttribute("id","end");
                Dcc.setAttribute("class","merci");
                Dcc.innerText = "Message envoyé \n Merci !";
                modalX.appendChild(Dcc);
                modalX.appendChild(btt);
                endClose();

        /* End Form *
        function  endClose(){    
                document.getElementById("end").addEventListener('click',()=> {
                document.getElementById("contact_modal").style.display = "none"; 
                location.reload();
            })
        } 
*/

})
