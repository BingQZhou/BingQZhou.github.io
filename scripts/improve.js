// global variables
let severe = [3, 3, 3, 4, 1, 0, 0];
let serious = [7, 3, 8, 7, 4, 1, 2];
let light = [11, 12, 9, 9, 6, 5, 7];
let good = [6, 11, 9, 11, 17, 21, 17];
let excellence = [3, 2, 2, 0, 3, 3, 5];
let north_west = [
    {"name": "新疆"},
    {"name": "甘肃"},
    {"name": "青海"},
    {"name": "宁夏"},
    {"name": "陕西"}
];
let north = [
    {"name": "内蒙古"},
    {"name": "山西"},
    {"name": "河北"},
    {"name": "天津"},
    {"name": "北京"}
];
let north_east = [
    {"name": "黑龙江"},
    {"name": "吉林"},
    {"name": "辽宁"}
];
let regions_not_involved = [
    {"name": '福建'},
    {"name": '浙江'},
    {"name": '江西'},
    {"name": '广东'},
    {"name": '湖南'},
    {"name": '台湾'},
    {"name": '海南'},
    {"name": '云南'},
    {"name": '广西'},
    {"name": '贵州'},
    {"name": '湖北'},
    {"name": '安徽'},
    {"name": '重庆'},
    {"name": '四川'},
    {"name": '山东'},
    {"name": '河南'},
    {"name": '上海'},
    {"name": '江苏'},
    {"name": '西藏'}
];
let forest_created = [
    {x: Date.UTC(2004, 0, 1), y: 62.67}, 
    {x: Date.UTC(2005, 0, 1), y: 54.44}, 
    {x: Date.UTC(2006, 0, 1), y: 56}, 
    {x: Date.UTC(2007, 0, 1), y: 50}, 
    {x: Date.UTC(2008, 0, 1), y: 41.67}, 
    {x: Date.UTC(2009, 0, 1), y: 58.84}, 
    {x: Date.UTC(2010, 0, 1), y: 85.79}, 
    {x: Date.UTC(2011, 0, 1), y: 134.43},
    {x: Date.UTC(2012, 0, 1), y: 109.5},
    {x: Date.UTC(2013, 0, 1), y: 83.49},
    {x: Date.UTC(2014, 0, 1), y: 97.1},
    {x: Date.UTC(2015, 0, 1), y: 142.55},
    {x: Date.UTC(2016, 0, 1), y: 88.3},
    {x: Date.UTC(2017, 0, 1), y: 99.1},
    {x: Date.UTC(2018, 0, 1), y: 80.5},
    {x: Date.UTC(2019, 0, 1), y: 88.3}
];
let coal = [
    {x: Date.UTC(2002), y: 66.3},
    {x: Date.UTC(2003), y: 68.4},
    {x: Date.UTC(2004), y: 68},
    {x: Date.UTC(2005), y: 69.1},
    {x: Date.UTC(2006), y: 69.4},
    {x: Date.UTC(2007), y: 69.5},
    {x: Date.UTC(2008), y: 68.7},
    {x: Date.UTC(2009), y: 70.4},
    {x: Date.UTC(2010), y: 68},
    {x: Date.UTC(2011), y: 70.2},
    {x: Date.UTC(2012), y: 68.5},
    {x: Date.UTC(2013), y: 67.4},
    {x: Date.UTC(2014), y: 65.6},
    {x: Date.UTC(2015), y: 63.7},
    {x: Date.UTC(2016), y: 62},
    {x: Date.UTC(2017), y: 60.4},
    {x: Date.UTC(2018), y: 59}
];
let oil = [
    {x: Date.UTC(2002), y: 23.4},
    {x: Date.UTC(2003), y: 22.2},
    {x: Date.UTC(2004), y: 22.3},
    {x: Date.UTC(2005), y: 21},
    {x: Date.UTC(2006), y: 20.4},
    {x: Date.UTC(2007), y: 19.7},
    {x: Date.UTC(2008), y: 18.7},
    {x: Date.UTC(2009), y: 17.9},
    {x: Date.UTC(2010), y: 19},
    {x: Date.UTC(2011), y: 16.8},
    {x: Date.UTC(2012), y: 17},
    {x: Date.UTC(2013), y: 17.1},
    {x: Date.UTC(2014), y: 17.4},
    {x: Date.UTC(2015), y: 18.3},
    {x: Date.UTC(2016), y: 18.5},
    {x: Date.UTC(2017), y: 18.8},
    {x: Date.UTC(2018), y: 18.9}
];
let natural_gas = [
    {x: Date.UTC(2002), y: 2.6},
    {x: Date.UTC(2003), y: 2.6},
    {x: Date.UTC(2004), y: 2.6},
    {x: Date.UTC(2005), y: 2.8},
    {x: Date.UTC(2006), y: 3},
    {x: Date.UTC(2007), y: 3.5},
    {x: Date.UTC(2008), y: 3.8},
    {x: Date.UTC(2009), y: 3.9},
    {x: Date.UTC(2010), y: 4.4},
    {x: Date.UTC(2011), y: 4.6},
    {x: Date.UTC(2012), y: 4.8},
    {x: Date.UTC(2013), y: 5.3},
    {x: Date.UTC(2014), y: 5.7},
    {x: Date.UTC(2015), y: 5.9},
    {x: Date.UTC(2016), y: 6.2},
    {x: Date.UTC(2017), y: 7},
    {x: Date.UTC(2018), y: 7.8}
];
let clean_energy = [
    {x: Date.UTC(2002), y: 7.7},
    {x: Date.UTC(2003), y: 6.8},
    {x: Date.UTC(2004), y: 7.1},
    {x: Date.UTC(2005), y: 7.1},
    {x: Date.UTC(2006), y: 7.2},
    {x: Date.UTC(2007), y: 7.3},
    {x: Date.UTC(2008), y: 8.9},
    {x: Date.UTC(2009), y: 7.8},
    {x: Date.UTC(2010), y: 8.6},
    {x: Date.UTC(2011), y: 8.4},
    {x: Date.UTC(2012), y: 9.7},
    {x: Date.UTC(2013), y: 10.2},
    {x: Date.UTC(2014), y: 11.3},
    {x: Date.UTC(2015), y: 12.1},
    {x: Date.UTC(2016), y: 13.3},
    {x: Date.UTC(2017), y: 13.8},
    {x: Date.UTC(2018), y: 14.3}
]

