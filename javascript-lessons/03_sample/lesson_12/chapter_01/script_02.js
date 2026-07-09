const timeElem = document.querySelector("[data-time]");

const now = new Date();
const isoString = now.toISOString();
const readableTime = now.toLocaleString("ja-JP");

timeElem.setAttribute("datetime", isoString);
timeElem.textContent = readableTime;
