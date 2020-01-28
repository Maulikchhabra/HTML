// average function for taking out student grade
function average(arr){
	var scores = arr;
	var avg =0;
	for(var i=0;i<scores.length;i++){
		avg =avg +scores[i];
	}
	avg = avg/scores.length;
	//avg =parseInt(avg);  will return 93 that is lower bound of 93.8
	avg =Math.round(avg); //while math.round will round of according to estimation and will give 94
	console.log(avg);
	
}

var res=[90,98,89,100,100,86,94];
average(res);
