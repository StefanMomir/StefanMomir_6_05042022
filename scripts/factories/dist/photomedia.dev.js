"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* ** Create Photographer Header Profile ** */
function photographerProfile(data) {
  /* Returned Data for List Photo Profile */
  var name = data.name,
      portrait = data.portrait,
      city = data.city,
      country = data.country,
      tagline = data.tagline,
      price = data.price,
      id = data.id;
  profilePhoto = "assets/photographers/" + portrait;
  var location = city + ' ,' + country;
  $name = name;
  /* Create Header Elements */

  function getUserProfileDOM() {
    /* ** Photographer Header  ** */
    document.getElementById("info").innerHTML = "<h2>" + name + "</h2><p class='location'>" + location + "</p><p class='tagline'>" + tagline + "</p>";
    document.getElementById("photo").innerHTML = "<img alt='" + name + "' src='" + profilePhoto + "'>";
    /* ** Photographer Contact Header  ** */

    document.getElementById("profile-name").innerText = name;
    /* ** Photographer Footer  ** */

    document.getElementById("charge").innerHTML = price + "&euro;/jour</p>";
  }

  return {
    getUserProfileDOM: getUserProfileDOM
  };
}
/* ** Create Photographer Media Cards ** */


function photographerMedia(data) {
  /* Returned Data for Listing Medias */
  var title = data.title,
      id = data.id,
      phId = data.phId,
      image = data.image,
      video = data.video,
      likes = data.likes,
      date = data.date,
      price = data.price;
  var name = $name;
  /* Split Name */

  var splitName = name.split(' ');
  var firstName = splitName.shift();

  function getUserCardDOM() {
    /* Create Photo Cards Elements */
    var img = "assets/images/" + firstName + "/" + image;
    /* */

    var figure = document.createElement('figure');
    /* */

    var images = document.createElement('img');
    images.setAttribute("src", img);
    images.setAttribute("class", "card");
    images.setAttribute("data-photoid", id);
    images.setAttribute("data-id", "l" + id);
    images.setAttribute("id", id);
    images.setAttribute("pointer-events", "none");
    images.setAttribute("alt", title + " by " + name);
    /* */

    var figcaption = document.createElement('figcaption');
    figcaption.setAttribute("id", "photo-text");
    /* */

    var p = document.createElement('p');
    p.setAttribute("class", "photo-text");
    p.setAttribute("label", title);
    p.textContent = title;
    /* */

    var span = document.createElement('span');
    span.textContent = likes;

    for (var _i = 0, _Object$entries = Object.entries({
      id: "l" + id,
      "class": "liked",
      'data-liked': "0",
      'data-id': "l" + id,
      'data-like': likes,
      value: likes
    }); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      span.setAttribute(key, value);
    }
    /* */


    var button = document.createElement('button');
    button.setAttribute("type", "button");
    button.setAttribute("name", "likes");
    /* */

    var i = document.createElement('i');

    for (var _i2 = 0, _Object$entries2 = Object.entries({
      id: 'like-new',
      'data-id': "l" + id,
      value: likes,
      "class": "fa fa-heart",
      'area-label': "heart"
    }); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          _key = _Object$entries2$_i[0],
          _value = _Object$entries2$_i[1];

      i.setAttribute(_key, _value);
    }
    /* */


    figure.appendChild(images);
    /* Check/Replace Media Type */

    if (video) {
      var vid = "assets/images/" + firstName + "/" + video;
      var videos = document.createElement('video');
      videos.setAttribute("controls", "");
      videos.setAttribute("class", "card");
      videos.setAttribute("data-photoid", id);
      videos.setAttribute("data-id", "l" + id);
      var source = document.createElement('source');
      source.setAttribute("src", vid);
      videos.appendChild(source);
      figure.replaceChild(videos, images);
    }
    /* Create Order */


    figure.appendChild(figcaption);
    figcaption.appendChild(p);
    figcaption.appendChild(span);
    figcaption.appendChild(button);
    button.appendChild(i);
    /* */

    return figure;
  }

  return {
    getUserCardDOM: getUserCardDOM
  };
}