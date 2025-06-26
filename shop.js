const schedule = {
    "opening": 6,
    "increase": 18,
    "retire": 0,
    "closing": 3
}

const specials = [
    "None",
    "Fertilizer A",
    "Red Apple",
    "Anomaly Meat",
    "Fertilizer B",
    "Red Apple",
    "Anomaly Meat"
]

function timer() {
    let d = new Date(Date.now());
    `document.getElementById("now").textContent = d.toTimeString().substring(0,5);`

    let offset = (d.getTimezoneOffset())/60;
    let offsetString = String();
    if ((offset*-1)>0) { offsetString = "UTC+"+String(offset*-1); }
    else { offsetString = "UTC"+String(offset*-1); }
    document.getElementById("zone").textContent = (
        offsetString+" ("+Intl.DateTimeFormat().resolvedOptions().timeZone+")");
    let adjusted = {"opening":0,"increase":0,"retire":0,"closing":0};
    for (const [key, value] of Object.entries(schedule)) {
        adjusted[key] = schedule[key] - offset;
        if (adjusted[key] > 23) {
            adjusted[key] = adjusted[key] - 24;
        }
        if (adjusted[key] < 0) {
            adjusted[key] = adjusted[key] + 24;
        }
        document.getElementById(key).textContent = String(adjusted[key]) + ":00";
    }

    let UTChr = d.getUTCHours();
    console.log(UTChr);
    let status = String();
    let byline = String();
    if(3 <= UTChr && UTChr <= 5) {
        status="closed!";
        byline="Come back later.";
    }
    if(6 <= UTChr && UTChr <= 17) {
        status="open!";
        byline="Buy now!";
    }

    if(18 <= UTChr && UTChr <= 23) {
        status="expensive!";
        byline="Everything is priced 30% higher.";
    }
    if(0 <= UTChr && UTChr < 3) {
        status="limited!";
        byline="Meat, Bandages, and Drivers only.";
    }
    document.getElementById("status").textContent = status;
    document.getElementById("byline").textContent = byline;

    let UTCday = d.getUTCDay();
    let special = String();
    let tomorrow = String();
    if (status=="closed!") {
        special = "None (closed).";
        tomorrow = specials[UTCday];
    }
    if ((status=="open!") || (status=="expensive!")) {
        special = specials[UTCday];
        if (UTCday == 6) {tomorrow = specials[0]; }
        else { tomorrow = specials[UTCday + 1]; }
    }
    if (status=="limited!") {
        if (UTCday == 0) { special = specials[6]; }
        else { special = specials[UTCday-1]; }
        tomorrow = specials[UTCday];
    }
    document.getElementById("special").textContent = special;
    document.getElementById("tomorrow").textContent = tomorrow;
}

function getDSTOffset(year) {
    // Get the offset for a date in January (likely standard time)
    const jan1 = new Date(year, 0, 1); // Month is 0-indexed (0 = January)
    const janOffset = jan1.getTimezoneOffset();

    // Get the offset for a date in July (likely daylight saving time)
    const jul1 = new Date(year, 6, 1); // Month is 0-indexed (6 = July)
    const julOffset = jul1.getTimezoneOffset();

    // The difference between the two offsets is the DST change
    // Remember getTimezoneOffset() returns positive for "behind UTC"
    // So, if DST moves time forward (e.g., from -5 to -4), the offset value
    // will go from 300 to 240 (less positive), meaning julOffset < janOffset.
    console.info(output); // This will give you the positive shift (e.g., 60 minutes)
}