let buttonIncrease = document.getElementById("increase");
let buttonDecrease = document.getElementById("decrease");
let buttonReset = document.getElementById("reset");
let counterShow = document.getElementById("counter");

let count = 0;

buttonIncrease.addEventListener("click", function () {
  count += 1;
  counterShow.innerHTML = count;
});

buttonDecrease.addEventListener("click", function () {
  count -= 1;
  counterShow.innerHTML = count;
});

buttonReset.addEventListener("click", function () {
  if (confirm("Resetlemek istiyor musunuz?") == true) {
    count = 0;
    counterShow.innerHTML = count;
  } else {
    return false;
  }
});
