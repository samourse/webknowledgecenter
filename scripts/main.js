/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/

let small = document.querySelector(".date");
let currentYear = new Date();
let target = document.getElementById('hello'),
   button = document.getElementById('Bas');
const onglet = document.querySelector(".contentonglet");
const ongletButton = document.querySelectorAll(".onglet__btn");
const contents = document.querySelectorAll(".content");
const souris = document.querySelector('.souris');
const rond = document.querySelector('.rond');
const links = document.querySelectorAll('.link');
const input = document.getElementById("recherche");
const boutonR = document.getElementById("boutonchercher");
let targetDeux = document.getElementById('contacts'),
	buttonDeux = document.getElementById('contactsbtn');


small.innerHTML = currentYear.getFullYear();
button.addEventListener('click', function () {
   target.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
   });
   setTimeout(function () {
      window.location.hash = '#hello';
   }, 1000);
});

(function () {
   const changeMouse = (e) => {
      const {
         clientX: x,
         clientY: y
      } = e;
      souris.style.left = x + 'px';
      souris.style.top = y + 'px';
      rond.style.left = x + 'px';
      rond.style.top = y + 'px';
   }
   const move = function (e) {
      const span = this.querySelector('span');
      const {
         offsetX: x,
         offsetY: y
      } = e, {
         offsetWidth: width,
         offsetHeight: height
      } = this,
      move = 25,
         xMove = x / width * (move * 2) - move,
         yMove = y / height * (move * 2) - move;
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      rond.classList.add('hover');
      if (e.type === 'mouseleave') {
         rond.classList.remove('hover');
         span.style.transform = '';
      }
   }
   window.addEventListener('mousemove', changeMouse);
   links.forEach(link => link.addEventListener('mousemove', move));
   links.forEach(link => link.addEventListener('mouseleave', move));
})();

onglet.addEventListener("click", (e) => {
   const id = e.target.dataset.id;
   if (id) {
      ongletButton.forEach(btn => {
         btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach(content => {
         content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
   }
});
const openBox = () => {
   boutonR.classList.toggle("fermer");
   input.classList.toggle("box");
};
boutonR.addEventListener("click", openBox);

document.getElementById('recherche').addEventListener('keyup', function () {
   var recherche = this.value.toLowerCase();
   var documents = document.querySelectorAll('.document');

   Array.prototype.forEach.call(documents, function (document) {
      if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
         document.style.display = 'block';
      } else {
         document.style.display = 'none';
      }
   });
});

buttonDeux.addEventListener('click', function () {
	targetDeux.scrollIntoView({
		block: 'start',
		behavior: 'smooth',
		inline: 'nearest'
	});

	setTimeout(function () {
		window.location.hash = '#contacts';
	}, 1000);
});



/******/ })()
;
//# sourceMappingURL=main.js.map