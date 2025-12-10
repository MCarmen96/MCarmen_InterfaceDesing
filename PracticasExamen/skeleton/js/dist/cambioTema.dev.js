"use strict";

document.querySelector("body button:nth-child(1)").addEventListener("click", function () {
  document.querySelector("body").classList.remove("oscuro");
  document.querySelector("body").classList.add("claro");
});
document.querySelector("body button:nth-child(2)").addEventListener("click", function () {
  document.querySelector("body").classList.remove("claro");
  document.querySelector("body").classList.add("oscuro");
});
document.querySelectorAll("div.acordeon h3").forEach(function (titulo) {
  titulo.addEventListener("click", function () {
    if (this.nextElementSibling.style.display == "block") {
      this.nextElementSibling.style.display = "none";
    } else {
      this.nextElementSibling.style.display = "block";
    }
  });
});