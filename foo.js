function fatiguecalc(f,pd) {
  if ((0 > f) || (f > 100) || (0 > pd) || (pd > 5))
    return `Please enter valid values`;
  
  const totalHours = (f / 25)/(1+pd);
  const wholeHours = Math.floor(totalHours);
  const remainingMinutes = (totalHours - wholeHours) * 60;

  const formattedHours = wholeHours.toString(); // Convert to string
  const formattedMinutes = remainingMinutes.toFixed(1); // Convert to string, rounding down

  if (wholeHours > 0) return `${formattedHours}hrs ${formattedMinutes}min`;
  return `${formattedMinutes}min`;
}
  
function hungercalc(h) {
  if ((0 > h) || (h > 100))
    return `Please enter valid values`;
  
  const totalHours = Math.ceil(h / 10) * (1+(25/60));
  const wholeHours = Math.floor(totalHours);
  const remainingMinutes = (totalHours - wholeHours) * 60;

  const formattedHours = wholeHours.toString(); // Convert to string
  const formattedMinutes = Math.floor(remainingMinutes).toString(); // Convert to string, rounding down
  
  if (h>10) {
    const minTime = (Math.ceil((h-10)/10)) * (1+(25/60));
    const minHours = Math.floor(minTime);
    const minMin = ((minTime - minHours) * 60)+1;
    const minFormHrs = minHours.toString();
    const minFormMins = Math.floor(minMin).toString();

    return `${minFormHrs}hrs ${minFormMins}min to ${formattedHours}hrs ${formattedMinutes}min`;
  }
  return `up to ${formattedHours}hrs ${formattedMinutes}min`
}
  
function poopcalc(p) {
  if ((0 > p) || (p > 100))
    return `Please enter valid values`;
    
  const totalHours = (100-p) / 100 * 7;
  const wholeHours = Math.floor(totalHours);
  const remainingMinutes = (totalHours - wholeHours) * 60;

  const formattedHours = wholeHours.toString(); // Convert to string
  const formattedMinutes = remainingMinutes.toFixed(1); // Convert to string, rounding down

  if (wholeHours > 0) return `${formattedHours}hrs ${formattedMinutes}min`;
  return `${formattedMinutes}min`;
}
