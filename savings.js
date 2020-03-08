let savings = 0.0;
let currentNum = 0;

function showSavings() {
  document.getElementById("savingsAmount").innerHTML = savings.toFixed(2);
}

function addMoney() {
  if (parseFloat(document.getElementById("userInput").value) > 0) {
    let temp = savings + parseFloat(document.getElementById("userInput").value);
    savings = temp;
    document.getElementById("savingsAmount").innerHTML = savings.toFixed(2);
    addWorth(currentNum);
  }
}

let prices = {
  food: 5.0,
  movie: 12.0,
  class: 600.0
};

function addWorth(num) {
  if (num == 0) {
    let numOfFood = Math.floor(parseFloat(savings) / prices.food);
    document.getElementById("worthArea").innerHTML = "";

    if (numOfFood == 0) {
      document.getElementById("worthArea").innerHTML =
        "A cup of coffee at Starbucks is $" + prices.food + " after tax.";
    } else {
      for (let i = 0; i < numOfFood; i++) {
        var food = document.createElement("img");
        food.setAttribute("src", "images/food.png");
        document.getElementById("worthArea").appendChild(food);
      }
    }
  } else if (num == 1) {
    let numOfMovie = Math.floor(parseFloat(savings) / prices.movie);
    document.getElementById("worthArea").innerHTML = "";
    if (numOfMovie == 0) {
      document.getElementById("worthArea").innerHTML =
        "A movie ticket is worth $" + prices.movie + ".";
    } else {
      for (let i = 0; i < numOfMovie; i++) {
        var movie = document.createElement("img");
        movie.setAttribute("src", "images/cinema.png");
        document.getElementById("worthArea").appendChild(movie);
      }
    }
  } else if (num == 2) {
    let numOfClasses = Math.floor(parseFloat(savings) / prices.class);
    document.getElementById("worthArea").innerHTML = "";

    if (numOfClasses == 0) {
      document.getElementById("worthArea").innerHTML =
        "A 3-credit UBC CS course is $" + prices.class + ".";
    } else {
      for (let i = 0; i < numOfClasses; i++) {
        var classes = document.createElement("img");
        classes.setAttribute("src", "images/class.png");
        document.getElementById("worthArea").appendChild(classes);
      }
    }
  }
}

function random() {
  let temp = Math.floor(Math.random() * 3);
  while (temp == currentNum) {
    temp = Math.floor(Math.random() * 3);
  }
  currentNum = temp;
  addWorth(currentNum);
}

function inflate() {
  let keys = Object.keys(prices);
  for (let k of keys) {
    prices[k] = parseFloat(prices[k] * 1.02).toFixed(2);
  }
  document.getElementById("worthArea").innerHTML =
    "Prices have been inflated 2%. For example: " +
    JSON.stringify(prices) +
    "  Is your saving beating inflation?";
}
