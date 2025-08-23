// Get the output element by its ID
const win = document.getElementById('w');
const loss = document.getElementById('l');

// Get the table cell where you want to display the output
const bidList = ['b1','b2','b3','b4','b5','b6','b7','b8'];
const widList = ['w1','w2','w3','w4','w5','w6','w7','w8'];
const lidList = ['l1','l2','l3','l4','l5','l6','l7','l8'];

function winrate(w,l) {
  if((w < 0) || (l < 0))
    return `Enter non-negative values`;
  if((w == 0) && (l == 0))
    return `0%`;
  const ratio = (Math.round(w/(w+l)*100)).toString();
  return `${ratio}%`;
}

function targetWR(w,l,target) {
  if((w < 0) || (l < 0))
    return 0;
  if((w == 0) && (l == 0))
    return 0;
  if((target == 0) || (target==100))
    return 0;

  var current = (Math.round(w/(w+l)*100));
  if ( current == target ) { return 0; };
  var i = 0;

  if (current > target) {
    while ( current > target ) {
      i = i + 1;
      current = (Math.round(w/(w+l+i)*100));
      if (current < target) { i = i - 1; };
    };
  } else if (current < target) {
    while ( current < target ) {
      i = i + 1;
      current = (Math.round((w+i)/(w+l+i)*100));
    };
  }
  return i;
}

// Function to update the table cell with the output value
function updateTableEntry() {
  for (i=0; i < bidList.length; i++) {
    var wins = Number(win.value) ? Number(win.value) : 0;
    var losses = Number(loss.value) ? Number(loss.value) : 0;
    var battles = wins + losses + i + 1;
    if((wins < 0) || (losses < 0))
      return;
    document.getElementById(bidList[i]).textContent = battles; 
    document.getElementById(widList[i]).textContent = winrate(wins+i+1,losses);
    document.getElementById(lidList[i]).textContent = winrate(wins,losses+i+1);
  } 
}

// Initial update (optional)
updateTableEntry();

// Update table cell when the output value changes (if applicable)
win.addEventListener('change', updateTableEntry); //for input elements that have a value property.
loss.addEventListener('change', updateTableEntry);
//For other output elements you may need to use other event listeners, or set the table cell manually.
