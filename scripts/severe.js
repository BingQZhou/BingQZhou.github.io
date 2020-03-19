// data values
let forest_cover = [
    {"name": '福建', "value": 62.9},
    {"name": '浙江', "value": 60.5},
    {"name": '江西', "value": 60},
    {"name": '广东', "value": 57.1},
    {"name": '湖南', "value": 55},
    {"name": '台湾', "value": 52},
    {"name": '海南', "value": 51},
    {"name": '云南', "value": 50},
    {"name": '黑龙江', "value": 43.6},
    {"name": '广西', "value": 43},
    {"name": '吉林', "value": 42.5},
    {"name": '贵州', "value": 34.9},
    {"name": '北京', "value": 34.3},
    {"name": '陕西', "value": 33.9},
    {"name": '辽宁', "value": 31.84},
    {"name": '湖北', "value": 31.61},
    {"name": '安徽', "value": 30.3},
    {"name": '重庆', "value": 30},
    {"name": '四川', "value": 28.98},
    {"name": '河北', "value": 23.25},
    {"name": '山东', "value": 23},
    {"name": '河南', "value": 22.64},
    {"name": '上海', "value": 20},
    {"name": '江苏', "value": 14.8},
    {"name": '内蒙古', "value": 14.5},
    {"name": '山西', "value": 13},
    {"name": '甘肃', "value": 9.37},
    {"name": '西藏', "value": 6.4},
    {"name": '宁夏', "value": 4.85},
    {"name": '青海', "value": 2.59},
    {"name": '新疆', "value": 2.1}
];
let dust_storms = [
    {x: Date.UTC(1955, 0, 1), y: 5}, 
    {x: Date.UTC(1965, 0, 1), y: 8}, 
    {x: Date.UTC(1975, 0, 1), y: 13}, 
    {x: Date.UTC(1985, 0, 1), y: 14}, 
    {x: Date.UTC(1995, 0, 1), y: 21}
];
let land_lost = [
    {x: Date.UTC(1955, 0, 1), y: 1.53},
    {x: Date.UTC(1985, 0, 1), y: 1.76},
    {x: Date.UTC(1992, 0, 1), y: 1.88},
    {x: Date.UTC(2002, 0, 1), y: 1.91}];
let desertification = [1560, 1830, 2100, 2280, 2460];

window.addEventListener("DOMContentLoaded", function(){
    draw_forest_rank();
    draw_desertification();
    draw_result();
});

function draw_forest_rank() {
    Highcharts.Map("forestByProvince", {
        chart: {
            map: "cn/china",
            width: '900',
            height: '600'
        },

        plotOptions: {
            map: {
                center: [450, 300]
            }
        },

        title: {
            text: "Northern Regions Have Less Forest Coverage",
            style: {
                fontWeight: 'bold',
                fontSize: "20pt"
            },
        },

        subtitle: {
            text: "Forest coverage of each Region is represented by the color on it",
            style: {
                fontSize: "15pt"
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#f9f964',
            maxColor: '#63f40e'
        },

        series: [{
            name: "Forest Coverage",
            joinBy: "name",
            data: forest_cover,
            tooltip: {
                pointFormat: '{point.name}: {point.value}%'
            }
        }],

        credits: {
            text: "Source: Baidu",
            position: {
                align: "left",
                x: 15
            }
        }
    });
};

function draw_desertification() {
    Highcharts.chart("desertification", {
        chart: {
            type: "line",
            width: "900",
            height: "600"
        },

        plotOptions: {
            line: {
                center: [250, 200]
            }
        },

        xAxis: {
            categories: ["50s", "60s", "70s", "80s", "90s"],
            title: {
                text: "Year"
            }
        },

        yAxis: {
            label: {
                fomat: "{value}km2",
                style: {
                    color: "black"
                }
            },
            title: {
                text: "Desertification Area",
                style: {
                    color: "black"
                }
            }
        },

        title: {
            text: "The Area of Desertification was Expanding",
            style: {
                fontWeight: 'bold',
                fontSize: "20pt"
            },
            align: "left"
        },

        subtitle: {
            text: "the change of desertification area of China in the second half of 20th century",
            align: "left",
            style: {
                fontSize: "15pt"
            }
        },

        legend: {
            layout: 'vertical',
            align: "right",
            verticalAlign: "top",
            borderWidth: 1
        },

        credits: {
            text: "Source: Baidu",
            position: {
                align: "left",
                x: 15
            }
        },

        series: [
            {
                name: "Desertification Area",
                data: desertification,
                color: "black"
            }
        ]
    })
}

function draw_result() {
    Highcharts.chart("result", {
        title: {
            text: "The Desertification Caused Sand Storms and Land Loss by Wind",
            style: {
                fontWeight: "bold",
                fontSize: "20pt"
            },
            align: "left"
        },

        subtitle: {
            text: "The trend of the number of strong sand storms and the area of land loss by wind",
            style: {
                fontSize: "15pt"
            },
            align: "left"
        },

        xAxis: {
            type: 'datetime',
            tickInterval: 24 * 3600 * 1000 * 365,
            title: {
                text: "Year"
            }
        },

        yAxis: [
            {
                title: {
                    style: {
                        color: "#8a7705"
                    },
                    text: "Number of Strong Sand Storms"
                },
                labels: {
                    style: {
                        color: "#8a7705"
                    },
                },
                opposite: true
            },
            {
                label: {
                    fomat: "{value}km2",
                    style: {
                        color: "#605303"
                    }
                },
                title: {
                    text: "Area with Land Loss by Wind(Million km2)",
                    style: {
                        color: "#605303"
                    }
                }
            }
        ],

        legend: {
            layout: 'vertical',
            align: "right",
            verticalAlign: "top",
            borderWidth: 1,
            y: 30
        },

        series: [
            {
                type: "column",
                name: "Land Lost by Wind",
                data: land_lost,
                yAxis: 1,
                color: "#605303"
            },
            {
                type: "line",
                name: "Strong Dust Storm Numbers",
                data: dust_storms,
                yAxis: 0,
                color: "#8a7705"
            }
        ],

        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y} km2'
                },
                series: {
                    pointWidth: 10
                }
            },
            series: {
                pointWidth: 20
            }
        },

        credits: {
            text: "Source: Natinal Census of Preservation of River and Land",
            position: {
                align: "left",
                x: 15
            }
        }
    })
}