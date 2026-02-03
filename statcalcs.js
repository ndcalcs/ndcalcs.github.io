const digimonDict = {
  "Botamon": { "Digitama": "V0", "HP": 50, "ATK": 6, "SPD": 4, "DEF": 6 },
  "Chibickmon": { "Digitama": "V0", "HP": 40, "ATK": 7, "SPD": 6, "DEF": 4 },
  "Koromon": { "Digitama": "V0", "HP": 90, "ATK": 9, "SPD": 6, "DEF": 6 },
  "Pickmon": { "Digitama": "V0", "HP": 70, "ATK": 10, "SPD": 8, "DEF": 5 },
  "Agumon": { "Digitama": "V0", "HP": 250, "ATK": 50, "SPD": 50, "DEF": 25 },
  "Agumon 06": { "Digitama": "V0", "HP": 250, "ATK": 55, "SPD": 55, "DEF": 25 },
  "Black Agumon": { "Digitama": "V0", "HP": 300, "ATK": 55, "SPD": 40, "DEF": 25 },
  "Gottsumon": { "Digitama": "VS", "HP": 400, "ATK": 35, "SPD": 35, "DEF": 40 },
  "Kokuwamon": {"Digitama": "V0", "HP": 450, "ATK": 40, "SPD": 25, "DEF": 40},
  "Pillomon": { "Digitama": "V0", "HP": 500, "ATK": 25, "SPD": 20, "DEF": 55 },
  "Starmons": { "Digitama": "VS", "HP": 300, "ATK": 40, "SPD": 60, "DEF": 20 },
  "Yuki Agumon": { "Digitama": "V0", "HP": 350, "ATK": 40, "SPD": 45, "DEF": 30 },
  "Clockmon": { "Digitama": "V0", "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "DarkTyrannomon": { "Digitama": "V0", "HP": 1050, "ATK": 80, "SPD": 65, "DEF": 50 },
  "Deltamon": { "Digitama": "V0", "HP": 900, "ATK": 115, "SPD": 55, "DEF": 40 },
  "GeoGreymon": { "Digitama": "V0", "HP": 1000, "ATK": 110, "SPD": 70, "DEF": 60 },
  "Geremon": { "Digitama": "M", "HP": 750, "ATK": 50, "SPD": 45, "DEF": 40 },
  "GoldGuardromon": { "Digitama": "V0", "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 120 },
  "GoldNumemon": { "Digitama": "M", "HP": 750, "ATK": 50, "SPD": 45, "DEF": 50 },
  "Greymon": { "Digitama": "V0", "HP": 1000, "ATK": 100, "SPD": 65, "DEF": 60 },
  "Guardromon": { "Digitama": "V0", "HP": 1100, "ATK": 50, "SPD": 30, "DEF": 110 },
  "Numemon": { "Digitama": "M", "HP": 750, "ATK": 45, "SPD": 40, "DEF": 40 },
  "ShellNumemon": { "Digitama": "M", "HP": 800, "ATK": 50, "SPD": 30, "DEF": 70 },
  "Thunderballmon": { "Digitama": "V0", "HP": 900, "ATK": 85, "SPD": 75, "DEF": 50 },
  "Tuskmon": { "Digitama": "V0", "HP": 1250, "ATK": 105, "SPD": 40, "DEF": 55 },
  "Tyrannomon": { "Digitama": "V0", "HP": 1150, "ATK": 65, "SPD": 50, "DEF": 70 },
  "Vdramon": { "Digitama": "V0", "HP": 1050, "ATK": 100, "SPD": 90, "DEF": 55 },
  "VDramon Black": { "Digitama": "V0", "HP": 1050, "ATK": 105, "SPD": 75, "DEF": 65 },
  "VDramon Red": { "Digitama": "V0", "HP": 950, "ATK": 110, "SPD": 100, "DEF": 45 },
  "YukiDarumon": { "Digitama": "V0", "HP": 1150, "ATK": 80, "SPD": 50, "DEF": 80 },
  "AeroVdramon": { "Digitama": "V0", "HP": 2250, "ATK": 215, "SPD": 150, "DEF": 110 },
  "Andromon": { "Digitama": "V0", "HP": 2250, "ATK": 100, "SPD": 50, "DEF": 225 },
  "Big Mamemon": { "Digitama": "V0", "HP": 2800, "ATK": 165, "SPD": 70, "DEF": 95 },
  "Black King Numemon": { "Digitama": "M", "HP": 2400, "ATK": 85, "SPD": 75, "DEF": 200 },
  "BlackAeroVdramon": { "Digitama": "V0", "HP": 2050, "ATK": 235, "SPD": 150, "DEF": 110 },
  "Gigadramon": { "Digitama": "V0", "HP": 1800, "ATK": 220, "SPD": 140, "DEF": 110 },
  "GigaWaruMonzaemon": { "Digitama": "M", "HP": 2000, "ATK": 255, "SPD": 165, "DEF": 130 },
  "Mamemon": { "Digitama": "V0", "HP": 2000, "ATK": 185, "SPD": 140, "DEF": 75 },
  "MameTyramon": { "Digitama": "V0", "HP": 2200, "ATK": 180, "SPD": 135, "DEF": 85 },
  "Master Tyranomon": { "Digitama": "V0", "HP": 2100, "ATK": 190, "SPD": 95, "DEF": 180 },
  "Megadramon": { "Digitama": "V0", "HP": 1750, "ATK": 210, "SPD": 135, "DEF": 80 },
  "MetalGreymon": { "Digitama": "V0", "HP": 2000, "ATK": 225, "SPD": 130, "DEF": 120 },
  "MetalGreymon Alter": { "Digitama": "V0", "HP": 2050, "ATK": 235, "SPD": 135, "DEF": 125 },
  "MetalGreymon Virus": { "Digitama": "V0", "HP": 1900, "ATK": 220, "SPD": 130, "DEF": 110 },
  "MetalMamemon": { "Digitama": "V0", "HP": 2000, "ATK": 190, "SPD": 140, "DEF": 120 },
  "MetalTyrannomon": { "Digitama": "V0", "HP": 2150, "ATK": 175, "SPD": 85, "DEF": 125 },
  "Monzaemon": { "Digitama": "M", "HP": 2300, "ATK": 235, "SPD": 135, "DEF": 150 },
  "Polar Bearmon": { "Digitama": "V0", "HP": 2300, "ATK": 110, "SPD": 100, "DEF": 210 },
  "RizeGreymon": { "Digitama": "V0", "HP": 1950, "ATK": 230, "SPD": 140, "DEF": 110 },
  "Triceramon": { "Digitama": "V0", "HP": 2100, "ATK": 125, "SPD": 75, "DEF": 190 },
  "WaruMonzaemon": { "Digitama": "M", "HP": 2150, "ATK": 245, "SPD": 145, "DEF": 145 },
  "Icemon": {"Digitama": "VS", "HP": 1000, "ATK": 60, "SPD": 50, "DEF": 90},
  "ShootingStarmon": {"Digitama": "VS", "HP": 900, "ATK": 120, "SPD": 75, "DEF": 40},
  "Starmon": {"Digitama": "VS", "HP": 1100, "ATK": 70, "SPD": 70, "DEF": 50},
  "DarkSuperStarmon": {"Digitama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "SuperStarmon": {"Digitama": "VS", "HP": 1900, "ATK": 160, "SPD": 160, "DEF": 90},
  "InsekimonHigh": {"Digitama": "VS", "HP": 2000, "ATK": 160, "SPD": 140, "DEF": 200},
  "InsekimonLow": {"Digitama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 160},
  "InsekimonSuper": {"Digitama": "VS", "HP": 1900, "ATK": 160, "SPD": 160, "DEF": 140},
  "InsekimonDark": {"Digitama": "VS", "HP": 2000, "ATK": 150, "SPD": 90, "DEF": 210},
  "Daipenmon": {"Digitama": "SP", "HP": 1200, "ATK": 160, "SPD": 110, "DEF": 160},
  "MetalEtemon": {"Digitama": "M", "HP": 1300, "ATK": 180, "SPD": 90, "DEF": 150},
  "PlatinumNumemon": {"Digitama": "M", "HP": 2000, "ATK": 100, "SPD": 60, "DEF": 190},
  "Machinedramon": {"Digitama": "V0", "HP": 1700, "ATK": 170, "SPD": 70, "DEF": 140},
  "Blizzardmon": {"Digitama": "SP", "HP": 2100, "ATK": 160, "SPD": 120, "DEF": 160},
  "Etemon": {"Digitama": "M", "HP": 2000, "ATK": 240, "SPD": 125, "DEF": 185},
  "Chackmon": {"Digitama": "SP", "Type": "Free", "HP": 950, "ATK": 80, "SPD": 70, "DEF": 80},
  "Scumon": {"Digitama": "M", "Type": "Virus", "HP": 0, "ATK": 0, "SPD": 0, "DEF": 0},
  "KingScumon": {"Digitama": "M", "Type": "Virus", "HP": 0, "ATK": 0, "SPD": 0, "DEF": 0},
  "Bakemon": {"Digitama": "D", "HP": 600, "ATK": 40, "SPD": 60, "DEF": 40},
  "Bakemon+": {"Digitama": "D", "HP": 700, "ATK": 50, "SPD": 70, "DEF": 50},
  "Soulmon": {"Digitama": "D", "HP": 600, "ATK": 50, "SPD": 70, "DEF": 40},
  "Soulmon+":{"Digitama": "D", "HP": 700, "ATK": 60, "SPD": 80, "DEF": 50},
  "SkullGreymon": {"Digitama": "D", "HP": 1600, "ATK": 270, "SPD": 70, "DEF": 100},
  "Fantomon": {"Digitama": "D", "HP": 2200, "ATK": 250, "SPD": 180, "DEF": 100},
  "Metal Fantomon": {"Digitama": "D", "HP": 2200, "ATK": 240, "SPD": 150, "DEF": 140},
  "Ghostmon": {"Digitama": "D", "HP": 250, "ATK": 45, "SPD": 65, "DEF": 25},
  "Mushmon": {"Digitama": "M", "HP": 550, "ATK": 30, "SPD": 40, "DEF": 25},
  "PrinceMamemon": {"Digitama": "V0", "HP": 750, "ATK": 150, "SPD": 120, "DEF": 205},
  "DeviDigitamamon": {"Digitama": "M", "HP": 2200, "ATK": 150, "SPD": 60, "DEF": 120},
  "Chamblemon": {"Digitama": "P", "HP": 1300, "ATK": 50, "SPD": 70, "DEF": 50},
  "Nanimon": {"Digitama": "M", "HP": 650, "ATK": 50, "SPD": 55, "DEF": 30},
  "BomberNanimon": {"Digitama": "M", "HP": 400, "ATK": 70, "SPD": 80, "DEF": 10},
  "DigiDigitamamon": {"Digitama": "M", "HP": 2700, "ATK": 210, "SPD": 100, "DEF": 170},
  "Agumon-Hakase": {"Digitama": "V0", "HP": 350, "ATK": 45, "SPD": 35, "DEF": 35},
  "Yolkmon": {"Digitama": "VL", "HP": 40, "ATK": 3, "SPD": 13, "DEF": 1},
  "Fluffymon": {"Digitama": "VL", "HP": 50, "ATK": 3, "SPD": 21, "DEF": 1},      
  "Pteromon": {"Digitama": "VL", "HP": 200, "ATK": 20, "SPD": 65, "DEF": 20},
  "Galemon": {"Digitama": "VL", "HP": 650, "ATK": 95, "SPD": 100, "DEF": 40},
  "GrandGalemon": {"Digitama": "VL", "HP": 1000, "ATK": 240, "SPD": 200, "DEF": 110},
  "Dodomon": {"Digitama": "AP", "HP": 60, "ATK": 7, "SPD": 4, "DEF": 4},
  "Dorimon": {"Digitama": "AP", "HP": 100, "ATK": 10, "SPD": 5, "DEF": 5},
  "DORUmon": {"Digitama": "AP", "HP": 400, "ATK": 55, "SPD": 25, "DEF": 35},
  "DORUgamon": {"Digitama": "AP", "HP": 1250, "ATK": 80, "SPD": 55, "DEF": 65},
  "DORUguremon":   {"Digitama": "AP", "HP": 2350, "ATK": 190, "SPD": 90, "DEF": 135},
  "Wargreymon-Black":   {"Digitama": "DT", "HP": 1900, "ATK": 175, "SPD": 85, "DEF": 100},
  "Death-X-DORUgamon": {"Digitama": "DT", "HP": 900, "ATK": 100, "SPD": 60, "DEF": 50},
  "Death-X-DORUguremon": {"Digitama": "DT", "HP": 1500, "ATK": 250, "SPD": 100, "DEF": 100},
  "Wargreymon": {"Digitama": "V0", "HP": 1800, "ATK": 160, "SPD": 110, "DEF": 100},
  "KingShoutmon": {"Digitama": "ST", "HP": 900, "ATK": 95, "SPD": 80, "DEF": 60},
  "OmegaShoutmon": {"Digitama": "ST", "HP": 1800, "ATK": 220, "SPD": 160, "DEF": 140},
  "Shoutmon": {"Digitama": "ST", "HP": 300, "ATK": 45, "SPD": 40, "DEF": 25},
  "Shoutmon B": {"Digitama": "ST", "HP": 300, "ATK": 40, "SPD": 45, "DEF": 25},
  "Shoutmon SW": {"Digitama": "ST", "HP": 300, "ATK": 65, "SPD": 40, "DEF": 25},
  "Shoutmon SH": {"Digitama": "ST", "HP": 300, "ATK": 45, "SPD": 60, "DEF": 25},
  "Raptordramon": {"Digitama": "AP", "HP": 1300, "ATK": 90, "SPD": 60, "DEF": 70},
  "Grademon": {"Digitama": "AP", "HP": 2300, "ATK": 210, "SPD": 130, "DEF": 130},
  "Grademon(Vice)": {"Digitama": "AP", "HP": 2000, "ATK": 245, "SPD": 130, "DEF": 125}
};

const baby1List = [
  "Botamon",
  "Chibickmon",
  "Yolkmon",
  "Dodomon"
];
const baby2List = [
  "Koromon",
  "Pickmon",
  "Fluffymon",
  "Dorimon"
];
const childList = [
  "Agumon",
  "Agumon 06",
  "Black Agumon",
  "Ghostmon",
  "Gottsumon",
  "Kokuwamon",
  "Mushmon",
  "Pillomon",
  "Starmons",
  "Yuki Agumon",
  "Agumon-Hakase",
  "Pteromon",
  "DORUmon",
  "Shoutmon",
  "Shoutmon B",
  "Shoutmon SW",
  "Shoutmon SH"
];
const adultList = [
  "Bakemon",
  "Bakemon+",
  "Chackmon",
  "Clockmon",
  "DarkTyrannomon",
  "Deltamon",
  "GeoGreymon",
  "Geremon",
  "GoldGuardromon",
  "GoldNumemon",
  "Greymon",
  "Guardromon",
  "Icemon",
  "Numemon",
  "Scumon",
  "ShellNumemon",
  "ShootingStarmon",
  "Soulmon",
  "Soulmon+",
  "Starmon",
  "Thunderballmon",
  "Tuskmon",
  "Tyrannomon",
  "Vdramon",
  "VDramon Black",
  "VDramon Red",
  "YukiDarumon",
  "Chamblemon",
  "Nanimon",
  "BomberNanimon",
  "Galemon",
  "DORUgamon",
  "Death-X-DORUgamon",
  "KingShoutmon",
  "Raptordramon"
];
const perfList = [
  "AeroVdramon",
  "Andromon",
  "Big Mamemon",
  "Black King Numemon",
  "BlackAeroVdramon",
  "Blizzardmon",
  "DarkSuperStarmon",
  "Etemon",
  "Fantomon",
  "Gigadramon",
  "GigaWaruMonzaemon",
  "InsekimonDark",
  "InsekimonHigh",
  "InsekimonLow",
  "InsekimonSuper",
  "KingScumon",
  "Mamemon",
  "MameTyramon",
  "Master Tyranomon",
  "Megadramon",
  "Metal Fantomon",
  "MetalGreymon",
  "MetalGreymon Alter",
  "MetalGreymon Virus",
  "MetalMamemon",
  "MetalTyrannomon",
  "Monzaemon",
  "Polar Bearmon",
  "RizeGreymon",
  "SkullGreymon",
  "SuperStarmon",
  "Triceramon",
  "WaruMonzaemon",
  "DigiDigitamamon",
  "GrandGalemon",
  "DORUguremon",
  "Death-X-DORUguremon",
  "OmegaShoutmon",
  "Grademon",
  "Grademon(Vice)"
];
const ultList = [
  "Daipenmon",
  "Machinedramon",
  "MetalEtemon",
  "PlatinumNumemon",
  "DeviDigitamamon",
  "PrinceMamemon",
  "Wargreymon",
  "Wargreymon-Black"
];

const stats = ["HP", "ATK", "SPD", "DEF"];

// Define the structure for each stage's element IDs and data list
const stageInfo = {
    'Baby1':   { statList: ['hp1', 'atk1', 'spd1', 'def1'] },
    'Baby2':   { statList: ['hp2', 'atk2', 'spd2', 'def2'] },
    'Child':   { statList: ['hp3', 'atk3', 'spd3', 'def3'] },
    'Adult':   { statList: ['hp4', 'atk4', 'spd4', 'def4'] },
    'Perfect': { statList: ['hp5', 'atk5', 'spd5', 'def5'] },
    'Ultimate':{ statList: ['hp6', 'atk6', 'spd6', 'def6'] }
};
const sumList = ['sum1','sum2','sum3','sum4','sum5','sum6'];


/**
 * Calculates the base stats of a Digimon after evolution for a specific calculator instance.
 * @param {string} currentDigi - The name of the current Digimon.
 * @param {string} lastDigi - The name of the previous Digimon.
 * @param {string} stage - The current evolutionary stage (e.g., "Baby1", "Child").
 * @param {string} suffix - The suffix for the element IDs (e.g., '-1', '-2').
 */
function calcBaseStat(currentDigi, lastDigi, stage, suffix) {
    let newStats = [];
    const currentInnate = digimonDict[currentDigi];
    const lastInnate = digimonDict[lastDigi];
    const targetStatIds = stageInfo[stage].statList;

    if (!currentInnate || !lastInnate) {
        console.error("Digimon data not found for:", currentDigi, "or", lastDigi);
        return;
    }

    for (let i = 0; i < stats.length; i++) {
        let prevStageStat = 0;
        switch(stage) {
            case "Baby1":
                // Baby1's base stats are its innate stats
                newStats.push(currentInnate[stats[i]]);
                break;
            case "Baby2":
                prevStageStat = Number(document.getElementById(stageInfo['Baby1'].statList[i] + suffix).innerText);
                newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * (lastInnate[stats[i]])));
                break;
            case "Child":
                prevStageStat = Number(document.getElementById(stageInfo['Baby2'].statList[i] + suffix).innerText);
                newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * (lastInnate[stats[i]])));
                break;
            case "Adult":
                prevStageStat = Number(document.getElementById(stageInfo['Child'].statList[i] + suffix).innerText);
                if (currentDigi === "Scumon") {
                    newStats.push(prevStageStat + Math.round(lastInnate[stats[i]] * 0.74));
                } else {
                    newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * (lastInnate[stats[i]])));
                }
                break;
            case "Perfect":
                prevStageStat = Number(document.getElementById(stageInfo['Adult'].statList[i] + suffix).innerText);
                if (lastDigi === "Scumon" && currentDigi === "KingScumon") {
                    let currentInnateStat = Math.round(digimonDict[document.getElementById("Child"+suffix).value][stats[i]]*1.34*2.25);
                    let lastInnateStat = Math.round(digimonDict[document.getElementById("Child"+suffix).value][stats[i]]*1.34);
                    newStats.push(currentInnateStat + prevStageStat - Math.round(0.6 * lastInnateStat));
                } else if (lastDigi === "Scumon" && currentDigi === "Etemon") {
                    let lastInnateStat = Math.round(digimonDict[document.getElementById("Child"+suffix).value][stats[i]]*1.34);
                    newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * lastInnateStat));
                } else {
                    newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * (lastInnate[stats[i]])));
                }
                break;
            case "Ultimate":
                prevStageStat = Number(document.getElementById(stageInfo['Perfect'].statList[i] + suffix).innerText);
                if (lastDigi === "KingScumon") {
                    newStats.push(0);
                } else {
                    newStats.push(currentInnate[stats[i]] + prevStageStat - Math.round(0.6 * (lastInnate[stats[i]])));
                }
                break;
        }
        if (newStats[i] !== undefined) {
            document.getElementById(targetStatIds[i] + suffix).textContent = newStats[i];
        }
    }
    updateSums();
}

