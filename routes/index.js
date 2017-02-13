
var pullData = require('../app/data_pull.js')
var createChart = require('../app/chart.js')
var test = require('../app/hc-test.js')


exports.index = function(req, res){
	res.render('index');

	var shares= [19455.2529,3559.9858,6009.6154,12944.9838,757.6332];
	var stocks = ['F','BA','VZ','GE','GOOG']; //very easy to make this a dynamic array
	pullData(stocks, shares);
	// createChart();
	
};