function dropdown() {
  document.getElementById("navdropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.user')) {
    var dropdowns = document.getElementsByClassName("navdropdownclass");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}