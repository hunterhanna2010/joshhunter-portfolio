console.log(`we are live!`)

let jobImagesArray = [
    './imgs/Jobtracker1.png',
    './imgs/Jobtracker2.png',
    './imgs/Jobtracker3.png',
    './imgs/Jobtracker4.png',
    './imgs/Jobtracker5.png'
]

let lightImagesArray = [
    './imgs/LTLO-01.png',
    './imgs/LTLO-02.png',
    './imgs/LTLO-03.png',
    './imgs/LTLO-04.png',
    './imgs'
]
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

	

  