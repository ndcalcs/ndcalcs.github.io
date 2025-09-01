// This dictionary stores the innate stats for each Digimon.
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
  "Chackmon": {"Tama": "SP", "Type": "Free", "HP": 950, "ATK": 80, "SPD": 70, "DEF": 80},
  "Scumon": {"Tama": "M", "Type": "Virus", "HP": 0, "ATK": 0, "SPD": 0, "DEF": 0},
  "KingScumon": {"Tama": "M", "Type": "Virus", "HP": 0, "ATK": 0, "SPD": 0, "DEF": 0},
  "Bakemon": {"Tama": "D", "HP": 600, "ATK": 40, "SPD": 60, "DEF": 40},
  "Bakemon+": {"Tama": "D", "HP": 1000, "ATK": 80, "SPD": 90, "DEF": 50},
  "Soulmon": {"Tama": "D", "HP": 600, "ATK": 50, "SPD": 70, "DEF": 40},
  "Soulmon+":{"Tama": "D", "HP": 1000, "ATK": 90, "SPD": 100, "DEF": 50},
  "SkullGreymon": {"Tama": "D", "HP": 1600, "ATK": 270, "SPD": 70, "DEF": 100},
  "Fantomon": {"Tama": "D", "HP": 2200, "ATK": 250, "SPD": 180, "DEF": 100},
  "Metal Fantomon": {"Tama": "D", "HP": 2200, "ATK": 240, "SPD": 150, "DEF": 140},
  "Ghostmon": {"Tama": "D", "HP": 250, "ATK": 45, "SPD": 65, "DEF": 25},
  "Mushmon": {"Tama": "M", "HP": 550, "ATK": 30, "SPD": 40, "DEF": 25}
};

// Lists of Digimon for each evolutionary stage.
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
  "Ghostmon",
  "Gottsumon",
  "Kokuwamon",
  "Mushmon",
  "Pillomon",
  "Starmons",
  "Yuki Agumon"
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
  "YukiDarumon"
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
];
const ultList = [
  "Daipenmon",
  "Machinedramon",
  "MetalEtemon",
  "PlatinumNumemon"
];

// List of stat keys used for iteration.
const stats = [
    "HP",
    "ATK",
    "SPD",
    "DEF"
];

// Get references to the HTML select elements.
const baby1 = document.getElementById('baby1');
const baby2 = document.getElementById('baby2');
const child = document.getElementById('child');
const adult = document.getElementById('adult');
const perf = document.getElementById('perf');
const ult = document.getElementById('ult');

// Arrays of element IDs for each stage's stat labels.
const baby1StatList = ['hp1','atk1','spd1','def1'];
const baby2StatList = ['hp2','atk2','spd2','def2'];
const childStatList = ['hp3','atk3','spd3','def3'];
const adultStatList = ['hp4','atk4','spd4','def4'];
const perfStatList = ['hp5','atk5','spd5','def5'];
const ultStatList = ['hp6','atk6','spd6','def6'];

/**
 * Calculates the base stats of a Digimon after evolution.
 * @param {string} currentDigi - The name of the current Digimon.
 * @param {string} lastDigi - The name of the previous Digimon.
 * @param {string} stage - The current evolutionary stage (e.g., "Baby1", "Child").
 */
function calcBaseStat(currentDigi, lastDigi, stage) {
    let newStats = [];
    const currentInnate = digimonDict[currentDigi];
    const lastInnate = digimonDict[lastDigi];

    // If data for the digimon doesn't exist, exit to prevent errors.
    if (!currentInnate || !lastInnate) {
        console.error("Digimon data not found for:", currentDigi, "or", lastDigi);
        return;
    }

    for (let i = 0; i < stats.length; i++) {
        switch(stage) {
          case "Baby1":
            document.getElementById(baby1StatList[i]).textContent = currentInnate[stats[i]];
            break;
          case "Baby2":
            const baby1Stat = Number(document.getElementById(baby1StatList[i]).innerText);
            newStats.push(currentInnate[stats[i]] + baby1Stat - Math.round(0.6 * (lastInnate[stats[i]])));
            document.getElementById(baby2StatList[i]).textContent = newStats[i];
            break;
          case "Child":
            const baby2Stat = Number(document.getElementById(baby2StatList[i]).innerText);
            newStats.push(currentInnate[stats[i]] + baby2Stat - Math.round(0.6 * (lastInnate[stats[i]])));
            document.getElementById(childStatList[i]).textContent = newStats[i];
            break;
          case "Adult":
            const childStat = Number(document.getElementById(childStatList[i]).innerText);
            // Special case for Scumon evolution
            if (currentDigi === "Scumon") {
              newStats.push(childStat + Math.round(lastInnate[stats[i]] * 0.74));
            } else {
              newStats.push(currentInnate[stats[i]] + childStat - Math.round(0.6 * (lastInnate[stats[i]])));
            }
            document.getElementById(adultStatList[i]).textContent = newStats[i];
            break;
          case "Perfect":
            const adultStat = Number(document.getElementById(adultStatList[i]).innerText);
            // Special cases for Scumon evolutions
            if (lastDigi === "Scumon" || currentDigi === "KingScumon") {
              newStats.push(Math.round(adultStat * 1.4));
            } else {
              newStats.push(currentInnate[stats[i]] + adultStat - Math.round(0.6 * (lastInnate[stats[i]])));
            }
            document.getElementById(perfStatList[i]).textContent = newStats[i];
            break;
          case "Ultimate":
            const perfStat = Number(document.getElementById(perfStatList[i]).innerText);
            // Special case for KingScumon evolution
            if (lastDigi === "KingScumon") {
              newStats.push(Math.round(1.4 * perfStat));
            } else {
              newStats.push(currentInnate[stats[i]] + perfStat - Math.round(0.6 * (lastInnate[stats[i]])));
            }
            document.getElementById(ultStatList[i]).textContent = newStats[i];
        }
    }
    updateSums();
}

