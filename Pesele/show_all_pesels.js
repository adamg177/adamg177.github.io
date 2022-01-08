var pesel = "";
var year;
var month;
var day;
var last5numbers;

onmessage = function(e) {
    var validateResult = validate(e.data[0],e.data[1], e.data[2]);
    postMessage(validateResult);
    console.log('Wartość została pobrana');
}


function validate(y, m, d) {
    year = y;
    month = m;
    day = d;
    var peselArray = [];
    for (var j=0; j<=99999; j++) {
        last5numbers = j;
        concatenate();
        var numberArray = [];
        for (var i=1; i<=pesel.length; i++) {
            numberArray[i-1] = parseInt(pesel.substring(i-1, i))
        }
        var mult = numberArray[0] + (numberArray[1]*3) + (numberArray[2]*7) + (numberArray[3]*9) + numberArray[4] + (numberArray[5]*3) + (numberArray[6]*7) + (numberArray[7]*9) + numberArray[8] + (numberArray[9]*3);
        var result = 10 - (mult % 10);
        if (result===10) {
            result = 0;
        }
        if (result === numberArray[10]) {
            peselArray.push(pesel);
        }
    }
    return peselArray;
}

