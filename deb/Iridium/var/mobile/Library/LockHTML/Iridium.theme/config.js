var show_seconds = true; 
var show_date = true; 
var show_weather = true; 
var show_rain = true; // will be hidden anyway if chance of rain is 0%
var minimal = false; // even more minimal?
var clock_format = "auto"; // can be one of ["24h", "12h", "auto"]
var locale = "auto"; // change the locale of the date display. Can be "auto", or a locale identifier like "en-GB" or "hr"
var date_format = ""; // for advanced users: replace the default date string with your specifed formatted string. Leave blank to use default. See https://momentjs.com/docs/#/displaying/format/ for details on how to provide a format string.