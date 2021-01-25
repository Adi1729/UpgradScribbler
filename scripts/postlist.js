var deletePostModal = document.getElementById("exampleModalCenter");
var cancelDelete = document.getElementById("btn-custom-delete");
var confirmDelete = document.getElementById("btn-custom-dont-delete");

// Get the button that opens the modal
var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);
console.log(deleteIconsArray);

// Get the dot icons
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);
console.log(dotsArray);

function deletePost(obj_){
    console.log(obj_);
}