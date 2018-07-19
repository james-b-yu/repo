// convert settings to lower case
clock_format = clock_format.toLocaleLowerCase();
language = language.toLocaleLowerCase();

// validate freely-edited settings
clock_format = ["24h", "12h", "auto"].indexOf(clock_format) != -1 ? clock_format : "24h";
language = ["de", "en"].indexOf(language) != -1 ? language : "en";

// database to save
let Database = {
	system24hr: true,
	weather: {
		celsius: "C",
		chanceofrain: "30",
		conditionCode: 32,
		feelsLike: 15,
	}
}

let TempDatabase;

let saveDatabase = () => {
	localStorage.setItem("LSDatabase", JSON.stringify(Database));
}

let loadDatabase = () => {
	// use "temp" hack to avoid xenhtml spasming out
	TempDatabase = JSON.parse(localStorage.getItem("LSDatabase"));
	if (TempDatabase && TempDatabase.weather.chanceofrain) // only load the database if phone has connection
		Database = TempDatabase;
	else
		saveDatabase();
}

loadDatabase();


// define elements
const mainView = document.querySelector(".main-view");
const weatherDisp = document.querySelector(".weather");
const hoursDisp = document.querySelector(".hours");
const minutesDisp = document.querySelector(".minutes");
const secondsDisp = document.querySelector(".seconds");
const dateDisp = document.querySelector(".date");
const dayDisp = document.querySelector(".day");
const dateNumDisp = document.querySelector(".num");
const weatherIcon = document.querySelector(".icon");
const tempDisp = document.querySelector(".temp-lvl");
const weatherRainIcon = document.querySelector(".rain-icon");
const rainDisp = document.querySelector(".rain-lvl");
const tempGroup = document.querySelector(".temp");
const rainGroup = document.querySelector(".rain");

document.querySelector(".placeholder").style.display = "none";

// parse settings
if (!show_seconds)
 secondsDisp.style.display = "none";
if (!show_date)
 dateDisp.style.display = "none";
if (minimal)
 mainView.setAttribute("class", mainView.getAttribute("class") + " minimal");
if (!show_weather)
 weatherDisp.style.display = "none";
if (!show_rain) 
	rainGroup.style.display = "none";

// update weather info
let updateWeather = () => {
	rainGroup.style.display = +Database.weather.chanceofrain > 0 && show_rain ? "flex" : "none";
	weatherIcon.innerHTML = Weather.getFontGlyph(Database.weather.conditionCode);
	tempDisp.innerHTML = Database.weather.feelsLike + "&#176;" + Database.weather.celsius;
	weatherRainIcon.innerHTML = "\uf01a";
	rainDisp.innerHTML = Database.weather.chanceofrain + "%";
};

// 1-second updater
let clock = () => {
	let date = new Date;

	hoursDisp.innerHTML = (clock_format == "auto" && Database.system24hr) || clock_format == "24h" ? String(date.getHours()).padStart(2, "0") : ((date.getHours() - 1) % 12) + 1;
	minutesDisp.innerHTML = String(date.getMinutes()).padStart(2, "0");
	secondsDisp.innerHTML = String(date.getSeconds()).padStart(2, "0");

	dayDisp.innerHTML = Locale.daysOfWeek[language][date.getDay()];
	dateNumDisp.innerHTML = date.toLocaleDateString();
};

clock();
updateWeather();
setInterval(clock, 1000);
let mainUpdate = (type) => {
	switch (type) {
		case "system":
			// configure "auto" setting of 24h / 12h clock
			Database.system24hr = twentyfourhour == "yes";
			saveDatabase();
			break;
		case "weather":
			if (weather.chanceofrain) {
				Database.weather = weather;
				updateWeather();
				saveDatabase();
			}
			break;
	}
};
