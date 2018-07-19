

class Weather {
    static getFontGlyph(conditionCode) {
        const glyphs = [
            "\uf056", // tornado
            "\uf073", // tropical storm
            "\uf073", // hurricane
            "\uf01e", // severe thunderstorms
            "\uf01e", // thunderstorms
            "\uf017", // mixed rain and snow
            "\uf0b5", // mixed rain and sleet
            "\uf0b5", // mixed snow and sleet
            "\uf015", // freezing drizzle
            "\uf01a", // drizzle
            "\uf019", // freezing rain
            "\uf01a", // showers
            "\uf01a", // showers
            "\uf064", // snow flurries
            "\uf017", // light snow showers
            "\uf01b", // blowing snow 
            "\uf01b", // snow
            "\uf015", // hail
            "\uf0b5", // sleet
            "\uf063", // dust
            "\uf014", // foggy
            "\uf0f6", // haze
            "\uf062", // smoky
            "\uf050", // blustery
            "\uf021", // windy
            "\uf076", // cold
            "\uf013", // cloudy
            "\uf086", // cloudy night
            "\uf002", // cloudy day
            "\uf081", // partly cloudy night
            "\uf07d", // partly cloudy day
            "\uf02e", // clear night
            "\uf00d", // sunny
            "\uf086", // fair night
            "\uf002", // fair day
            "\uf015", // mixed rain and hail
            "\uf072", // hot
            "\uf01e", // isolated thunderstorms
            "\uf01e", // scattered thunderstorms
            "\uf01e", // scattered thunderstorms
            "\uf01a", // scattered showers
            "\uf01b", // heavy snow
            "\uf064", // scattered snow showers
            "\uf01b", // heavy snow
            "\uf041", // partly cloudy
            "\uf01e", // thunderstorms
            "\uf064", // snow showers
            "\uf01e", // isolated thunderstorms
        ];

        return conditionCode != 3200 ? glyphs[conditionCode] : "\uf07b";
    }
}
