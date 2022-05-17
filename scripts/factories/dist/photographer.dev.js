"use strict";

/* *** Photographers Page *** */
function photographerFactory(data) {
  /* Get Data for Listing Photographers */
  var name = data.name,
      portrait = data.portrait,
      city = data.city,
      country = data.country,
      tagline = data.tagline,
      price = data.price,
      id = data.id;
  var picture = "assets/photographers/".concat(portrait);
  /* Create Boxes Cards */

  function getUserCardDOM() {
    var article = document.createElement('article');
    var alink = document.createElement('a');
    alink.setAttribute('href', "photographer.html?name=" + name + "&loc=" + city + "," + country + "&photo=" + portrait + "&tagline=" + tagline + "&price=" + price + "#" + id);
    alink.setAttribute("id", "alink");
    alink.setAttribute("class", "alink");
    var img = document.createElement('img');
    img.setAttribute("src", picture);
    var h2 = document.createElement('h2');
    h2.textContent = name;
    var h3 = document.createElement('h3');
    h3.textContent = city + ", " + country;
    var h4 = document.createElement('h4');
    h4.textContent = tagline;
    var h5 = document.createElement('h5');
    h5.textContent = price + "/jour";
    article.appendChild(alink);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h5);
    return article;
  }

  return {
    getUserCardDOM: getUserCardDOM
  };
}
/* *** Photographer Photos Page *** */


function photographerMedia(data) {
  /* Get Photographers Info from URL */
  var phData = window.location.search;
  var params = new URLSearchParams(phData);
  var phName = params.get("name"); //    let phLocation = params.get("loc");

  document.getElementById("name").innerHTML = phName; //   document.getElementById("Location").innerHTML = 'phLocation';

  /* Split Name */

  var splitName = phName.split(' ');
  var firstName = splitName.shift(); //let last=arr.pop(); //or arr[0];

  /* Get Data for Listing Photos */

  var title = data.title,
      id = data.id,
      phId = data.phId,
      image = data.image,
      video = data.video,
      likes = data.likes,
      date = data.date,
      price = data.price,
      name = data.name,
      city = data.city,
      country = data.country,
      tagline = data.tagline;
  var img = "assets/images/" + firstName + "/" + image;
  /* Create Boxes Cards */

  function getUserCardDOM() {
    /* Create Elements in the Box */
    var article = document.createElement('figure');
    var images = document.createElement('img');
    images.setAttribute("src", img);
    var figcaption = document.createElement('figcaption');
    var h2 = document.createElement('h2');
    h2.textContent = title;
    var span = document.createElement('span');
    span.textContent = likes;
    var i = document.createElement('i');
    i.setAttribute("class", "fa fa-heart");
    /* Order Of Creation  */

    article.appendChild(images);

    if (video) {
      var vid = "assets/images/" + firstName + "/" + video;
      var videos = document.createElement('video');
      videos.setAttribute("controls", "");
      var source = document.createElement('source');
      source.setAttribute("src", vid);
      videos.appendChild(source);
      article.replaceChild(videos, images);
    }

    article.appendChild(figcaption);
    figcaption.appendChild(h2);
    figcaption.appendChild(span);
    figcaption.appendChild(i);
    return article;
  }

  return {
    getUserCardDOM: getUserCardDOM
  };
}