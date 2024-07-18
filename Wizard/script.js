let navIcon = document.getElementById("nav-icon");
let navbarElement = document.getElementById("navbar-ul");

navIcon.addEventListener("click", function () {
  if (navbarElement.style.display === "block") {
    navbarElement.style.display = "none";
  } else {
    navbarElement.style.display = "block";
  }
});