window.addEventListener('DOMContentLoaded', function(){
    draw_api_bar();
    draw_api_pie(0);
    draw_three_north_map();
    draw_three_north_acc();
    draw_energy_combination();
});

function draw_api_bar() {
    let years = new Array();
    for (i = 2013; i < 2020; i++) {
        years.push(String(i) + "/12");
    };
    Highcharts.chart('apiBar', {
        chart: {
            type: "column"
        },

        xAxis: {
            categories: years,
            title: {
                text: "December of Every Year"
            }
        },

        yAxis: {
            title: {
                text: "Air Quality Index"
            }
        },

        title: {
            text: "Air Quality in Tianjin is Getting Better",
            style: {
                fontWeight: 'bold'
            },
            align: "left"
        },

        subtitle: {
            text: "Number of days in December of each year when the air was polluted(AQI > 100)",
            align: "left"
        },

        legend: {
            layout: 'vertical',
            align: "right",
            verticalAlign: "top",
            borderWidth: 1
        },

        credits: {
            text: "Source: PM2.5 Historical Data",
            position: {
                align: "left",
                x: 15
            }
        },

        series: [
            {
                name: "AQI > 300",
                data: [3, 3, 3, 4, 1, 0, 0],
                color: "purple"
            },
            {
                name: "AQI > 200",
                data: [10, 6, 11, 11, 4, 1, 2],
                color: "red"
            },
            {
                name: "AQI > 100",
                data: [21, 15, 20, 20, 10, 6, 9],
                color: "orange"
            }
        ]
    })
};

function draw_api_pie(i) {
    year = 2013 + i;
    Highcharts.chart('apiPie', {
        chart: {
            type: "pie"
        },

        title: {
            text: "Tianjin's AQI, Dec " + String(year),
            style: {
                fontWeight: 'bold'
            },
            align: "left"
        },

        subtitle: {
            text: "Days of Different Air Qualities Break Down",
            align: "left"
        },

        legend: {
            enabled: true,
            layout: 'vertical',
            align: "right",
            verticalAlign: "top",
            borderWidth: 1
        },

        credits: {
            text: "Source: PM2.5 Historical Data",
            position: {
                align: "left",
                x: 15
            }
        },

        series: [{
            name: "number of days",
            data: [
            {
                name: "Severe Pollution(AQI > 300)",
                y: severe[i],
                color: "purple"
            },
            {
                name: "Serious Pollution(200 < AQI < 300)",
                y: serious[i],
                color: "red"
            },
            {
                name: "Light Pollution(100 < AQI < 200)",
                y: light[i],
                color: "orange"
            },
            {
                name: "Good(50 < API < 100)",
                y: good[i],
                color: "yellow"
            },
            {
                name: "Excellent(API < 50)",
                y: excellence[i],
                color: "green"
            }
            ]
        }],

        plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.1f} %',
					style: {
						fontSize: '16px'
					},
                    distance: '-30',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 0
                    }
                },
                showInLegend: true
			}
		}
    })
};

