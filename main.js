$(document).ready(function(){
    $(".nav-icon, #close").click(function(){
      $(".sidebar").animate({
        width: "toggle"
      });
    });
    $(".nav-icon").click(function(){
      $("#l1").show(500);
      $("#l2").show(1000);
      $("#l3").show(1500);
      $("#l4").show(2000);
    });
    $("#close").click(function(){
      $("#l1").hide(2000);
      $("#l2").hide(1500);
      $("#l3").hide(1000);
      $("#l4").hide(500);
    });
  });





  // JavaScript to display modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var burgerMenu = document.getElementsByClassName("nav-icon")[0];
var aboutLink = document.getElementById("l1");

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on the navbar item, open the modal 
aboutLink.onclick = function() {
  openModal();
  // Burger menu yopilishi
  document.querySelector('.nav-container').classList.remove('open');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// When the user clicks on burger menu icon, toggle navigation menu
burgerMenu.onclick = function() {
  // Burger menyusi yopilishi
  document.querySelector('.nav-container').classList.toggle('open');
  // Agar modal ochilgan bo'lsa, uni yopish
  if (modal.style.display === "block") {
    closeModal();
  }
}
