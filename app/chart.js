$ = require('cheerio');

var Highcharts = require('highcharts/highstock');


/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */

var data = [1,2,3,4];
var createChart = function (data) {
    // Create the chart

    Highcharts.chart('stockTable', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
};

// $.each(names, function (i, name) {

//     $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

//         seriesOptions[i] = {
//             name: name,
//             data: data
//         };

//         // As we're loading the data asynchronously, we don't know what order it will arrive. So
//         // we keep a counter and create the chart when all the data is loaded.
//         seriesCounter += 1;

//         if (seriesCounter === names.length) {
//             createChart();
//         }
//     });
// });

module.exports = createChart;