document.addEventListener("DOMContentLoaded", () => {
const toggleButton = document.getElementById("toggle-button"); //getting the button from my html page
const toggleParagraph = document.getElementById("toggle-paragraph"); // getting the paragraph from the page 
// note: getElementById is how you retrieve html elements by their id="" tag 

// now I need to add an event listener to check if the button has been clicked
toggleButton.addEventListener("click", toggleParagraphVisible)
// in event listeners the first parameter is the user action and the second is is the function that will be activated

// now i need to create the function 
function toggleParagraphVisible (){
    toggleParagraph.style.display = toggleParagraph.style.display === "none" ? "block" : "none";
}

});
