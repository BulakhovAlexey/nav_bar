document.getElementById("header_burger").addEventListener("click", function () {
  document.getElementById("header_burger").classList.toggle("active");
  document.getElementById("header_menu").classList.toggle("active");
  document.querySelector("body").classList.toggle("block");
});
