var header = document.getElementById("menu-right");
var menus = header.getElementsByClassName("menu");
for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}