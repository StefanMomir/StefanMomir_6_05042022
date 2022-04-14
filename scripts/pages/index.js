    async function init() {
        fetch('../../data/photographers.json')
        .then(function(response){      
            return response.json();
        })
        .then(function(data){
            let  datas = data.photographers;
            datas.forEach(element => {
            const photographers = [{
                    "name": element.name,
                    "id": element.id,
                    "city": element.city,
                    "country": element.country,
                    "tagline": element.tagline,
                    "price": element.price,
                    "portrait": element.portrait
                }]
/*
            datas.map(function(element){
                    const photographers = [
                        {
                            "name": element.name,
                            "id": element.id,
                            "city": element.city,
                            "country": element.country,
                            "tagline": element.tagline,
                            "price": element.price,
                            "portrait": element.portrait
                        }]

*/
              displayData(photographers);
            })   
        })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    init();
    