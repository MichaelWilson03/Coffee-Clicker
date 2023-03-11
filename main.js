//Setting Global Variables

const producer_container = document.getElementById("producer_container");
let coffee_cup = document.getElementById("coffee_cup");
let totalCups = document.getElementById("coffee_counter");
let count = 0;
let cups = document.getElementById("cups");
let coffeePerSecond = 0;

const coffeeProducers = [
  {
    id: 1,
    name: "Basic Coffee Roast Machine",
    quantity: 0,
    rate: 1,
    cost: 10,
  },

  {
    id: 2,
    name: "French Press",
    quantity: 0,
    rate: 2,
    cost: 50,
  },

  {
    id: 3,
    name: "Mr. Coffee",
    quantity: 0,
    rate: 3,
    cost: 100,
  },
];

//Pressing coffee image makes counter go up by 1 with each click
coffee_cup.addEventListener("click", function () {
  count++;
  totalCups.textContent = count;
});

//Increments the coffee counter per second depending on which producer is bought
function incrementCoffee() {
  count += coffeePerSecond;
  totalCups.textContent = count;
}
setInterval(incrementCoffee, 1000);

//Adds producers to producer container column, adds "Buy" button, eventlistner to manipulate the DOM to change counter for when button is pressed (- cost from counter when producer is bought)
function render() {
  for (let producer of coffeeProducers) {
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

    button.addEventListener("click", function () {
      let cost = producer.cost;
      let newCount = count - cost;
      if (count < cost) {
        window.alert("Not Enough");
      } else {
        totalCups.textContent = newCount;
        count = newCount;
        coffeePerSecond += producer.rate;
        cups.textContent = coffeePerSecond;
      }
    });

    producer_container.appendChild(h2);
    producer_container.appendChild(QTY);
    producer_container.appendChild(rate);
    producer_container.appendChild(cost);
    producer_container.appendChild(button);
  }
}

render();
