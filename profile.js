// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
profileName.innerHTML = "Marvin";

    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://play-lh.googleusercontent.com/k2hk4F0LgI-bqE2N2RYVe1k4wYavSWOpBCsX2G_GyvRZPdKl82V4gIOOk16fPJy8FQ=w600-h300-pc0xffffff-pd";

    // 3. Updated the src of main to a photo that's be your first post.

  main.src = "https://i.ytimg.com/vi/TKfS5zVfGBc/maxresdefault.jpg";
  
});