const stats = [
    "HP",
    "ATK",
    "SPD",
];

const arrowValues = {
    "None": 0.75,
    "Single": 1.0,
    "Double": 1.25,
}


const stageCaps = {
    "Baby 1": 12.5,
    "Baby 2": 31,
    "Child": 87.5,
    "Adult": 162.5,
    "Perfect": 350,
}

const foodValues = {
    "None": 0.0,
    "Anomaly Meat": 1.0,
    "Carrot": 0.5,
    "Chaos Mushroom": 2.0,
    "Devil Fruit": 2.0,
    "Judgemental Lemon": 1.0,
    "Miraculous Tomato": 1.0,
    "Lunar Mushroom": 2.0,
    "Solar Mushroom": 2.0
}

function training(stage,bond,arrow,food,stat)
{
    counter = 0;
    statGain = 0;
    trainingPercent = 0;
    maxCap = stageCaps[stage];
    arrowValue = arrowValues[arrow];
    foodValue = foodValues[food];
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

    return counter;
}

function targetCalc(stage, currentTraining, targetTraining, seshValue) {
    if ((currentTraining >= targetTraining) || (seshValue <= 0)) { 
        document.getElementById("sessionCount").textContent = "Invalid!";
        return;
    }
    dTraining = (targetTraining - currentTraining)/100;
    cap = stageCaps[stage];
    sessionValReq = (cap * dTraining);
    seshCount = Math.ceil(sessionValReq/seshValue);
    document.getElementById("sessionCount").textContent = seshCount;
}