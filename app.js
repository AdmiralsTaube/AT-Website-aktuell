const birth = Date.parse(new Date(2006, 5, 6, 5, 30, 0, 0, 0));

const now = Date.now();

const minAlive = (now - birth) / 1000 / 60;

console.log(birth);
console.log(now);
console.log(now - birth);
console.log(minAlive);

const years = minAlive / 60 / 24 / 7 / 52;

document.getElementById("minutesLive").innerText = minAlive.toLocaleString();
document.getElementById("yearsLive").innerText = years.toLocaleString();
