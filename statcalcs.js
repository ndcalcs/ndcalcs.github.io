const digimonDict = {
  "Botamon": { "HP": 50, "ATK": 6, "SPD": 4, "DEF": 6 },
  "Koromon": { "HP": 90, "ATK": 9, "SPD": 6, "DEF": 6 },
  "Agumon": { "HP": 250, "ATK": 50, "SPD": 50, "DEF": 25 },
  "Agumon 06": { "HP": 250, "ATK": 55, "SPD": 55, "DEF": 25 },
  "Black Agumon": { "HP": 300, "ATK": 55, "SPD": 40, "DEF": 25 },
  "Kokuwamon": { "HP": 450, "ATK": 30, "SPD": 30, "DEF": 45 },
  "Pillomon": { "HP": 500, "ATK": 25, "SPD": 20, "DEF": 55 },
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
  "WaruMonzaemon": { "HP": 2150, "ATK": 245, "SPD": 145, "DEF": 145 }
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
    "HP",
    "ATK",
    "SPD",
    "DEF"
];

const child = document.getElementById('child');
const adult = document.getElementById('adult');
const perf = document.getElementById('perf');

const koroBase = [110,11,8,8];
const childStatList = ['hp3','atk3','spd3','def3'];
const adultStatList = ['hp4','atk4','spd4','def4'];
const perfStatList = ['hp5','atk5','spd5','def5'];

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

child.addEventListener('change', calcBaseStat(child.value,"Koromon","Child"));
adult.addEventListener('change', calcBaseStat(adult.value,child.value,"Adult"));
perf.addEventListener('change', calcBaseStat(perf.value,adult.value,"Perfect"));