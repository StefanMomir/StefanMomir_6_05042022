
/*const jsonData = require('./data/photographers.json'); 
console.log(jsonData);
*/

/*
function loadTxt() {
fetch('data.txt')
.then(function(response){
    return response.text();
})
.then(function(data){
console.log(data);
document.getElementById('result').innerHTML = data;
})
.catch(function(error){
    console.log(error);

})

}
*/


/*  OK OK
//document.getElementById('button').addEventListener('click', loadJSON);

//function loadJSON(){
fetch('../../data/photographers.json')
//.then(response => {
.then(function(response){    
    return response.json();

})

//.then(data => {
.then(function(data){
//console.log(data.photographers[1]);
//document.getElementById('test').innerHTML = data.photographers[1];
    //let html ='';
    //data.forEach(function(photog){
    //alert(photographers.name);
//html +='<li>${photog.name} - ${photog.id}</li>';
//    });
//    document.getElementById('test').innerHTML = html;
})
//}
*/


/*
//  }).then(data => {
      //  console.log(data);
      var mydata = JSON.parse(data);

      alert(mydata[0].name);

                for (let user of data) {
            const userName = user.name
               allUsers.push(userName)

               console.log(allUsers);
            }
        //  return allUsers;
*/
/*
}).catch(err => {
    alert("error");
  });
*/


//data = '[{"name" : "Harry", "age" : "32"}]';

/*

fetch('../../data/photographers.json').then(function(response) {
    return response.json().then(function(data) { 



        const getUserNamesFromOrders = (photographers) => {
            const allUsers = [];
                        for (let names of photographers) {
                               const userName = user.name
                               allUsers.push(userName)

                               console.log(allUsers);
                            }
                        }
//                return allUsers











//      var mydata = JSON.parse(json);
//      alert(mydata[0].name);





    });
  
        // traitement du JSON
  });

    //var objectURL = URL.createObjectURL(myBlob);
    //myImage.src = objectURL;

  //  var mydata = JSON.parse(data);
    //alert(mydata[0].name);

    
//});





/*
function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].name);
}

load();







        // Penser à remplacer par les données récupérées dans le json

        fetch('../../data/photographers.json')
        //.then(response => {
        .then(function(response){    
            return response.json();
        })
        .then(function(data){
            console.log(data.photographers);

          let photog = data.photographers; 

Array.from(photog).forEach(function(element){
//         console.log(element.name);


    });



        })

        //   let name= photographers.name;
//            alert(name);
        ///alert(photographers.name[0]);
/*
        const newData = data.map(x => {
            return {
                upin: x.name,
                mtype: x.id,
            };
        });
*/



async function getPhotographers() {   
    
    fetch('../../data/photographers.json')
        .then(function(response){    
        return response.json();
    })
        .then(function(data){
        let  datas = data.photographers;

        datas.map(function(element){
        //    return name=`${element.firstName} ${element.lastName}`;

        
     let name=element.name;
     let id=element.id;

 const photographers = [{
        "name": name,
        "id": id,
        "city": "Paris",
        "country": "France",
        "tagline": "Ceci est ma data test",
        "price": 400,
        "portrait": "account.png"
    }];

//    console.log(photographers);
     return ({ photographers: [...photographers] });


     


     }) // map data


    }) //function data


} //end

/*Array.from(photog).forEach(function(element){
         console.log(element.name);


        let name = element.name; 
*/
/*        {
                "name": '${element.name}',
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            }
        ]
*/
    //    return ({ photographers: [...photographers] });

  //  });


//})    

/*
        let countPhotographers=photographers.length;
        // et bien retourner le tableau photographers seulement une fois

        for (i=0; i<countPhotographers; i++ ){
            photographers; 
        }
            return ({photographers: [...photographers]});
        }
*/
 //   }

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
    