const body = document.querySelector("body");

const cofferProducers = [
  {
    id: 1,
    name: "Chemex",
    isVisible: false,
    quantity: 0,
    rate: 1,
    cost: 10,
  },

  {
    id: 2,
    name: "French Press",
    isVisible: false,
    quantity: 0,
    rate: 2,
    cost: 50,
  },

  {
    id: 3,
    name: "Mr. Coffee",
    isVisible: false,
    quantity: 0,
    rate: 5,
    cost: 100,
  },
];

function render() {
  for (let producer of cofferProducers) {
    // console.log(producer);

    let h2 = document.createElement("h2");
    h2.textContent = producer.name;

    const button = document.createElement("button");
    button.textContent = "Buy";
    button.id = producer.id;
    button.addEventListener("click", (e) => {
      console.log(e.target.id);
    });
    body.appendChild(h2);
    body.appendChild(button);
  }
}

render();
