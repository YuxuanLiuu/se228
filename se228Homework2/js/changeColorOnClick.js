var classes = document.getElementsByClassName("list_item_title");
var classArray = Array.from(classes);
classArray.forEach(element =>
    element.style.color = "black");

classArray.forEach(element =>
    element.addEventListener("mouseenter", changeColorToRed));

classArray.forEach(element =>
    element.addEventListener("mouseleave", changeColorToBlack));

function changeColorToRed() {
   
        this.style.color = "red";
}

function changeColorToBlack() {
   
        this.style.color = "black";
}