/**
 * Updates the SUM column for a specific calculator instance.
 * @param {string} suffix - The suffix for the element IDs.
 */
function updateSums(suffix) {
    const allStatLists = Object.values(stageInfo).map(s => s.statList);
    for (let j = 0; j < sumList.length; j++) {
        let currentSum = 0;
        for (let i = 0; i < stats.length; i++) {
            const statElement = document.getElementById(allStatLists[j][i] + suffix);
            if (statElement) {
                let currentStat = Number(statElement.textContent);
                currentSum += (stats[i] === "HP") ? (currentStat / 10) : currentStat;
            }
        }
        const sumElement = document.getElementById(sumList[j] + suffix);
        if (sumElement) {
            sumElement.textContent = currentSum;
        }
    }
}

/**
 * Populates dropdowns for a specific calculator instance.
 * @param {string} suffix - The suffix for the element IDs.
 */
function populateDropdowns(suffix) {
  const stages = [
    { id: 'Baby1', list: baby1List.sort() }, { id: 'Baby2', list: baby2List.sort() },
    { id: 'Child', list: childList.sort() }, { id: 'Adult', list: adultList.sort() },
    { id: 'Perfect', list: perfList.sort() }, { id: 'Ultimate', list: ultList.sort() }
  ];

  stages.forEach(stage => {
    const selectElement = document.getElementById(stage.id + suffix);
    if (selectElement) {
        selectElement.innerHTML = '';
        stage.list.forEach(digimonName => {
            const option = document.createElement('option');
            option.value = digimonName;
            option.textContent = digimonName;
            selectElement.appendChild(option);
        });
    }
  });
}

