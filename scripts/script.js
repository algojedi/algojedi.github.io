const sideNavToggle = document.querySelector(".navbar_toggle");
const navLinks = document.querySelectorAll(".navbar_list_item_link");
console.log(sideNavToggle);
sideNavToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav_open");
  navLinks.forEach((link) => {
    link.classList.add("active");
    console.log("active class added to each link");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
    console.log("link clickd");
  });
});

// functionality for the cards in projects section

const card = document.getElementById("card");

function cardClicked() {
  card.classList.toggle("flipped");
}