function draw_three_north_map() {
    Highcharts.Map("threeNorthIntro", {
        chart: {
            map: "cn/china"
        },

        title: {
            text: "China Launched the Three-North Project to Counter Desertification",
            style: {
                fontSize: "20pt",
                fontWeight: "bold"
            }
        },

        subtitle: {
            text: "regions involved in the project: north, north-east and north west",
            style: {
                fontSize: "15pt"
            }
        },

        legend: {
            layout: 'vertical',
			align: 'left',
			floating: true,
			x: 200
        },

        series: [
            {
                name: "regions not involved",
                joinBy: "name",
                data: regions_not_involved
            },
            {
                name: "north",
                joinBy: "name",
                data: north,
                color: "#cbf290",
                shadow: true
            },
            {
                name: "north east",
                joinBy: "name",
                data: north_east,
                color: "#378a3b",
                shadow: true
            },
            {
                name: "north west",
                joinBy: "name",
                data: north_west,
                color: "#81cd0a",
                shadow: true
            }
        ],

        tooltip: {
            headerFormat: '',
            pointFormat: '{point.name}: <b>{series.name}</b>'
        },

        credits: {
            text: "The Three-North Bureau",
            style: {
                align: "right",
                x: 15
            }
        },

        plotOptions: {
            map: {
                allAreas: false
            }
        }
    })
};

function draw_three_north_acc() {
    Highcharts.chart("threeNorthAccom", {
        chart: {
            type: "column"
        },

        title: {
            text: "The Three-North Project Has Been Creating Forests",
            style: {
                fontSize: "20pt",
                fontWeight: "bold"
            },
            align: "left"
        },

        subtitle: {
            text: "Forest Area Created by the Three-North Project each year",
            style: {
                fontSize: "15pt"
            },
            align: "left"
        },

        xAxis: {
            type: "datetime",
            tickInterval: 24 * 3600 * 1000 * 365,
            title: {
                text: "Year"
            }
        },

        yAxis: {
            title: {
                text: "Area of Forests Created(hectare)"
            }
        },
        
        legend: {
            align: "right",
            verticalAlign: "top",
            floating: true,
            borderWidth: 1
        },

        series: [{
            name: "Forest Area Created",
            data: forest_created,
            color: "green"
        }],

        credits: {
            text: "Source: The Three-North Bureau",
            style: {
                align: "left",
                x: 15
            }
        }
    })
};

function draw_energy_combination() {
    Highcharts.chart("energyCombination", {
        chart: {
            type: "column"
        },

        title: {
            text: "China Trys to Substitute Coals with Cleaner Energies",
            style: {
                fontSize: "20pt",
                fontWeight: "bold"
            },
            align: "left"
        },

        subtitle: {
            text: "The decomposition of each type of energy consumed",
            style: {
                fontSize: "15pt"
            },
            align: "left"
        },

        xAxis: {
            title: {
                text: "Year"
            },
            type: "datetime",
            tickInterval: 24 * 3600 * 1000 * 365
        },

        yAxis: {
            title: {
                text: "Percentage"
            }
        },

        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "top",
            floating: true,
            x: 100,
            borderWidth: 1
        },

        plotOptions: {
            series: {
                stacking: "percent"
            }
        },

        series: [
            {
                name: "coal",
                data: coal,
                color: "#787869"
            },
            {
                name: "oil",
                data: oil,
                color: "#0d0d01"
            },
            {
                name: "natural gas",
                data: natural_gas,
                color: "#289bd5"
            },
            {
                name: "clean energy",
                data: clean_energy,
                color: "#2bd528"
            }
        ],

        credits: {
            text: "Source: National Statistics Bureau",
            style: {
                align: "left",
                x: 15
            }
        }
    })
};