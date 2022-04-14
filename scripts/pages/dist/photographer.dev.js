"use strict";

function init() {
  var currentLocation, urlId;
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /* ***  GET DATA from URL  *** */
          currentLocation = window.location.hash;
          urlId = currentLocation.substr(1);
          /* *** GET DATA from JSON FILE *** */

          fetch('../../data/photographers.json').then(function (response) {
            return response.json().then(function (datas) {
              /* Assign Data to Photo Boxes */
              var data = datas.media;
              data.forEach(function (dataResult) {
                var element = dataResult;

                if (element.photographerId == urlId) {
                  var id = dataResult.id;
                  var phId = dataResult.photographerId;
                  var media = [{
                    "id": id,
                    "phId": phId,
                    "title": element.title,
                    "image": element.image,
                    "video": element.video,
                    "likes": element.likes,
                    "date": element.date,
                    "price": element.price
                  }]; //     console.log(element.likes);

                  displayMedia(media);
                }
              });
            });
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}
/* *** SEND DATA to Factory *** */


function displayMedia(media) {
  var photographersSection;
  return regeneratorRuntime.async(function displayMedia$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          photographersSection = document.querySelector(".photograph-container");
          media.forEach(function (photographer) {
            var photographerModel = photographerMedia(photographer);
            var userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;
init();