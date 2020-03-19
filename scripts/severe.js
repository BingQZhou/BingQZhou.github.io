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
let land_lost = [124, 153, 176, 188, 191];
/*
let land_lost = [
    {x: Date.UTC(1955, 0, 1), y: 1.53},
    {x: Date.UTC(1985, 0, 1), y: 1.76},
    {x: Date.UTC(1992, 0, 1), y: 1.88},
    {x: Date.UTC(2002, 0, 1), y: 1.91}];*/
let desertification = [156, 183, 210, 228, 246];
let coal_usage = [
    {x: Date.UTC(1974), y: 401.44},
    {x: Date.UTC(1975), y: 454.25},
    {x: Date.UTC(1976), y: 478.31},
    {x: Date.UTC(1977), y: 523.54},
    {x: Date.UTC(1978), y: 571.44},
    {x: Date.UTC(1979), y: 585.88},
    {x: Date.UTC(1980), y: 602.75},
    {x: Date.UTC(1981), y: 594.47},
    {x: Date.UTC(1982), y: 620.67},
    {x: Date.UTC(1983), y: 660.4},
    {x: Date.UTC(1984), y: 709.04},
    {x: Date.UTC(1985), y: 766.82},
    {x: Date.UTC(1986), y: 808.5},
    {x: Date.UTC(1987), y: 866.32},
    {x: Date.UTC(1988), y: 929.97},
    {x: Date.UTC(1989), y: 969.34},
    {x: Date.UTC(1990), y: 987.03},
    {x: Date.UTC(1991), y: 1037.83},
    {x: Date.UTC(1992), y: 1091.7},
    {x: Date.UTC(1993), y: 1159.93},
    {x: Date.UTC(1994), y: 1227.37},
    {x: Date.UTC(1995), y: 1311.76},
    {x: Date.UTC(1996), y: 1389.48}
];

window.addEventListener("DOMContentLoaded", function(){
    draw_forest_rank();
    draw_desertification();
    draw_result();
    draw_coal_trend();
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
                text: "Year",
                style: {
                    fontSize: "20pt"
                }
            }
        },

        yAxis: [
            {
                title: {
                    text: "Desertification Area(Thousand km2)",
                    style: {
                        color: "black",
                        fontSize: "15pt"
                    }
                }
            },
            {
                title: {
                    text: "Area with Land Loss by Wind(Thousand km2)",
                    style: {
                        color: "#605303",
                        fontSize: "15pt"
                    }
                },
                opposite: true
            }
        ],

        title: {
            text: "The Desertification was Expanding, Causing Land Loss",
            style: {
                fontWeight: 'bold',
                fontSize: "20pt"
            },
            align: "left"
        },

        subtitle: {
            text: "the change of desertification area and land loss area of China in the second half of 20th century",
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
                type: "column",
                name: "Land Lost by Wind",
                data: land_lost,
                yAxis: 1,
                color: "#605303"
            },
            {   
                type: "line",
                name: "Desertification Area",
                data: desertification,
                color: "black",
                yAxis: 0
            }
        ]
    })
}

function draw_result() {
    Highcharts.chart("result", {
        chart: {
            type: "line",
            width: "900",
            height: "600"
        },

        title: {
            text: "The Desertification Caused Sand Storms",
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
                text: "Year",
                style: {
                    fontSize: "20pt"
                }
            }
        },

        yAxis:{
            title: {
                style: {
                    color: "#8a7705",
                    fontSize: "20pt"
                },
                text: "Number of Strong Sand Storms"
            }
        },

        legend: {
            layout: 'vertical',
            align: "right",
            verticalAlign: "top",
            borderWidth: 1,
            y: 30
        },

        series: [
            {
                name: "Strong Dust Storm Numbers",
                data: dust_storms,
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
};

function draw_coal_trend() {
    let chart = Highcharts.chart("coalTrend", {
        chart: {
            type: "bar",
            width: "900",
            height: "600"
        },

        plotOptions: {
            bar: {
                center: [250, 200]
            }
        },

        xAxis: {
            type: "datetime",
            title: {
                text: "Year",
                style: {
                    fontSize: "20pt"
                }
            },
            plotLine: [{
                value: 2,
                color: "#f2033e",
                width: 2,
                label: {
                    text: "Reform and Open Started"
                },
                zIndex: 4
            }]
        },

        yAxis: {
            title: {
                text: "Coal Consumed(Milliion Tons)",
                style: {
                    color: "#787869",
                    fontSize: "20pt"
                }
            }
        },

        title: {
            text: "The Economic Growth was Driven by Coal",
            style: {
                fontWeight: 'bold',
                fontSize: "20pt"
            },
            align: "left"
        },

        subtitle: {
            text: "the amount of coal used each year in China",
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
                name: "Coal Consumed",
                data: coal_usage,
                color: "#787869"
            }
        ]
    });
};