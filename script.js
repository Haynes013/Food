const icons = document.querySelectorAll(".section-1-icons i");
// set how long before each icon change
let i = 1;
setInterval(() => {
  i++;
  // create a variable icon and assign it to the .change item
  const icon = document.querySelector(".section-1-icons i.change");
  // remove the .change class to make item disappear
  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    // add next item to show up
    icon.nextElementSibling.classList.add("change");
  }
}, 2500);
