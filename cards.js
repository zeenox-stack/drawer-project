document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelector(".icons");
    const button = document.querySelector(".share-btn"); 
    const pInfo = document.querySelector(".profile-info");

    button.addEventListener("click", function() {
        if (icons.style.display === "none" || icons.style.display === "") {
            icons.style.display = "flex"; 
        } else {
            icons.style.display = "none";
        } 

        if (window.innerWidth <= 768) {

         if (icons.style.display === "none" || icons.style.display === "") { 
            pInfo.style.display = "none";
            icons.style.display = "flex"; 

         } else { 
            icons.style.display = "none";
         }; 
        }
    }); 

}); 
