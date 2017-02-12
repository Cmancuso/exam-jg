var Quandl = require("quandl");
var quandl = new Quandl({
    auth_token: "JkUpwNL34KfvXwP52s5x",
    api_version: 3,
});



var pullData = function(){
	quandl.dataset({
	source: "WIKI",
	table: "FB"
	}, {
	order: "asc",
	exclude_column_names: true,
	// Notice the YYYY-MM-DD format
	  start_date: "2010-01-01",
	  end_date: "2017-02-12",
	  column_index: 4
	}, function(err, response){
	    if(err)
	        throw err;

	    console.log(response);
	});
}

quandl.metadata("ZILLOW", "ZIP_ALLHOMES_15235", function(err, response){
    if(err)
        throw err;

    console.log(response);
});

module.exports = pullData;