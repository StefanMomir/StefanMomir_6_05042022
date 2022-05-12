"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LightBox =
/*#__PURE__*/
function () {
  function LightBox(listElement) {
    _classCallCheck(this, LightBox);

    this.currentElement = null;
    this.listElement = listElement;
    this.manageEvent();
  }
  /* *** Get ID  Display Lightbox *** */


  _createClass(LightBox, [{
    key: "show",
    value: function show(id) {
      this.currentElement = this.getElementById(id);
      this.display();
    }
    /* *** Previous Photo *** */

  }, {
    key: "previous",
    value: function previous() {
      var _this = this;

      /* Count All Photos Back until 0 */
      var index = this.listElement.findIndex(function (element) {
        return element.id == _this.currentElement.id;
      });
      /* If Result = 0 jump to last photo 0-1 */

      if (index == 0) {
        this.currentElement = this.listElement[this.listElement.length - 1];
      } else this.currentElement = this.listElement[index - 1];

      this.display();
    }
    /* *** Next Photo *** */

  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      var index = this.listElement.findIndex(function (element) {
        return element.id == _this2.currentElement.id;
      });
      /* If Current element arrive to 0 jump to first photo 0+1 */

      if (index == this.listElement.length - 1) {
        this.currentElement = this.listElement[0];
      } else this.currentElement = this.listElement[index + 1];

      this.display();
    }
    /* *** Event listener *** */

  }, {
    key: "manageEvent",
    value: function manageEvent() {
      var _this3 = this;

      document.querySelector("#lightbox .next").addEventListener("click", function () {
        _this3.next();
      });
      document.querySelector("#lightbox .previous").addEventListener("click", function () {
        _this3.previous();
      });
      document.querySelector("#lightbox .close").addEventListener("click", function () {
        _this3.close();
      });
      /*      document.querySelector("#lightbox").addEventListener("click", (e) => {
                if(e.target == e.currentTarget) this.close();
            });
      /*
            /* Manage Event Navigation by Key Press */

      document.addEventListener("keydown", function (e) {
        switch (e.key) {
          case "Escape":
            _this3.close();

            break;

          case "ArrowRight":
            _this3.next();

            break;

          case "ArrowLeft":
            _this3.previous();

            break;
        }
      });
    }
    /* *** Get Photo ID *** */

  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return this.listElement.find(function (element) {
        return element.id == id;
      });
    }
    /* *** Display Lightbox Modal *** */

  }, {
    key: "display",
    value: function display() {
      /* Split Name */
      var name = $name;
      var splitName = name.split(' ');
      name = splitName.shift();
      var imageLightbox = this.currentElement.image;
      var videoLightbox = this.currentElement.video;
      var title = this.currentElement.title;
      /* Media Type Check/Create */

      if (imageLightbox == undefined && videoLightbox) {
        var vid = "./assets/images/" + name + "/" + this.currentElement.video;
        var div = document.getElementById("picture");

        if (div != null) {
          document.getElementById("picture").remove();
        }

        document.getElementById("media").innerHTML = "<video controls id='video' class='video'><source class='video' src='" + vid + "'></video>";
      } else {
        var img = "./assets/images/" + name + "/" + this.currentElement.image;

        var _div = document.getElementById("video");

        if (_div != null) {
          document.getElementById("video").remove();
        }

        document.getElementById("media").innerHTML = "<img id='picture' alt='" + title + "' class='picture' src='" + img + "'></img>";
      }

      document.querySelector("#lightbox .content .title").innerText = this.currentElement.title;
      document.querySelector("#lightbox").classList.add("show");
    }
    /* *** Close Ligthbox Modal *** */

  }, {
    key: "close",
    value: function close() {
      document.querySelector("#lightbox").classList.remove("show");
    }
  }]);

  return LightBox;
}();