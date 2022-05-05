/* ** Return Photographers Cards Data after Fetch ** */
getData()
    .then(data => {
    const photographersData = data.photographers;
    const photographersCards = document.querySelector("#photographer-container");
                photographersData.forEach(photographerData => {
                    const photographerModel = photographerCards(photographerData);
                    const userCardDOM = photographerModel.getUserCardDOM();
                    photographersCards.appendChild(userCardDOM);
                });
    });