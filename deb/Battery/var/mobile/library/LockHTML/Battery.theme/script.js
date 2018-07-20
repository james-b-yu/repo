lang = ["de", "en"].indexOf(lang) == -1 ? "en" : lang;

let updateBattery = () => {
	if (show_status && show_percentage && batteryPercent == 100)
		document.getElementById("spacer").style.display = "none";
	else if (show_status && show_percentage)
		document.getElementById("spacer").style.display = "inline-block";

	if (window.batteryPercent) {
		document.getElementById("spacer").innerHTML = "";
	}


	document.getElementById("lvl").innerHTML = batteryPercent == 100 && batteryCharging && show_status ? "" : batteryPercent + "%";
	document.getElementById("desc").innerHTML = batteryCharging && batteryPercent == 100 ? Locale.BATT_FULL[lang] : (
		batteryCharging ? Locale.BATT_CHARGING[lang] : Locale.BATT_DISCHARGING[lang]);
};

if (!show_status)
	document.getElementById("desc").style.display = "none";

if (!show_percentage)
	document.getElementById("lvl").style.display = "none";

if (minimal)
	document.getElementById("disp").setAttribute("class", "minimal");

if (window.batteryPercent) {
	updateBattery();
} else {
	document.getElementById("spacer").innerHTML = Locale.DESC[lang];
}


let mainUpdate = (type) => {
	if (type == "battery") {
		updateBattery();
	}
}