"use strict";

/* ** Return Photographer Media Data after Fetch ** */
getData().then(function (data) {
  var urlId = getId();
  /* ** Return Photographer Profile Data after Fetch ** */

  var photographersData = data.photographers.filter(function (photographers) {
    return photographers.id == urlId;
  });
  photographersData.forEach(function (photographerData) {
    var photographerProfiler = photographerProfile(photographerData);
    photographerProfiler.getUserProfileDOM();
  });
  /* ** Return Photographer Media Data after Fetch ** */

  var photographersMedia = document.querySelector(".photograph-container");
  var mediasData = data.media.filter(function (media) {
    return media.photographerId == urlId;
  });
  /* Return Media Result */

  mediaCards();
  /* Filter Buttons Listener */

  document.querySelectorAll('.sort-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var currentSelected = this.closest('.filter-media').children[0].innerText = this.innerText;
      /* Switch DropDown Filter Name */

      switch (currentSelected) {
        case "Popularité":
          this.closest('.filter-media').children[0].id = "sortby-pop";
          break;

        case "Titre":
          this.closest('.filter-media').children[0].id = "sortby-tit";
          break;

        case "Date":
          this.closest('.filter-media').children[0].id = "sortby-dat";
          break;

        default:
          mediaCards();
      }

      var sortBy = document.querySelector(".sortby").id;
      /* Sorting By Title */

      if (sortBy == "sortby-tit") {
        mediasData = mediasData.sort(function (a, b) {
          return a.title > b.title ? 1 : -1;
        });
        closeFilter();
        mediaCards();
      }
      /* Sorting By Popularity */
      else if (sortBy == "sortby-pop") {
          mediasData = mediasData.sort(function (a, b) {
            return a.likes > b.likes ? 1 : -1;
          });
          closeFilter();
          mediaCards();
        }
        /* Sorting By Date */
        else if (sortBy == "sortby-dat") {
            mediasData = mediasData.sort(function (a, b) {
              var dateA = new Date(a.date);
              var dateB = new Date(b.date);
              return dateB - dateA;
            });
            closeFilter();
            mediaCards();
          }
    });
  });
  document.querySelector(".filter-modal").classList.add('hide');
  /* Return Filtered Result */

  function mediaCards() {
    /* ** Return Data To Media Cards ** */
    document.getElementById("photos").innerHTML = "";
    mediasData.forEach(function (mediaData) {
      var photographerModel = photographerMedia(mediaData);
      var userCardDOM = photographerModel.getUserCardDOM();
      photographersMedia.appendChild(userCardDOM);
    });
    /* ** Create Lightbox ** */

    var lightBox = new LightBox(mediasData);
    document.querySelectorAll("#photos .card").forEach(function (categoryDom) {
      categoryDom.addEventListener("click", function (e) {
        lightBox.show(e.currentTarget.dataset.photoid);
      });
    });
  }
});
/* Listener For Open Filter Modal */

document.getElementById('sortby-').addEventListener('click', openFilter);
/* Close Filter Modal */

function closeFilter() {
  document.getElementById("closefilter").classList.add('hide');
}
/* Open Filter Modal */


function openFilter() {
  document.querySelector(".filter-modal").classList.remove('hide');
}