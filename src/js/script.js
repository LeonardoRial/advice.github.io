const header = document.querySelector(".grid__header");
const quote = document.querySelector(".grid__quote");
const dice = document.querySelector(".grid__img__dice");

dice.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        quote.innerHTML = "Error";
      }
      return response.json();
    })
    .then((data) => {
      header.innerHTML = `Advice #${data.slip.id}`;
      quote.innerHTML = `\"${data.slip.advice}\"`;
    });
});

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    if (!response.ok) {
      quote.innerHTML = "Error";
    }
    return response.json();
  })
  .then((data) => {
    header.innerHTML = `Advice #${data.slip.id}`;
    quote.innerHTML = `\"${data.slip.advice}\"`;
  });
