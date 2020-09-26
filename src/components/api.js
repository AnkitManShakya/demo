
fetch("https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json")
    .then(response => response.json())
    .then(data => console.log(data))