/**
 * Recalculates all stats for a specific calculator instance.
 * @param {string} suffix - The suffix for the element IDs.
 */
function recalculateAll(suffix) {
    var baby1 = document.getElementById('Baby1' + suffix).value;
    var baby2 = document.getElementById('Baby2' + suffix).value;
    var child = document.getElementById('Child' + suffix).value;
    var adult = document.getElementById('Adult' + suffix).value;
    var perf = document.getElementById('Perfect' + suffix).value;
    var ult = document.getElementById('Ultimate' + suffix).value;

    calcBaseStat(baby1, baby1, "Baby1", suffix);
    calcBaseStat(baby2, baby1, "Baby2", suffix);
    calcBaseStat(child, baby2, "Child", suffix);
    calcBaseStat(adult, child, "Adult", suffix);
    calcBaseStat(perf, adult, "Perfect", suffix);
    calcBaseStat(ult, perf, "Ultimate", suffix);
    updateSums(suffix);
}

function setAll(suffix) {
    calcBaseStat("Botamon", "Botamon", "Baby1", suffix);
    calcBaseStat("Koromon", "Botamon", "Baby2", suffix);
    calcBaseStat("Agumon", "Koromon", "Child", suffix);
    calcBaseStat("Greymon", "Agumon", "Adult", suffix);
    calcBaseStat("MetalGreymon Virus", "Greymon", "Perfect", suffix);
    calcBaseStat("Machinedramon", "MetalGreymon Virus", "Ultimate", suffix);
    updateSums(suffix);
}

