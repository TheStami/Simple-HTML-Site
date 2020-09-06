var menuElements = document.getElementsByClassName("shape");

for(var i = 0; i < menuElements.length; i++) {
    menuElements[i].style.transform = "skew(-20deg) translate(-" + i + "px, 0)";
}