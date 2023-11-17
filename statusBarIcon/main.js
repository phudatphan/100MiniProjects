var menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  // add or remove class 'active'
  if (menuIcon.classList.contains("active")) {
    menuIcon.classList.remove("active");
  } else {
    menuIcon.classList.add("active");
  }

  // remove class 'no-animation' from all children elements
  var divElements = menuIcon.querySelectorAll("div");
  divElements.forEach(function (div) {
    div.classList.remove("no-animation");
  });

  console.log('test');
});
