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

// ----------------- functionality for the cards in projects section
function cardClicked(element) {
  element.classList.toggle("flipped");
}

// -----------------  functionality for fading in effect
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });
