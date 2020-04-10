// animation trigger with Javascript
// get the bounceBtn
const bounceBtn = document.getElementById('bounce-btn');
// triggerBounce will add the class "sign-up-anim" to the bounceBtn
function triggerBounce() {
    bounceBtn.classList.add('sign-up-anim');
}
// stopBounce will remove the class "sign-up-anim" from the bounceBtn
function stopBounce() {
    bounceBtn.classList.remove('sign-up-anim');
}
// event listeners to trigger animation on mouseover and stop animation on mouseout
bounceBtn.addEventListener('mouseover', triggerBounce);
bounceBtn.addEventListener('mouseout', stopBounce);

// animation using jQuery - will change the opacity from 0-100% and change header to 0 margin
$(document).ready(function(){
    $(".top-header").animate({opacity: '1', marginLeft: '0'}, {duration: 2000});
});

// animation using jQuery - will change the opacity from 0-100% and change the width/height from 0-100%
$(document).ready(function(){
    $(".fade-zoom").animate({opacity: '1', width: '100%', height: '100%'}, {duration: 2000});
});