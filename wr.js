// Get the output element by its ID
const win = document.getElementById('w');
const loss = document.getElementById('l');
const tableCell = document.getElementById('w1');

// Get the table cell where you want to display the output
const bidList = ['b1','b2','b3','b4','b5','b6'];
const widList = ['w1','w2','w3','w4','w5','w6'];
const lidList = ['l1','l2','l3','l4','l5','l6'];

function winrate(w,l) {
  const ratio = (Math.round(w/(w+l)*100)).toString();
  return `${ratio}%`;
}

// Function to update the table cell with the output value
function updateTableEntry() {
  for (i=0; i < bidList.length; i++) {
    var wins = Number(win.value)
    var losses = Number(loss.value)
    var battles = wins + losses + i + 1;
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
