function navButton() {
    var x = document.getElementById("navibar");
    if (x.className === "navi") {
      x.className += " responsive";
    } else {
      x.className = "navi";
    }
  }