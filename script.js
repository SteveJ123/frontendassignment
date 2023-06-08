function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    event.target.classList.add("dragged-item");
}

function drop(event) {
    event.preventDefault();
    var fetchData = event.dataTransfer.getData("text");
    var draggableElement = document.getElementById(fetchData);
    event.target.appendChild(draggableElement);
    draggableElement.classList.remove("dragged-item");
    showSuccessMessage();
}

function showSuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 2000);
}

function resetContainers() {
    var container1 = document.querySelector(".container1");
    var container2 = document.getElementById("getData");

    while (container2.firstChild) {
        container1.appendChild(container2.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var container1 = document.querySelector(".container1");
    var container2 = document.getElementById("getData");

    container1.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
        event.target.classList.add("dragged-item");
    });

    container2.addEventListener("dragover", allowDrop);

    container2.addEventListener("drop", drop);

    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetContainers);
});