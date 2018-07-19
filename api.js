let Packages = {
    iridium: {
        name: "Iridium",
        description: `Make your lockscreen beautiful with this minimalistic and customizable lockscreen clock
        -- complete with a weather display and date, perfectly typeset and optimized for quick glancing,
        and available completely for free!`,
        screenshots: [
            "images/iridium-1.png",
            "images/iridium-2.png",
            "images/iridium-3.png",
            "images/iridium-4.png"
        ],
        dependencies: `
            <b>Xen HTML:</b> <a href="https://xenhtml.incendo.ws/">xenhtml.incendo.ws</a><br>
            <b>XenInfo:</b> <a href="http://junesiphone.com/supersecret/">junesiphone.com/supersecret/</a>
        `,
        documentation: `
            As demonstrated in the screenshots, this lockscreen clock is <em>the</em> most beautiful and customizable! <br>
            This widget allows you to show off your lockscreen wallpaper, but looks best with a dark and blurred background,
            as demontrated in the screenshots.<br><br>
            A number of options are available:<br>
            <b>Seconds:</b> choose whether or not the seconds pas the minute are shown.<br>
            <b>Date:</b> show or hide the date display. The numerical date is given in the locale of your device.<br>
            <b>Weather:</b> display the weather. Current condition, temperature and chance of rain are displayed and periodically updated.<br>
            <b>Chance of Rain:</b> the rain probability is automatically hidden if at 0%, but you can also choose to hide it completely but still show the condition and temperature.<br>
            <b>Minimal Mode:</b> an even more minimal version without borders is available, with optimized spacing.<br>
            <b>Clock Format:</b> either 12hr, 24hr or set automatically to your current device settings.<br>
            <b>Language:</b> currently, English and German weekday names are supported.<br>
            `,
        changelog: `
            <b>1.0.0</b> (18.07.18): Initial release
        `
    },
    icons: {
        name: "Lockscreen Icons",
        description: `Provide icons to packages.`,
        screenshots: [
            "images/repo.png",
            "images/repo-ls.png",
        ],
        dependencies: `
            None
        `,
        documentation: `
            Simply removes the [?] next to packages in this repository.
            `,
        changelog: `
            <b>1.0.0</b> (19.07.18): Initial release
        `
    }
};