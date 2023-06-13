let counter = 0;
const countText = document.querySelector("p");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

incrementBtn.addEventListener("click", (e) => {
  counter++;
  countText.textContent = counter;
  decrementBtn.classList.remove("btn-disabled");
  console.log(counter);
});

if (counter === 0) {
  decrementBtn.classList.add("btn-disabled");
}

decrementBtn.addEventListener("click", (e) => {
  if (counter === 0) {
    decrementBtn.classList.add("btn-disabled");
  } else {
    counter--;
    countText.textContent = counter;
    if (counter === 0) {
      decrementBtn.classList.add("btn-disabled");
      console.log(counter);
    }
  }
});
