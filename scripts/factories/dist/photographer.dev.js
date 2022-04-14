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
    alink.setAttribute('href', "photographer.html?name=" + name + "&loc=" + city + ", " + country + "&photo=" + portrait + "&tagline=" + tagline + "&price=" + price + "#" + id);
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
  var phName = params.get("name");
  var location = params.get("loc");
  var tagline = params.get("tagline");
  var phPhoto = params.get("photo");
  var chPrice = params.get("price");
  /* Split Name */

  var splitName = phName.split(' ');
  var firstName = splitName.shift(); //let lastName = arr.pop(); //or arr[0];

  /* Get Data for Listing Photos */

  var title = data.title,
      id = data.id,
      phId = data.phId,
      image = data.image,
      video = data.video,
      likes = data.likes,
      date = data.date,
      price = data.price;
  var img = "assets/images/" + firstName + "/" + image;
  phPhoto = "assets/photographers/" + phPhoto;
  console.log(likes);
  /* Create Boxes Cards */

  function getUserCardDOM() {
    /* Create Header Elements */
    document.getElementById("info").innerHTML = "<h2>" + phName + "</h2><p class='h3'>" + location + "</p><p class='h4'>" + tagline + "</p>";
    document.getElementById("photo").innerHTML = "<img alt='" + phName + "' src='" + phPhoto + "'>";
    document.getElementById("charge").innerHTML = chPrice + " / jour";
    document.getElementById("ph_name").innerHTML = phName;
    /* Create Photo Elements */

    var figure = document.createElement('figure');
    var images = document.createElement('img');
    images.setAttribute("src", img);
    var figcaption = document.createElement('figcaption');
    var h2 = document.createElement('h2');
    h2.textContent = title;
    var span = document.createElement('span');
    span.setAttribute("id", "liked");
    span.setAttribute("title", likes);
    span.setAttribute("data-l", likes);
    span.textContent = likes;
    var i = document.createElement('i');
    i.setAttribute("class", "fa fa-heart");
    /* Order Of Creation  */

    figure.appendChild(images);

    if (video) {
      var vid = "assets/images/" + firstName + "/" + video;
      var videos = document.createElement('video');
      videos.setAttribute("controls", "");
      var source = document.createElement('source');
      source.setAttribute("src", vid);
      videos.appendChild(source);
      figure.replaceChild(videos, images);
    }

    figure.appendChild(figcaption);
    figcaption.appendChild(h2);
    figcaption.appendChild(span);
    figcaption.appendChild(i);
    return figure;
  }

  return {
    getUserCardDOM: getUserCardDOM
  };
}