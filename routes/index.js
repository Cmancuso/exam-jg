

var pullData = require('../app/data_pull.js')
var createChart = require('../app/chart.js')


exports.index = function(req, res){
	$ = require('cheerio');
	var Highcharts = require('highcharts/highstock');
	var data = [1,2,3,4];
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
	// pullData();
	// createChart();
	res.render('index');
};