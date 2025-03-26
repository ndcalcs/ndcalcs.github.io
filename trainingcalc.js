const stats = [
    "HP",
    "ATK",
    "SPD",
];

const arrowValues = {
    "None": { "Value": 0.75 },
    "Single": { "Value": 1.0 },
    "Double": { "Value": 1.25 },
}

const stageCaps = {
    "Baby 1": { "Cap": 12.5 },
    "Baby 2": { "Cap": 31 },
    "Child": { "Cap": 87.5 },
    "Adult": { "Cap": 162.5 },
    "Perfect": { "Cap": 350 },
}

const foodValues = {
    "None": { "Value": 0.0 },
    "Anomalous Meat": { "Value": 1.0 },
    "Carrot": { "Value": 0.5 },
    "Chaos Mushroom": { "Value": 2.0 },
    "Devil Fruit": { "Value": 2.0 },
    "Judgemental Lemon": { "Value": 1.0 },
    "Miraculous Tomato": { "Value": 1.0 }
}

function training(stage,bond,arrow,food,stat)
{
    counter = 0;
    statGain = 0;
    trainingPercent = 0;
    maxCap = stageCaps[stage].Cap;
    arrowValue = arrowValues[arrow].Value;
    foodValue = foodValues[food].Value;
    bondValue = 0;
    if (bond <= 49)
        bondValue = 0;
    else if (bond > 49 && bond < 90 && arrow == "Double")
        bondValue = 0.1;
    else if (bond == 100 && arrow == "Double")
        bondValue = 0.2;
    else if (bond == 100)
        bondValue = 0.1;
    
    counter = arrowValue + foodValue + bondValue;
    document.getElementById("sessionValue").textContent = counter;

    switch (stat) {
        case "ATK":
        case "SPD":
            statGain = counter * 2;
            break;
        case "HP":
            statGain = "~" + ((counter/77*2*100).toFixed(1)) + "%";
    }
    document.getElementById("statGain").textContent = statGain + " " + stat;

    trainingPercent = (counter/maxCap*100).toFixed(2) + "%";
    document.getElementById("trainingPercent").textContent = trainingPercent;
}