var classes = document.getElementsByClassName("list_item_title");
var classArray = Array.from(classes);
classArray.forEach(element =>
    element.style.color = "black");

classArray.forEach(element =>
    element.addEventListener("click", changeColor));

function changeColor() {
    if(this.style.color === "black"){
        this.style.color = "red";
    } else {
        this.style.color = "black";
    }
}