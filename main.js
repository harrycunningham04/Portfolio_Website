const timeContainer = document.getElementById("time-container");
const START_DATE = "10-09-2018";
const START_DATE_TIME = new Date(START_DATE);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - START_DATE_TIME.getTime()) / 1000
  );
  const minutes = Math.floor(difference/60);

  timeContainer.innerText = intlNumberFormatter.format(minutes);
}, 1000);

const ageContainer = document.getElementById("age-container");
const BIRTH_DATE = "01-05-2004";
const BIRTH_DATE_TIME = new Date(BIRTH_DATE);
const intlYearFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
const now = new Date();
const ageInMillis = now.getTime() - BIRTH_DATE_TIME.getTime();
const ageInSeconds = ageInMillis / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;
const ageInYears = ageInDays / 365.25;

ageContainer.innerHTML = intlYearFormatter.format(Math.floor(ageInYears));
}, 1000);
