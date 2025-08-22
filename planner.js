const foodDictionary = {
  "None": {
    "training": 0.0,
    "fill": 0,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Acorn": {
    "training": 0,
    "fill": 20,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Anomaly Meat": {
    "training": 1.0,
    "fill": 0,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Apple": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Big Meat": {
    "training": 0,
    "fill": 25,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Blue Apple": {
    "training": 0,
    "fill": 15,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Carrot": {
    "training": 0.5,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Chaos Mushroom": {
    "training": 2.0,
    "fill": 30,
    "instaStats": 0,
    "arrow": "Double",
    "count": 1
  },
  "Crystal Acorn": {
    "training": 0,
    "fill": 20,
    "instaStats": 7.5,
    "arrow": "None",
    "count": 1
  },
  "Devil Fruit": {
    "training": 2.0,
    "fill": 0,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Frozen Mushroom": {
    "training": 0,
    "fill": 25,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Frozen Vegetable": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "Double",
    "count": 1
  },
  "Gold Poop": {
    "training": 0,
    "fill": 20,
    "instaStats": 0.75,
    "arrow": "None",
    "count": 1
  },
  "Green Apple": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Happy Mushroom": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Judgemental Lemon": {
    "training": 1.0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Lemon of Judgement": {
    "training": 0,
    "fill": 20,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Lucky Apple": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Lunar Mushroom": {
    "training": 0,
    "fill": 30,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Meat": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Mega-Carrot": {
    "training": 0.5,
    "fill": 15,
    "instaStats": 0,
    "arrow": "None",
    "count": 3
  },
  "Mega-Vegetable": {
    "training": 0.0,
    "fill": 15,
    "instaStats": 0,
    "arrow": "Double",
    "count": 3
  },
  "Miraculous Tomato": {
    "training": 1.0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "Double",
    "count": 1
  },
  "Mushroom": {
    "training": 0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Platinum Poop": {
    "training": 0,
    "fill": 25,
    "instaStats": 0.75,
    "arrow": "None",
    "count": 1
  },
  "Poop": {
    "training": 0,
    "fill": 15,
    "instaStats": 0.75,
    "arrow": "None",
    "count": 1
  },
  "Sirloin": {
    "training": 0,
    "fill": 60,
    "instaStats": 0,
    "arrow": "None",
    "count": 1
  },
  "Solar Mushroom": {
    "training": 0.0,
    "fill": 30,
    "instaStats": 0,
    "arrow": "Double",
    "count": 1
  },
  "Sports Drink": {
    "training": 0,
    "fill": 0,
    "instaStats": 0,
    "arrow": "None",
    "count": 2
  },
  "Vegetable": {
    "training": 0.0,
    "fill": 10,
    "instaStats": 0,
    "arrow": "Double",
    "count": 1
  }
};

const foodTraining = {
    "None": 0.0,
    "Anomaly Meat": 1.0,
    "Carrot": 0.5,
    "Chaos Mushroom": 2.0,
    "Devil Fruit": 2.0,
    "Judgemental Lemon": 1.0,
    "Miraculous Tomato": 1.0,
    "Solar Mushroom": 0.25,
    "Vegetable": 0.25,
    "Mega-Carrot": 0.5,
    "Mega-Vegetable": 0.25,
}

const foodFills = {
    "None": 0, 
    "Acorn": 20,
    "Anomaly Meat": 0,
    "Apple": 10,
    "Big Meat": 25,
    "Blue Apple": 15,
    "Carrot": 10,
    "Chaos Mushroom": 30,
    "Crystal Acorn": 20,
    "Devil Fruit B": 10,
    "Devil Fruit G": 10,
    "Devil Fruit R": 10,
    "Frozen Mushroom": 25,
    "Frozen Vegetable": 10,
    "Gold Poop": 20,
    "Golden Acorn": 5,
    "Green Apple": 10,
    "Happy Mushroom": 10,
    "Judgemental Lemon": 10,
    "Lemon of Judgement": 20,
    "Lucky Apple": 10,
    "Lunar Mushroom": 30,
    "Meat": 10,
    "Mega-Carrot": 15,
    "Mega-Vegetable": 15,
    "Miraculous Tomato": 10,
    "Mushroom": 10,
    "Platinum Poop": 25,
    "Poop": 15,
    "Sirloin": 60,
    "Solar Mushroom": 30,
    "Sports Drink": 0,
    "Vegetable": 10,
};

const foodInstaStats = {
    "Crystal Acorn": 7.5,
    "Poop": 0.75,
    "Gold Poop": 0.75,
    "Platinum Poop": 0.75
};

const foodArrows = {
    "Devil Fruit B": "Double",
    "Devil Fruit G": "Double",
    "Devil Fruit R": "Double",
    "Frozen Vegetable": "Double",
    "Mega-Vegetable": "Double",
    "Miraculous Tomato": "Double",
    "Solar Mushroom": "Double",
    "Vegetable": "Double",
};

const stageCaps = {
    "Baby 1": 12.5,
    "Baby 2": 31,
    "Child": 87.5,
    "Adult": 162.5,
    "Perfect": 350,
};

const stageFills = {
    "Baby 1": 3,
    "Baby 2": 2,
    "Child": 1,
    "Adult": 0.75,
    "Perfect": 0.5,
};

const arrowValues = {
    "None": 0.75,
    "Single": 1.0,
    "Double": 1.25,
}

function plan(stage, initHunger, initTraining, bond){
    const sessionCap = stageCaps[stage];
    const fillMult = stageFills[stage];
    var currentTraining = initTraining;
    var currentHunger = initHunger;

    for (let sessions = 1; sessions <= 10; sessions++) {

        strFood = document.getElementById('food-' + sessions).children[0].value;
        cellHungerBefore = document.getElementById("hunger-before-" + sessions);
        cellHungerAfter = document.getElementById("hunger-after-" + sessions);
        cellTraining = document.getElementById("training-" + sessions);
        pillCount = 0;
        if (sessions > 0) { pillCount = document.getElementById('pills-' + sessions).value; }

        let foodFill = Math.floor(fillMult * foodDictionary[strFood]["fill"]);
        currentHunger = currentHunger + foodFill;
        if (currentHunger > 100) { currentHunger = 100; };
        currentHunger = currentHunger - (pillCount * 10 * fillMult);
        if (currentHunger < 0) { currentHunger = 0; };
        cellHungerBefore.textContent = currentHunger;
        cellHungerBefore.value = currentHunger;

        var arrow = "None";
        if (currentHunger <= 40) { arrow = "Single"; };
        if (foodDictionary[strFood]["arrow"] == "Double") { arrow = "Double"; };

        if (sessions > 0) {
            var train = training(stage, bond, arrow, strFood);
            train = train + foodDictionary[strFood]["instaStats"];
            train = train/sessionCap*100;
            if (strFood == "Lemon of Judgement") { train = train + 6; };
            currentTraining = currentTraining + train;
            if (currentTraining > 100) { currentTraining = 100; };
            currentHunger = currentHunger - 5;
            if (currentHunger < 0) { currentHunger = 0; };
        };

        cellHungerAfter.textContent = currentHunger;
        cellHungerAfter.value = currentHunger;

        cellTraining.textContent = currentTraining.toFixed(1);
        cellTraining.value = currentTraining;

    };
};

function training(stage,bond,arrow,food)
{
    counter = 0;
    statGain = 0;
    trainingPercent = 0;
    maxCap = stageCaps[stage];
    arrowValue = arrowValues[arrow];
    foodValue = 0;
    foodValue = foodDictionary[food]["training"];
    bondValue = 0;
    if (bond <= 49)
        bondValue = 0;
    else if (bond > 49 && bond < 91 && arrow == "Double")
        bondValue = 0.1;
    else if (bond == 100 && arrow == "Double")
        bondValue = 0.2;
    else if (bond == 100)
        bondValue = 0.1;
    
    if (food == "Judgemental Lemon") {
        switch(stage) {
            case "Baby 1":
            case "Baby 2":
                foodValue = 0;
                break;
            case "Adult":
                foodValue = 1.25;
                break;
            case "Perfect":
                foodValue = 1.5;
            default:
        }
    }

    counter = arrowValue + foodValue + bondValue;

    return counter;
};

function initTable() {
    sessionCount = 0;
    const tableBody = document.querySelector('#trainingTable tbody');
    
    for (let sessions = 1; sessions <= 10; sessions++) {
        let firstRow = tableBody.insertRow();
        let foodCell = firstRow.insertCell();
        foodCell.colSpan = 2;
        foodCell.textContent = "Food:";
        
        let foodSelect = document.createElement('select');
        let foodList = Object.keys(foodFills);
        foodList.forEach(foodName => {
            let option = document.createElement('option');
            option.textContent = foodName;
            option.value = foodName;
            foodSelect.appendChild(option);
        });
        foodCell.appendChild(foodSelect);
        foodCell.id = "food-" + sessions;

        let pillsCell = firstRow.insertCell();
        pillsCell.colSpan = 2;
        pillsCell.textContent = "Pills:";
        
        let pillsInput = document.createElement('input');
        pillsInput.type = "number";
        pillsInput.id = "pills-" + sessions;
        pillsInput.min = "0";
        pillsInput.defaultValue = "0";
        pillsCell.appendChild(pillsInput);

        let secondRow = tableBody.insertRow();
        
        let sessionCountCell = secondRow.insertCell();
        sessionCountCell.textContent = sessions;

        let hungerBeforeCell = secondRow.insertCell();
        hungerBeforeCell.textContent = "-";
        hungerBeforeCell.id = "hunger-before-" + sessions;

        let hungerAfterCell = secondRow.insertCell();
        hungerAfterCell.textContent = "-";
        hungerAfterCell.id = "hunger-after-" + sessions;

        let trainingCell = secondRow.insertCell();
        trainingCell.textContent = "-";
        trainingCell.id = "training-" + sessions;
    }
}