/**
 * Creates and populates the innate stat tables for each evolutionary stage.
 * This function is independent of the main calculators and only needs to run once.
 */
function populateInnateStatTables() {
    const stages = [
        { title: 'Ultimate Innate Stats', list: ultList, targetId: 'Ultimate-Innate-Stats' },
        { title: 'Perfect Innate Stats', list: perfList, targetId: 'Perfect-Innate-Stats' },
        { title: 'Adult Innate Stats', list: adultList, targetId: 'Adult-Innate-Stats' },
        { title: 'Child Innate Stats', list: childList, targetId: 'Child-Innate-Stats' },
        { title: 'Baby II Innate Stats', list: baby2List, targetId: 'Baby-II-Innate-Stats' },
        { title: 'Baby I Innate Stats', list: baby1List, targetId: 'Baby-I-Innate-Stats' }
    ];

    stages.forEach(stage => {
        const targetElement = document.getElementById(stage.targetId);
        if (targetElement) {
            sortInnateTable(stage.list, 'name', stage.targetId);
        }
    });
}

/**
 * Sorts and rebuilds an innate stat table.
 * @param {Array<string>} digimonList - List of Digimon names for the stage.
 * @param {string} sortKey - The key to sort by (e.g., 'HP', 'ATK', 'SUM').
 * @param {string} targetElementId - The ID of the HTML element to update.
 */
