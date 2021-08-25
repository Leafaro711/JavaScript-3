let btn = document.querySelector('#A');

function changeColor(element) {
    element.style.background = "red";
    element.innerText = "New text"
    console.log(element.attributes);
    // if (currentColor == "white") {
    //     btn.background === "green";
    // } else {
    //     btn.background === "red";
    // }
}
