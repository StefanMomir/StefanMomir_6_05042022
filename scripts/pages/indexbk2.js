

/*
var obj;

fetch('../../data/photographers.json')
  .then(res => res.json())
  .then(data => obj = data.photographers)
//  .then(() => console.log(obj))
//        return obj
  
*/
async function getPhotographers() {
var showCharacters;

fetch('../../data/photographers.json')
.then(response => response.json())
.then(characters => showCharacters(characters.photographers));
showCharacters = characters => {
    const charactersDiv = document.querySelector('#test');


    characters.forEach(character => {
     //   const characterElement = document.createElement('p');
        //characterElement.innerText = `Character Name: ${character.name}`;
//        charactersDiv.append(characterElement);
//alert(character.name);      
const photographers = [{
    "name": character.name,
    "id": "id",
    "city": "Paris",
    "country": "France",
    "tagline": "Ceci est ma data test",
    "price": 400,
    "portrait": "account.png"
}]

console.log(photographers);
//return ({photographers: [...photographers]}) 
})
//console.log(photographers);
// console.log(charactersDiv);
    }

}
   /*
   showCharacters = characters => {
    const charactersDiv = document.querySelector(‘#rick-and-morty-  characters’);
    
    characters.forEach(character => {
      const characterElement = document.createElement(‘p’);
      characterElement.innerText = `Character Name: ${character.name}`;
      charactersDiv.append(characterElement);
    });
  }
*/


  /*
async function getPhotographers() {

    fetch('../../data/photographers.json')
    .then(function(res){
      
      var response = JSON.parse(res);
        //   return response.json();
        console.log(response);
    })
//    .then(function(data){
      //  let  datas = data.photographers;
  //      datas.map(function(element){
            const photographers = [{
                "name": "gigi",
                "id": "id",
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            }];

                /*
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
                    console.log(photographers);
*
                    return ({photographers: [...photographers]})  
    //    })
     
    //})
    
    
}

*/

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    