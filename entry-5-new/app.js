document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById("wrapper");
  const h1Element = document.querySelector('h1');

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  }

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
  ];

  let prev = 0;

  setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
      combination = combinations[index];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = index;
  }, 3000);

  // Typing effect for h1
  const text = "How New York Makes Me Feel";
  let index = 0;

  function type() {
    h1Element.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      index = 0;
    }

    setTimeout(type, 200); // Adjust the typing speed (milliseconds)
  }

  type();
});
