const digimonDict = {
  "Botamon": { "HP": 50, "ATK": 6, "SPD": 4, "DEF": 6 },
  "Chibickmon": { "HP": 40, "ATK": 7, "SPD": 6, "DEF": 4 },
  "Koromon": { "HP": 90, "ATK": 9, "SPD": 6, "DEF": 6 },
  "Pickmon": { "HP": 70, "ATK": 10, "SPD": 8, "DEF": 5 },
  "Agumon": { "HP": 250, "ATK": 50, "SPD": 50, "DEF": 25 },
  "Agumon 06": { "HP": 250, "ATK": 55, "SPD": 55, "DEF": 25 },
  "Black Agumon": { "HP": 300, "ATK": 55, "SPD": 40, "DEF": 25 },
  "Gottsumon": { "HP": 400, "ATK": 35, "SPD": 35, "DEF": 40 },
  "Kokuwamon": { "HP": 450, "ATK": 30, "SPD": 30, "DEF": 45 },
  "Pillomon": { "HP": 500, "ATK": 25, "SPD": 20, "DEF": 55 },
  "Starmons": { "HP": 300, "ATK": 40, "SPD": 60, "DEF": 20 },
  "Yuki Agumon": { "HP": 350, "ATK": 40, "SPD": 45, "DEF": 30 },
  "Clockmon": { "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "DarkTyrannomon": { "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "Deltamon": { "HP": 900, "ATK": 115, "SPD": 55, "DEF": 40 },
  "GeoGreymon": { "HP": 1000, "ATK": 110, "SPD": 70, "DEF": 60 },
  "Geremon": { "HP": 750, "ATK": 50, "SPD": 45, "DEF": 40 },
  "GoldGuardromon": { "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 120 },
  "GoldNumemon": { "HP": 750, "ATK": 50, "SPD": 45, "DEF": 50 },
  "Greymon": { "HP": 1000, "ATK": 100, "SPD": 65, "DEF": 60 },
  "Guardromon": { "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 110 },
  "Numemon": { "HP": 750, "ATK": 45, "SPD": 40, "DEF": 40 },
  "ShellNumemon": { "HP": 800, "ATK": 50, "SPD": 30, "DEF": 70 },
  "Thunderballmon": { "HP": 900, "ATK": 85, "SPD": 75, "DEF": 50 },
  "Tuskmon": { "HP": 1250, "ATK": 105, "SPD": 40, "DEF": 55 },
  "Tyrannomon": { "HP": 1150, "ATK": 65, "SPD": 50, "DEF": 70 },
  "Vdramon": { "HP": 1050, "ATK": 100, "SPD": 90, "DEF": 55 },
  "VDramon Black": { "HP": 1050, "ATK": 105, "SPD": 75, "DEF": 65 },
  "VDramon Red": { "HP": 950, "ATK": 110, "SPD": 100, "DEF": 45 },
  "YukiDarumon": { "HP": 1150, "ATK": 80, "SPD": 50, "DEF": 80 },
  "AeroVdramon": { "HP": 2250, "ATK": 215, "SPD": 150, "DEF": 110 },
  "Andromon": { "HP": 2250, "ATK": 100, "SPD": 50, "DEF": 225 },
  "Big Mamemon": { "HP": 2800, "ATK": 165, "SPD": 70, "DEF": 95 },
  "Black King Numemon": { "HP": 2400, "ATK": 85, "SPD": 75, "DEF": 200 },
  "BlackAeroVdramon": { "HP": 2050, "ATK": 235, "SPD": 150, "DEF": 110 },
  "Gigadramon": { "HP": 1800, "ATK": 220, "SPD": 140, "DEF": 80 },
  "GigaWaruMonzaemon": { "HP": 2000, "ATK": 255, "SPD": 165, "DEF": 130 },
  "Mamemon": { "HP": 2000, "ATK": 185, "SPD": 140, "DEF": 75 },
  "MameTyramon": { "HP": 2200, "ATK": 180, "SPD": 135, "DEF": 85 },
  "Master Tyranomon": { "HP": 2100, "ATK": 190, "SPD": 95, "DEF": 180 },
  "Megadramon": { "HP": 1750, "ATK": 210, "SPD": 135, "DEF": 80 },
  "MetalGreymon": { "HP": 2000, "ATK": 225, "SPD": 130, "DEF": 120 },
  "MetalGreymon Alter": { "HP": 2050, "ATK": 235, "SPD": 135, "DEF": 125 },
  "MetalGreymon Virus": { "HP": 1900, "ATK": 220, "SPD": 130, "DEF": 110 },
  "MetalMamemon": { "HP": 2000, "ATK": 190, "SPD": 140, "DEF": 120 },
  "MetalTyrannomon": { "HP": 2150, "ATK": 175, "SPD": 85, "DEF": 125 },
  "Monzaemon": { "HP": 2300, "ATK": 235, "SPD": 135, "DEF": 150 },
  "Polar Bearmon": { "HP": 2300, "ATK": 110, "SPD": 100, "DEF": 210 },
  "RizeGreymon": { "HP": 1950, "ATK": 230, "SPD": 140, "DEF": 110 },
  "Triceramon": { "HP": 2100, "ATK": 125, "SPD": 75, "DEF": 190 },
  "WaruMonzaemon": { "HP": 2150, "ATK": 245, "SPD": 145, "DEF": 145 },
  "Icemon": {"HP": 1000, "ATK": 60, "SPD": 50, "DEF": 90},
  "ShootingStarmon": {"HP": 900, "ATK": 120, "SPD": 75, "DEF": 40},
  "Starmon": {"HP": 1100, "ATK": 70, "SPD": 70, "DEF": 50},
  "DarkSuperStarmon": {"HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "SuperStarmon": {"HP": 1900, "ATK": 160, "SPD": 160, "DEF": 90},
  "InsekimonHigh": {"HP": 2000, "ATK": 160, "SPD": 140, "DEF": 200},
  "InsekimonLow": {"HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "InsekimonSuper": {"HP": 1900, "ATK": 160, "SPD": 160, "DEF": 140},
  "InsekimonDark": {"HP": 2000, "ATK": 150, "SPD": 90, "DEF": 210},
  "Daipenmon": {"HP": 1200, "ATK": 160, "SPD": 110, "DEF": 160},
  "MetalEtemon": {"HP": 1300, "ATK": 179, "SPD": 76, "DEF": 163},
  "PlatinumNumemon": {"HP": 2000, "ATK": 100, "SPD": 60, "DEF": 190},
  "Machinedramon": {"HP": 1700, "ATK": 170, "SPD": 70, "DEF": 140},
  "Blizzardmon": {"HP": 2100, "ATK": 160, "SPD": 120, "DEF": 160},
  "Etemon": {"HP": 2000, "ATK": 239, "SPD": 157, "DEF": 152},
  "Chackmon": {"Type": "Free", "HP": 950, "ATK": 80, "SPD": 70, "DEF": 80}
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
  "Gotsumon",
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

baby1.addEventListener('change', calcBaseStat(baby1.value,baby1.value,"Baby1"));
baby2.addEventListener('change', calcBaseStat(baby2.value,baby1.value,"Baby2"));
child.addEventListener('change', calcBaseStat(child.value,baby2.value,"Child"));
adult.addEventListener('change', calcBaseStat(adult.value,child.value,"Adult"));
perf.addEventListener('change', calcBaseStat(perf.value,adult.value,"Perfect"));
perf.addEventListener('change', calcBaseStat(ult.value,perf.value,"Ultimate"));