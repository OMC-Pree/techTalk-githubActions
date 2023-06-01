function changeImage() {
    var imgElement = document.getElementById("image");
    var randomImageURL = "https://source.unsplash.com/random"; // Replace with your desired API URL
    imgElement.src = randomImageURL + "?timestamp=" + new Date().getTime();
}
