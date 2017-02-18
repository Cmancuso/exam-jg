var Quandl = require("quandl");
var quandl = new Quandl({
    auth_token: "JkUpwNL34KfvXwP52s5x",
    api_version: 3,
});

	var f_shares = 19455.2529  		//$200k/10.28
	var ba_shares = 3559.9858  		//$200k/56.18
	var vz_shares = 6009.6154  		//$200k/33.28
	var ge_shares = 12944.9838  	//$200k/15.45
	var goog_shares = 757.6332  	//$200k/263.98

var pullData = function(stocks,shares){
	finalarray = {id:[{}]};
	for(var j= 0; j<(stocks).length; j++){
		console.log(j)
		var quantity = shares[j]
		console.log(quantity)
		console.log(stocks[j])
		setTimeout(testFunct(stocks[j], quantity,j,finalarray), 500)
		// console.log(j)
	}
	// console.log(finalarray);
}

var testFunct = function(stock, quantity,j,finalarray){
	quandl.dataset({
	source: "WIKI",
	table: stock,
	}, {
	order: "desc",
	exclude_column_names: false,
	// Notice the YYYY-MM-DD format
	  start_date: "2010-01-01",
	  end_date: "2017-02-12",
	  column_index: 4
	}, function(err, response){
	    if(err)
	        throw err;
	    // console.log(response)
	    var output = JSON.parse(response);
	    adjustedarray = {id:[{}]};
	    for(var i=0; i<(output.dataset.data).length; i++){
	    	adjustedarray.id = i;
	    	adjustedarray[i] = {date: output.dataset.data[i][0], value: output.dataset.data[i][1]*quantity}
	    	if(j==0){
	    		finalarray.id = i;
	    		finalarray[i] = {date: output.dataset.data[i][0], value: output.dataset.data[i][1]*quantity}
	    	}
	    	// else{
	    		// var temp = finalarray[i]['value']

	    		// finalarray[i]['value']+=adjustedarray.value;
	    	// }
	    }
	    // console.log(adjustedarray)
	    console.log(j)
	});
}

module.exports = pullData;