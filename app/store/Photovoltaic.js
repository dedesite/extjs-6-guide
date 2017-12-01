Ext.define("App.store.Photovoltaic", {
    extend: "Ext.data.Store",
    alias: "store.photovoltaic",
    fields: ["city", "yearProduction"],
    mounths: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ],
    rawData: [
        {
            city: "Lille",
            yearProduction: [
                116,
                180,
                301,
                396,
                384,
                389,
                387,
                350,
                329,
                230,
                131,
                107
            ]
        },
        {
            city: "Marseille",
            yearProduction: [
                281,
                386,
                474,
                468,
                479,
                494,
                509,
                504,
                476,
                386,
                293,
                257
            ]
        }
    ],
    selectCity(cityIndex) {
        const cityData = this.rawData[cityIndex];
        if (cityData) {
            const data = cityData.yearProduction.map((pow, index) => {
                return { month: this.mounths[index], production: pow };
            });
            console.log("loadData", data);
            this.loadData(data);
        }
    },
    constructor(config) {
        this.callParent([config]);

        this.selectCity(0);
    }
});
