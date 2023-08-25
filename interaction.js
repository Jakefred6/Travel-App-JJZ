// Get the feed section
var feedSection = document.querySelector(".feed");

// Get the list of photos
var photos = feedSection.querySelectorAll("li");

// Add a click event listener to each photo
for (var i = 0; i < photos.length; i++) {
  photos[i].addEventListener("click", function() {
    // Get the photo's image
    var image = this.querySelector("img");

    // Open a new window with the photo's image
    window.open(image.src, "_blank");
  });
}