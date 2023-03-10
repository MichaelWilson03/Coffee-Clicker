const producer_container = document.getElementById("producer_container");
let coffee_cup = document.getElementById("coffee_cup");
let totalCups = document.getElementById("coffee_counter");
let count = 0;
let cups = document.getElementById("cups");

const coffeeProducers = [
  {
    id: 1,
    name: "Basic Coffee Roast Machine",
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
    rate: 3,
    cost: 100,
  },
];
coffee_cup.addEventListener("click", function () {
  count++;
  totalCups.textContent = count;
});
function render() {
  for (let producer of coffeeProducers) {
    // console.log(producer);

    let h2 = document.createElement("h2");
    h2.textContent = producer.name;
    let QTY = document.createElement("h3");
    QTY.textContent = `Quantity: ${producer.quantity}`;
    let rate = document.createElement("h3");
    rate.textContent = `coffee/second: ${producer.rate}`;
    let cost = document.createElement("h3");
    cost.textContent = `cost: ${producer.cost}`;

    const button = document.createElement("button");
    button.textContent = "Buy";
    button.id = producer.id;
    // button.addEventListener("click", (e) => {
    //   console.log(e.target.id);
    // });
    button.addEventListener("click", function () {
      let cost = producer.cost;
      let newCount = count - cost;
      if (count < cost) {
        return "Not Enough";
      } else {
        totalCups.textContent = newCount;
      }
    });
    button.addEventListener("click", function () {
      let per = producer.rate;
      let newRate = (per = cups);
    });
    producer_container.appendChild(h2);
    producer_container.appendChild(QTY);
    producer_container.appendChild(rate);
    producer_container.appendChild(cost);
    producer_container.appendChild(button);
  }
}

render();

// console.log(totalCups.textContent);
