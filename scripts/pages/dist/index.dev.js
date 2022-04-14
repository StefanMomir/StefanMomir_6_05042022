"use strict";

function init() {
  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetch('../../data/photographers.json').then(function (response) {
            return response.json();
          }).then(function (data) {
            var datas = data.photographers;
            datas.forEach(function (element) {
              var photographers = [{
                "name": element.name,
                "id": element.id,
                "city": element.city,
                "country": element.country,
                "tagline": element.tagline,
                "price": element.price,
                "portrait": element.portrait
              }];
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
            });
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function displayData(photographers) {
  var photographersSection;
  return regeneratorRuntime.async(function displayData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          photographersSection = document.querySelector(".photographer_section");
          photographers.forEach(function (photographer) {
            var photographerModel = photographerFactory(photographer);
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