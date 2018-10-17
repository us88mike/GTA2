/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var intervalId;

function startSlideShow() {
    intervalId = setInterval(changeImage, 1500);
}

function stopSlideShow() {
    clearInterval(intervalId);
}

function changeImage() {
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1,imageSrc.lastIndexOf("/") + 2);
    var newImage = "../ss_images/" + (Number(currentImageNumber) + 1) + ".jpg"
    // document.getElementById("result").innerHTML = newImage; 
    document.getElementById("image").setAttribute("src", newImage);
    
}
