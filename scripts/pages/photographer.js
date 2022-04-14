async function init() {
    /* ***  GET DATA from URL  *** */
    let currentLocation = window.location.hash
    let urlId = currentLocation.substr(1)

    /* *** GET DATA from JSON FILE *** */
    fetch('../../data/photographers.json')
    .then(response => { 
        return response.json()
    .then(datas => { 

       /* Assign Data to Photo Boxes */
       let data = datas.media;

       data.forEach(dataResult => {

        let element=dataResult;

        if (element.photographerId == urlId) {

                        let id = dataResult.id ;
                        let phId = dataResult.photographerId ;
                        const media = [{
                            "id": id,
                            "phId": phId,
                            "title": element.title ,
                            "image": element.image,
                            "video": element.video,
                            "likes": element.likes,
                            "date": element.date,
                            "price": element.price
                        }]
           //     console.log(element.likes);
                       
                displayMedia(media);
                }
            })
        })   
    })
}

/* *** SEND DATA to Factory *** */
async function displayMedia(media) {
    const photographersSection = document.querySelector(".photograph-container");

    media.forEach((photographer) => {
        const photographerModel = photographerMedia(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

init();
