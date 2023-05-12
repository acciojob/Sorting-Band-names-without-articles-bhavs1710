//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
        displayOutput = 'original  : ' +touristSpots  ;

        var sortedArr = touristSpots.sort();
        displayOutput += '\nSorted : ' + sortedArr;

        document.getElementById('output').innerHTML = displayOutput;