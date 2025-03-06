const digimonDict = {
  "Botamon": { "DEF": 6, "SPD": 4, "ATK": 6, "HP": 50 },
  "Koromon": { "DEF": 6, "SPD": 6, "ATK": 9, "HP": 90 },
  "Agumon": { "DEF": 25, "SPD": 50, "ATK": 50, "HP": 250 },
  "Agumon 06": { "DEF": 25, "SPD": 55, "ATK": 55, "HP": 250 },
  "Black Agumon": { "DEF": 25, "SPD": 40, "ATK": 55, "HP": 300 },
  "Kokuwamon": { "DEF": 45, "SPD": 30, "ATK": 30, "HP": 450 },
  "Pillomon": { "DEF": 55, "SPD": 20, "ATK": 25, "HP": 500 },
  "Yuki Agumon": { "DEF": 30, "SPD": 45, "ATK": 40, "HP": 350 },
  "Clockmon": { "DEF": 50, "SPD": 65, "ATK": 80, "HP": 1050 },
  "DarkTyrannomon": { "DEF": 50, "SPD": 65, "ATK": 80, "HP": 1050 },
  "Deltamon": { "DEF": 40, "SPD": 55, "ATK": 115, "HP": 900 },
  "GeoGreymon": { "DEF": 60, "SPD": 70, "ATK": 110, "HP": 1000 },
  "Geremon": { "DEF": 40, "SPD": 45, "ATK": 50, "HP": 750 },
  "GoldGuardromon": { "DEF": 120, "SPD": 30, "ATK": 50, "HP": 1100 },
  "GoldNumemon": { "DEF": 50, "SPD": 45, "ATK": 50, "HP": 750 },
  "Greymon": { "DEF": 60, "SPD": 65, "ATK": 100, "HP": 1000 },
  "Guardromon": { "DEF": 110, "SPD": 30, "ATK": 50, "HP": 1100 },
  "Numemon": { "DEF": 40, "SPD": 40, "ATK": 45, "HP": 750 },
  "ShellNumemon": { "DEF": 70, "SPD": 30, "ATK": 50, "HP": 800 },
  "Thunderballmon": { "DEF": 50, "SPD": 75, "ATK": 85, "HP": 900 },
  "Tuskmon": { "DEF": 55, "SPD": 40, "ATK": 105, "HP": 1250 },
  "Tyrannomon": { "DEF": 70, "SPD": 50, "ATK": 65, "HP": 1150 },
  "Vdramon": { "DEF": 55, "SPD": 90, "ATK": 100, "HP": 1050 },
  "VDramon Black": { "DEF": 65, "SPD": 75, "ATK": 105, "HP": 1050 },
  "VDramon Red": { "DEF": 40, "SPD": 100, "ATK": 110, "HP": 950 },
  "YukiDarumon": { "DEF": 80, "SPD": 50, "ATK": 80, "HP": 1150 },
  "AeroVdramon": { "DEF": 110, "SPD": 150, "ATK": 215, "HP": 2250 },
  "Andromon": { "DEF": 225, "SPD": 50, "ATK": 100, "HP": 2250 },
  "Big Mamemon": { "DEF": 95, "SPD": 70, "ATK": 165, "HP": 2800 },
  "Black King Numemon": { "DEF": 225, "SPD": 75, "ATK": 85, "HP": 2400 },
  "BlackAeroVdramon": { "DEF": 110, "SPD": 150, "ATK": 235, "HP": 2050 },
  "Gigadramon": { "DEF": 80, "SPD": 140, "ATK": 220, "HP": 1800 },
  "GigaWaruMonzaemon": { "DEF": 130, "SPD": 165, "ATK": 255, "HP": 2000 },
  "Mamemon": { "DEF": 75, "SPD": 140, "ATK": 185, "HP": 2000 },
  "MameTyramon": { "DEF": 85, "SPD": 135, "ATK": 180, "HP": 2200 },
  "Master Tyranomon": {"DEF": 170, "SPD": 90, "ATK": 180, "HP": 2100},
  "Megadramon": { "DEF": 80, "SPD": 135, "ATK": 210, "HP": 1750 },
  "MetalGreymon": { "DEF": 120, "SPD": 130, "ATK": 225, "HP": 2000 },
  "MetalGreymon Alter": { "DEF": 125, "SPD": 135, "ATK": 235, "HP": 2050 },
  "MetalGreymon Virus": { "DEF": 110, "SPD": 130, "ATK": 220, "HP": 1900 },
  "MetalMamemon": { "DEF": 90, "SPD": 140, "ATK": 190, "HP": 2000 },
  "MetalTyrannomon": { "DEF": 125, "SPD": 85, "ATK": 175, "HP": 2150 },
  "Monzaemon": { "DEF": 150, "SPD": 135, "ATK": 235, "HP": 2300 },
  "Polar Bearmon": { "DEF": 210, "SPD": 100, "ATK": 110, "HP": 2300 },
  "RizeGreymon": { "DEF": 110, "SPD": 140, "ATK": 230, "HP": 1950 },
  "Triceramon": { "DEF": 190, "SPD": 75, "ATK": 125, "HP": 2100 },
  "WaruMonzaemon": { "DEF": 140, "SPD": 145, "ATK": 245, "HP": 2150 }
};
const baby1List = ["Botamon"];
const baby2List = ["Koromon"];
const childList = [
  "Agumon",
  "Agumon 06",
  "Black Agumon",
  "Kokuwamon",
  "Pillomon",
  "Yuki Agumon"
];
const adultList = [
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
  "VDramon Red"
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
  "WaruMonzaemon"
];
const stats = [
    "DEF",
    "SPD",
    "ATK",
    "HP"
];

const child = document.getElementById('child');
const adult = document.getElementById('adult');
const perf = document.getElementById('perf');

const koroBase = [8,8,11,110];
const childStatList = ['def3','spd3','atk3','hp3'];
const adultStatList = ['def4','spd4','atk4','hp4'];
const perfStatList = ['def5','spd5','atk5','hp5'];

function calcBaseStat(currentDigi,lastDigi,stage) {
    var newStats = [];
    var currentInnate = digimonDict[currentDigi];
    var lastInnate = digimonDict[lastDigi];

    for (let i = 0; i < stats.length; i++) {
        switch(stage) {
            case "Child":
                newStats.push(currentInnate[stats[i]] + koroBase[i] - Math.round(0.6*(lastInnate[stats[i]])));
                document.getElementById(childStatList[i]).textContent = newStats[i];
                break;
            case "Adult":
                childStat = Number(document.getElementById(childStatList[i]).innerText);
                newStats.push(currentInnate[stats[i]] + childStat - Math.round(0.6*(lastInnate[stats[i]])));
                document.getElementById(adultStatList[i]).textContent = newStats[i];
                break;
            case "Perfect":
                adultStat = Number(document.getElementById(adultStatList[i]).innerText);
                newStats.push(currentInnate[stats[i]] + adultStat - Math.round(0.6*(lastInnate[stats[i]])));
                document.getElementById(perfStatList[i]).textContent = newStats[i];
          }
    }
}

calcBaseStat("Agumon","Koromon","Child");
calcBaseStat("Greymon","Agumon","Adult");
calcBaseStat("MetalGreymon Virus","Greymon","Perfect");

child.addEventListener('change', calcBaseStat(child.value,"Koromon","Child"));
adult.addEventListener('change', calcBaseStat(adult.value,child.value,"Adult"));
perf.addEventListener('change', calcBaseStat(perf.value,adult.value,"Perfect"));