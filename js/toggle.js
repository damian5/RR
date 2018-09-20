// let mainNav=document.getElementById('header-links-container');
// let navbarToggle=document.getElementById('menu-toggle-container');

// navbarToggle.addEventListener('click',function(){

//     if(this.classList.contains('active')){
//         mainNav.style.display="none";
//         this.classList.remove('active');
//     }
//     else{
//         mainNav.style.display="flex";
//         this.classList.add('active');

//     }
// });

$(document).ready(function() {
    $("#menu-toggle-container").click(function() {
        $("#header-links-container").toggle("blind");
    });
});