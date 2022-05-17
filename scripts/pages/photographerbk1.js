//var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search


var operatives = [
    { id: 12, name: 'Baze Malbus', pilost: false },
    { id: 12, name: 'Bodhi Rook', pil2ot: true },
    { id: 59, name: 'Chirrut Îmwe', pilot: false },
    { id: 12, name: 'Jyn Erso', pilot: false }
  ];

 operatives.forEach(function (operative) {

    if (operative.id == 12) {
        console.log(operative.id)
        console.log(operative.name)
       }
});











let currentLocation = window.location.hash 
let urlId = currentLocation.substr(1)
//console.log("urlid",urlId)


        fetch('../../data/photographers.json')
        .then(response => {
          return response.json()
        .then(function(data) { 
                        const uId = data.media;
                        let  datas = data.media;  
                        
                       // console.log("urlid",uId)


                        const datax = uId.find( ids => ids.photographerId === 243);

               //         console.log(datax);
/*
                        datax.forEach(element => {

                            const media = [{
                                "id": element.id,
                                "photographerId": element.photographerId,
                                "title": element.title ,
                                "image": element.image,
                                "likes": element.likes,
                                "date": element.date,
                                "price": element.price
                            }]
                            console.log("ress"+media);
                        
                        })

  
  */
  
                        // { nom: 'cerises', quantité: 5}


/*

                 //       console.log(uId);

                        var  phId = uId.photographerId;
                        
                        console.log("phid"+phId);

                        while (urlId == phId) {

                            console.log("phid"+phId);
                        }

                        /*
                if(uId == 243 ) {
                   for (i=0; i<40; i++) {
                        
                      var  phId = uId[i].photographerId;
          //            console.log(phId);
                         }
                    }
                *

                    while (urlId == phId) {

                        datas.forEach(element => {
                            const media = [{
                                "id": element.id,
                                "photographerId": element.photographerId,
                                "title": element.title ,
                                "image": element.image,
                                "likes": element.likes,
                                "date": element.date,
                                "price": element.price
                            }]
                         

                            console.log("ress"+media);


                        })
                  //      let title = uId[phId];

                    //    console.log(title);
  //                   console.log(phId);
//                      return phId

             //      }
                     
                }


               //   console.log(phId);

/*
                  let title = uId[0].title;

                  if (phId == 82 ){ 

                    console.log(title)

                  }
  */            



   });
            
});






  /*
                for (let names of photographers) {
                                               const userName = user.name
                                               allUsers.push(userName)
                
                                               console.log(allUsers);
                                            }
                                        }
                            return allUsers
        
/*        
                const getUserNamesFromOrders = (photographers) => {
                    const allUsers = [];
                                for (let names of photographers) {
                                       const userName = user.name
                                       allUsers.push(userName)
        
                                       console.log(allUsers);
                                    }
                                }
                    return allUsers

                            }

                    //console.log(allusers);

*/






/*

async function init() {
    fetch('../../data/photographers.json')
    .then(function(response){      
        return response.json();
    })
    .then(function(data){
        let  datas = data.media;

        datas.forEach(element => {
            const media = [{
                "id": element.id,
                "photographerId": element.photographerId,
                "title": element.title ,
                "image": element.image,
                "likes": element.likes,
                "date": element.date,
                "price": element.price
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
// console.log(media)

/*
          displayMedia(media);
        })   
    })
}
    async function displayMedia(media) {
        const photographersSection = document.querySelector(".photograph-header");

       media.forEach((photographer) => {
            const photographerModel = photographerMedia(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    init();

    */