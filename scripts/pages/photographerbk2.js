async function init() {

    /* ***  GET DATA from URL  *** */
    let currentLocation = window.location.hash 
    let urlId = currentLocation.substr(1)
    let phData = window.location.search 

    // Further parsing:
    let params = new URLSearchParams(phData);
    //let namex = parseInt(params.get("price")); // is the number 123
    let namex = params.get("name"); // is the number 123

    let namex = params.get("name"); // is the number 123
console.log(namex);

    /* *** GET DATA from JSON FILE *** */
    fetch('../../data/photographers.json')
    .then(response => { 
        return response.json()
    .then(function(datas) { 

        /* Photos */
       let data = datas.media;

           data.forEach(function (dataResult) {
            
                let element=dataResult;

            //   resultVideo = resultVideo.split('.').pop();
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
                        displayMedia(media);
                }
            })
        })   
    })
}


    async function displayMedia(media) {
        const photographersSection = document.querySelector(".photograph-container");

       media.forEach((photographer) => {
            const photographerModel = photographerMedia(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    init();