const sumList = ['sum1','sum2','sum3','sum4','sum5','sum6'];

/**
 * Updates the SUM column for all stages based on current stats.
 */
function updateSums() {
  for (let j = 0; j < sumList.length; j++) {
    let currentSum = 0;
    for (let i = 0; i < stats.length; i++) {
      let currentStat = 0;
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
      // HP is weighted differently in the sum calculation.
      if (stats[i] === "HP") {
        currentSum += Math.round(currentStat / 10);
      } else {
        currentSum += currentStat;
      }
    }
    document.getElementById(sumList[j]).textContent = currentSum;
  }
}

/**
 * Populates all the dropdown select elements from their corresponding lists.
 */
function populateDropdowns() {
  const stages = [
    { id: 'baby1', list: baby1List },
    { id: 'baby2', list: baby2List },
    { id: 'child', list: childList },
    { id: 'adult', list: adultList },
    { id: 'perf', list: perfList },
    { id: 'ult', list: ultList }
  ];

  stages.forEach(stage => {
    const selectElement = document.getElementById(stage.id);
    // Clear any existing options before populating
    selectElement.innerHTML = '';
    stage.list.forEach(digimonName => {
      const option = document.createElement('option');
      option.value = digimonName;
      option.textContent = digimonName;
      selectElement.appendChild(option);
    });
  });
}

/**
 * Creates and populates the innate stat tables for each evolutionary stage with a sorting dropdown.
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
        if (!targetElement) return;

        // Call the initial table render function. It will handle creating the full section.
        sortInnateTable(stage.list, 'name', stage.targetId);
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

    const sortedList = [...digimonList].sort((a, b) => {
        const statsA = digimonDict[a];
        const statsB = digimonDict[b];

        if (sortKey === 'name') {
            return a.localeCompare(b);
        }

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
        <table style="margin-left:auto; margin-right:auto;">
            <thead>
                <tr>
                    <th>Digimon</th>
                    <th><center>HP</center></th>
                    <th><center>ATK</center></th>
                    <th><center>SPD</center></th>
                    <th><center>DEF</center></th>
                    <th><center>SUM</center></th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedList.forEach(digimonName => {
        const digiStats = digimonDict[digimonName];
        if (digiStats) {
            const sum = Math.round(digiStats.HP / 10) + digiStats.ATK + digiStats.SPD + digiStats.DEF;
            tableHTML += `
                <tr>
                    <td>${digimonName}</td>
                    <td><center>${digiStats.HP}</center></td>
                    <td><center>${digiStats.ATK}</center></td>
                    <td><center>${digiStats.SPD}</center></td>
                    <td><center>${digiStats.DEF}</center></td>
                    <td><center>${sum}</center></td>
                </tr>
            `;
        }
    });

    tableHTML += `
            </tbody>
    </table>
    `;

    targetElement.innerHTML = tableHTML;

    // Re-attach the event listener to the newly created dropdown.
    document.getElementById(`sort-${targetElementId}`).addEventListener('change', (event) => {
        const newSortKey = event.target.value;
        sortInnateTable(digimonList, newSortKey, targetElementId);
    });
}

/**
 * Recalculates all stats from top to bottom.
 */
function recalculateAll() {
    calcBaseStat(baby1.value, baby1.value, "Baby1");
    calcBaseStat(baby2.value, baby1.value, "Baby2");
    calcBaseStat(child.value, baby2.value, "Child");
    calcBaseStat(adult.value, child.value, "Adult");
    calcBaseStat(perf.value, adult.value, "Perfect");
    calcBaseStat(ult.value, perf.value, "Ultimate");
}


// --- INITIALIZATION ---

// Populate the dropdowns with Digimon names when the script loads.
populateDropdowns();

// Populate the innate stat tables
populateInnateStatTables();

// Set the initial stats on page load.
recalculateAll();

// Add a single event listener to the table body to handle changes for any dropdown.
document.querySelector('tbody').addEventListener('change', (event) => {
    if (event.target.tagName === 'SELECT') {
        recalculateAll();
    }
});