function sortInnateTable(digimonList, sortKey, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;

    const sortedList = [...digimonList].sort((a, b) => {
        const statsA = digimonDict[a];
        const statsB = digimonDict[b];
        if (sortKey === 'name') return a.localeCompare(b);
        const valueA = (sortKey === 'SUM') ? Math.round(statsA.HP / 10) + statsA.ATK + statsA.SPD + statsA.DEF : statsA[sortKey];
        const valueB = (sortKey === 'SUM') ? Math.round(statsB.HP / 10) + statsB.ATK + statsB.SPD + statsB.DEF : statsB[sortKey];
        return valueB - valueA;
    });

    let tableHTML = `
        <center><h4>${targetElement.id.replace(/-/g, ' ')}</h4>
            <label for="sort-${targetElementId}">Sort by:
            <select id="sort-${targetElementId}">
                <option value="name" ${sortKey === 'name' ? 'selected' : ''}>Name</option>
                <option value="HP" ${sortKey === 'HP' ? 'selected' : ''}>HP</option>
                <option value="ATK" ${sortKey === 'ATK' ? 'selected' : ''}>ATK</option>
                <option value="SPD" ${sortKey === 'SPD' ? 'selected' : ''}>SPD</option>
                <option value="DEF" ${sortKey === 'DEF' ? 'selected' : ''}>DEF</option>
                <option value="SUM" ${sortKey === 'SUM' ? 'selected' : ''}>SUM</option>
            </select></label></center>
        <table>
            <thead><tr><th>Digimon</th><th>HP</th><th>ATK</th><th>SPD</th><th>DEF</th><th>SUM</th></tr></thead>
            <tbody>`;

    sortedList.forEach(digimonName => {
        const digiStats = digimonDict[digimonName];
        if (digiStats) {
            const sum = Math.round(digiStats.HP / 10) + digiStats.ATK + digiStats.SPD + digiStats.DEF;
            tableHTML += `<tr><td>${digimonName}</td><td><center>${digiStats.HP}</center></td><td><center>${digiStats.ATK}</center></td><td><center>${digiStats.SPD}</center></td><td><center>${digiStats.DEF}</center></td><td><center>${sum}</center></td></tr>`;
        }
    });

    tableHTML += `</tbody></table>`;
    targetElement.innerHTML = tableHTML;

    document.getElementById(`sort-${targetElementId}`).addEventListener('change', (event) => {
        sortInnateTable(digimonList, event.target.value, targetElementId);
    });
}

