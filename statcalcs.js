const digimonDict = {
  "Botamon": { "Tama": "V0", "HP": 50, "ATK": 6, "SPD": 4, "DEF": 6 },
  "Chibickmon": { "Tama": "V0", "HP": 40, "ATK": 7, "SPD": 6, "DEF": 4 },
  "Koromon": { "Tama": "V0", "HP": 90, "ATK": 9, "SPD": 6, "DEF": 6 },
  "Pickmon": { "Tama": "V0", "HP": 70, "ATK": 10, "SPD": 8, "DEF": 5 },
  "Agumon": { "Tama": "V0", "HP": 250, "ATK": 50, "SPD": 50, "DEF": 25 },
  "Agumon 06": { "Tama": "V0", "HP": 250, "ATK": 55, "SPD": 55, "DEF": 25 },
  "Black Agumon": { "Tama": "V0", "HP": 300, "ATK": 55, "SPD": 40, "DEF": 25 },
  "Gottsumon": { "Tama": "VS", "HP": 400, "ATK": 35, "SPD": 35, "DEF": 40 },
  "Kokuwamon": { "Tama": "V0", "HP": 450, "ATK": 30, "SPD": 30, "DEF": 45 },
  "Pillomon": { "Tama": "V0", "HP": 500, "ATK": 25, "SPD": 20, "DEF": 55 },
  "Starmons": { "Tama": "VS", "HP": 300, "ATK": 40, "SPD": 60, "DEF": 20 },
  "Yuki Agumon": { "Tama": "V0", "HP": 350, "ATK": 40, "SPD": 45, "DEF": 30 },
  "Clockmon": { "Tama": "V0", "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "DarkTyrannomon": { "Tama": "V0", "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "Deltamon": { "Tama": "V0", "HP": 900, "ATK": 115, "SPD": 55, "DEF": 40 },
  "GeoGreymon": { "Tama": "V0", "HP": 1000, "ATK": 110, "SPD": 70, "DEF": 60 },
  "Geremon": { "Tama": "M", "HP": 750, "ATK": 50, "SPD": 45, "DEF": 40 },
  "GoldGuardromon": { "Tama": "V0", "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 120 },
  "GoldNumemon": { "Tama": "M", "HP": 750, "ATK": 50, "SPD": 45, "DEF": 50 },
  "Greymon": { "Tama": "V0", "HP": 1000, "ATK": 100, "SPD": 65, "DEF": 60 },
  "Guardromon": { "Tama": "V0", "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 110 },
  "Numemon": { "Tama": "M", "HP": 750, "ATK": 45, "SPD": 40, "DEF": 40 },
  "ShellNumemon": { "Tama": "M", "HP": 800, "ATK": 50, "SPD": 30, "DEF": 70 },
  "Thunderballmon": { "Tama": "V0", "HP": 900, "ATK": 85, "SPD": 75, "DEF": 50 },
  "Tuskmon": { "Tama": "V0", "HP": 1250, "ATK": 105, "SPD": 40, "DEF": 55 },
  "Tyrannomon": { "Tama": "V0", "HP": 1150, "ATK": 65, "SPD": 50, "DEF": 70 },
  "Vdramon": { "Tama": "V0", "HP": 1050, "ATK": 100, "SPD": 90, "DEF": 55 },
  "VDramon Black": { "Tama": "V0", "HP": 1050, "ATK": 105, "SPD": 75, "DEF": 65 },
  "VDramon Red": { "Tama": "V0", "HP": 950, "ATK": 110, "SPD": 100, "DEF": 45 },
  "YukiDarumon": { "Tama": "V0", "HP": 1150, "ATK": 80, "SPD": 50, "DEF": 80 },
  "AeroVdramon": { "Tama": "V0", "HP": 2250, "ATK": 215, "SPD": 150, "DEF": 110 },
  "Andromon": { "Tama": "V0", "HP": 2250, "ATK": 100, "SPD": 50, "DEF": 225 },
  "Big Mamemon": { "Tama": "V0", "HP": 2800, "ATK": 165, "SPD": 70, "DEF": 95 },
  "Black King Numemon": { "Tama": "M", "HP": 2400, "ATK": 85, "SPD": 75, "DEF": 200 },
  "BlackAeroVdramon": { "Tama": "V0", "HP": 2050, "ATK": 235, "SPD": 150, "DEF": 110 },
  "Gigadramon": { "Tama": "V0", "HP": 1800, "ATK": 220, "SPD": 140, "DEF": 110 },
  "GigaWaruMonzaemon": { "Tama": "M", "HP": 2000, "ATK": 255, "SPD": 165, "DEF": 130 },
  "Mamemon": { "Tama": "V0", "HP": 2000, "ATK": 185, "SPD": 140, "DEF": 75 },
  "MameTyramon": { "Tama": "V0", "HP": 2200, "ATK": 180, "SPD": 135, "DEF": 85 },
  "Master Tyranomon": { "Tama": "V0", "HP": 2100, "ATK": 190, "SPD": 95, "DEF": 180 },
  "Megadramon": { "Tama": "V0", "HP": 1750, "ATK": 210, "SPD": 135, "DEF": 80 },
  "MetalGreymon": { "Tama": "V0", "HP": 2000, "ATK": 225, "SPD": 130, "DEF": 120 },
  "MetalGreymon Alter": { "Tama": "V0", "HP": 2050, "ATK": 235, "SPD": 135, "DEF": 125 },
  "MetalGreymon Virus": { "Tama": "V0", "HP": 1900, "ATK": 220, "SPD": 130, "DEF": 110 },
  "MetalMamemon": { "Tama": "V0", "HP": 2000, "ATK": 190, "SPD": 140, "DEF": 120 },
  "MetalTyrannomon": { "Tama": "V0", "HP": 2150, "ATK": 175, "SPD": 85, "DEF": 125 },
  "Monzaemon": { "Tama": "M", "HP": 2300, "ATK": 235, "SPD": 135, "DEF": 150 },
  "Polar Bearmon": { "Tama": "V0", "HP": 2300, "ATK": 110, "SPD": 100, "DEF": 210 },
  "RizeGreymon": { "Tama": "V0", "HP": 1950, "ATK": 230, "SPD": 140, "DEF": 110 },
  "Triceramon": { "Tama": "V0", "HP": 2100, "ATK": 125, "SPD": 75, "DEF": 190 },
  "WaruMonzaemon": { "Tama": "M", "HP": 2150, "ATK": 245, "SPD": 145, "DEF": 145 },
  "Icemon": {"Tama": "VS", "HP": 1000, "ATK": 60, "SPD": 50, "DEF": 90},
  "ShootingStarmon": {"Tama": "VS", "HP": 900, "ATK": 120, "SPD": 75, "DEF": 40},
  "Starmon": {"Tama": "VS", "HP": 1100, "ATK": 70, "SPD": 70, "DEF": 50},
  "DarkSuperStarmon": {"Tama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "SuperStarmon": {"Tama": "VS", "HP": 1900, "ATK": 160, "SPD": 160, "DEF": 90},
  "InsekimonHigh": {"Tama": "VS", "HP": 2000, "ATK": 160, "SPD": 140, "DEF": 200},
  "InsekimonLow": {"Tama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "InsekimonSuper": {"Tama": "VS", "HP": 1900, "ATK": 160, "SPD": 160, "DEF": 140},
  "InsekimonDark": {"Tama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 210},
  "Daipenmon": {"Tama": "SP", "HP": 1200, "ATK": 160, "SPD": 110, "DEF": 160},
  "MetalEtemon": {"Tama": "M", "HP": 1300, "ATK": 179, "SPD": 76, "DEF": 163},
  "PlatinumNumemon": {"Tama": "M", "HP": 2000, "ATK": 100, "SPD": 60, "DEF": 190},
  "Machinedramon": {"Tama": "V0", "HP": 1700, "ATK": 170, "SPD": 70, "DEF": 140},
  "Blizzardmon": {"Tama": "SP", "HP": 2100, "ATK": 160, "SPD": 120, "DEF": 160},
  "Etemon": {"Tama": "M", "HP": 2000, "ATK": 239, "SPD": 157, "DEF": 152},
  "Chackmon": {"Tama": "SP", "Type": "Free", "HP": 950, "ATK": 80, "SPD": 70, "DEF": 80}
};

const baby1List = [
  "Botamon",
  "Chibickmon"
];
const baby2List = [
  "Koromon",
  "Pickmon"
];
const childList = [
  "Agumon",
  "Agumon 06",
  "Black Agumon",
  "Gottsumon",
  "Kokuwamon",
  "Pillomon",
  "Starmons",
  "Yuki Agumon"
];
const adultList = [
  "Chackmon",
  "DarkTyrannomon",
  "Deltamon",
  "GeoGreymon",
  "Geremon",
  "GoldGuardromon",
  "GoldNumemon",
  "Greymon",
  "Guardromon",
  "Numemon",
  "ShellNumemon",
  "Thunderballmon",
  "Tyrannomon",
  "Vdramon",
  "VDramon Black",
  "VDramon Red",
  "Icemon",
  "ShootingStarmon",
  "Starmon"
];
const perfList = [
  "AeroVdramon",
  "Andromon",
  "Big Mamemon",
  "Black King Numemon",
  "BlackAeroVdramon",
  "Gigadramon",
  "GigaWaruMonzaemon",
  "Mamemon",
  "MameTyramon",
  "Megadramon",
  "MetalGreymon",
  "MetalGreymon Alter",
  "MetalGreymon Virus",
  "MetalMamemon",
  "MetalTyrannomon",
  "Monzaemon",
  "Polar Bearmon",
  "RizeGreymon",
  "Triceramon",
  "WaruMonzaemon",
  "DarkSuperStarmon",
  "SuperStarmon",
  "InsekimonHigh",
  "InsekimonLow",
  "InsekimonSuper",
  "InsekimonDark",
  "Etemon"
]
const ultList = [
  "Daipenmon",
  "Machinedramon",
  "MetalEtemon",
  "PlatinumNumemon"
]
const stats = [
    "HP",
    "ATK",
    "SPD",
    "DEF"
];

const baby1 = document.getElementById('baby1');
const baby2 = document.getElementById('baby2');
const child = document.getElementById('child');
const adult = document.getElementById('adult');
const perf = document.getElementById('perf');
const ult = document.getElementById('ult');

const baby1StatList = ['hp1','atk1','spd1','def1'];
const baby2StatList = ['hp2','atk2','spd2','def2'];
const childStatList = ['hp3','atk3','spd3','def3'];
const adultStatList = ['hp4','atk4','spd4','def4'];
const perfStatList = ['hp5','atk5','spd5','def5'];
const ultStatList = ['hp6','atk6','spd6','def6'];

function calcBaseStat(currentDigi,lastDigi,stage) {
    var newStats = [];
    var currentInnate = digimonDict[currentDigi];
    var lastInnate = digimonDict[lastDigi];

    for (let i = 0; i < stats.length; i++) {
        switch(stage) {
          case "Baby1":
            document.getElementById(baby1StatList[i]).textContent = currentInnate[stats[i]];
            break;
          case "Baby2":
            baby1Stat = Number(document.getElementById(baby1StatList[i]).innerText);
            newStats.push(currentInnate[stats[i]] + baby1Stat - Math.round(0.6*(lastInnate[stats[i]])));
            document.getElementById(baby2StatList[i]).textContent = newStats[i];
            break;
          case "Child":
            baby2Stat = Number(document.getElementById(baby2StatList[i]).innerText);
            newStats.push(currentInnate[stats[i]] + baby2Stat - Math.round(0.6*(lastInnate[stats[i]])));
            document.getElementById(childStatList[i]).textContent = newStats[i];
            break;
          case "Adult":
            childStat = Number(document.getElementById(childStatList[i]).innerText);
            if (currentDigi == "Scumon") {
              newStats.push(childStat + Math.round(lastInnate[stats[i]]*0.74));
            } else {
              newStats.push(currentInnate[stats[i]] + childStat - Math.round(0.6*(lastInnate[stats[i]])));
            }
            document.getElementById(adultStatList[i]).textContent = newStats[i];
            break;
          case "Perfect":
            adultStat = Number(document.getElementById(adultStatList[i]).innerText);
            if (lastDigi == "Scumon" || currentDigi == "KingScumon") {
              newStats.push(Math.round(adultStat*1.4));
            } else {
              newStats.push(currentInnate[stats[i]] + adultStat - Math.round(0.6*(lastInnate[stats[i]])));
            }
            document.getElementById(perfStatList[i]).textContent = newStats[i];
            break;
          case "Ultimate":
            perfStat = Number(document.getElementById(perfStatList[i]).innerText);
            if (lastDigi == "KingScumon") { 
              newStats.push(Math.round(1.4*perfStat));
            } else {
              newStats.push(currentInnate[stats[i]] + perfStat - Math.round(0.6*(lastInnate[stats[i]])));
            }
            document.getElementById(ultStatList[i]).textContent = newStats[i];
        }
    }
    updateSums();
}

const sumList = ['sum1','sum2','sum3','sum4','sum5','sum6'];

function updateSums() {
  for (let j = 0; j < sumList.length; j++) {
    currentSum = 0;
    for (let i = 0; i < stats.length; i++) {
      currentStat = 0;
      switch (j) {
        case 0:
          currentStat = Number(document.getElementById(baby1StatList[i]).textContent);
          break;
        case 1:
          currentStat = Number(document.getElementById(baby2StatList[i]).textContent);
          break;
        case 2:
          currentStat = Number(document.getElementById(childStatList[i]).textContent);
          break;
        case 3:
          currentStat = Number(document.getElementById(adultStatList[i]).textContent);
          break;
        case 4:
          currentStat = Number(document.getElementById(perfStatList[i]).textContent);
          break;
        case 5:
          currentStat = Number(document.getElementById(ultStatList[i]).textContent);
          break;
      }
      if (stats[i] == "HP") {
        currentSum = currentSum + Math.round(currentStat/10);
      } else {
        currentSum = currentSum + currentStat;
      }
    }
    document.getElementById(sumList[j]).textContent = currentSum
  }
}

function initTable(stage) {
  stageDigis = []
  switch(stage) {
    case "Baby1":
      stageDigis = baby1List;
      break;
    case "Baby2":
      stageDigis = baby2List;
      break;
    case "Child":
      stageDigis = childList;
      break;
    case "Adult":
      stageDigis = adultList;
      break;
    case "Perfect":
      stageDigis = perfList;
      break;
    case "Ultimate":
      stageDigis = ultList;
      break;
  }
  const tableBody = document.querySelector('#' & CStr(stage) & 'statTable tbody');
  
  for (let i = 1; i <= stageDigis.length; i++) {
    tableRow = tableBody.insertRow();
    statCell = tableRow.insertCell();
    foodSelect = document.createElement('select');
    foodList = Object.keys(foodFills);
    foodList.forEach( foodName => {
        option = document.createElement('option');
        option.textContent = foodName;
        option.value = foodName;
        foodSelect.appendChild(option);
    });
    foodCell.appendChild(foodSelect);
    foodCell.id = "food-" + i;

    hunger1Cell = tableRow.insertCell();
    hunger1Cell.textContent = "-";
    hunger1Cell.id = "hunger-before-" + i;

    tableRow.insertCell().textContent = i;

    hunger2Cell = tableRow.insertCell();
    hunger2Cell.textContent = "-";
    hunger2Cell.id = "hunger-after-" + i;

    trainingCell = tableRow.insertCell();
    trainingCell.textContent = "-";
    trainingCell.id = "training-" + i;
  }
};


baby1.addEventListener('change', calcBaseStat(baby1.value,baby1.value,"Baby1"));
baby2.addEventListener('change', calcBaseStat(baby2.value,baby1.value,"Baby2"));
child.addEventListener('change', calcBaseStat(child.value,baby2.value,"Child"));
adult.addEventListener('change', calcBaseStat(adult.value,child.value,"Adult"));
perf.addEventListener('change', calcBaseStat(perf.value,adult.value,"Perfect"));
ult.addEventListener('change', calcBaseStat(ult.value,perf.value,"Ultimate"));