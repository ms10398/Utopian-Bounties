import ext from "./utils/ext";
import storage from "./utils/storage";
import jquery from 'jquery';
window.$ = window.jquery = jquery;
console.log($, jquery)
import Popper from 'popper.js';
import 'bootstrap';

const popup = document.getElementById("app");

storage.get('color', function(resp) {
  var color = resp.color;
  if(color) {
    popup.style.backgroundColor = color
  }
});

var optionsLink = document.querySelector(".js-options");
optionsLink.addEventListener("click", function(e) {
  e.preventDefault();
  ext.tabs.create({'url': ext.extension.getURL('options.html')});
})