/**
 * Sets up the calculators, creating the second one by cloning the first.
 */
function setupCalculators() {

    // Initialize both calculators
    ['-1', '-2'].forEach(suffix => {
        populateDropdowns(suffix);
        //setAll(suffix);
    });

}

function createTableRowsWithTemplate(suffix) {
  const tableBody = document.getElementById('table' + suffix); // Select the table body
  let rowsHTML = '';
  i = 1;

  Object.keys(stageInfo).forEach(stage => {
    rowsHTML += `
      <tr>
        <td>
          <select id="${stage}${suffix}"></select>
        </td>
        <td><label id="hp${i}${suffix}"></label></td>
        <td><label id="atk${i}${suffix}"></label></td>
        <td><label id="spd${i}${suffix}"></label></td>
        <td><label id="def${i}${suffix}"></label></td>
        <td><label id="sum${i}${suffix}"></label></td>
      </tr>
    `;
    i = i + 1;
    
  });
  // Insert the generated HTML string into the table body
  tableBody.innerHTML += rowsHTML; 

    const stages = [
    { id: 'Baby1' + suffix, list: baby1List },
    { id: 'Baby2' + suffix, list: baby2List },
    { id: 'Child' + suffix, list: childList },
    { id: 'Adult' + suffix, list: adultList },
    { id: 'Perfect' + suffix, list: perfList },
    { id: 'Ultimate' + suffix, list: ultList }
  ];

  stages.forEach(stage => {
    const selectElement = document.getElementById(stage.id + suffix);
    if (selectElement) {
        selectElement.innerHTML = '';
        stage.list.forEach(digimonName => {
            const option = document.createElement('option');
            option.value = digimonName;
            option.textContent = digimonName;
            selectElement.appendChild(option);
        });
    }
  });
}

// --- INITIALIZATION ---
// This runs when the script is loaded.
createTableRowsWithTemplate('-1');
createTableRowsWithTemplate('-2');
// Populate the separate innate stat tables.
populateInnateStatTables();

// Set up the main, cloneable calculators.
setupCalculators();

document.getElementById('table-1').addEventListener('change', (event) => {
    if (event.target.tagName === 'SELECT') {
        recalculateAll('-1');
    }
});

document.getElementById('table-2').addEventListener('change', (event) => {
    if (event.target.tagName === 'SELECT') {
        recalculateAll('-2');
    }
});

recalculateAll('-1');
recalculateAll('-2');
