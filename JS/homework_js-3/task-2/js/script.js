var cities = {
    Minsk: 'Belarus',
    Kiev: 'Ukraine',
    London: 'United Kingdom',
    Pyongyang: 'North Korea',
    Brasillia: 'Brazil'
};

for(var city in cities) {
   console.log(city + ' is the capital of ' + cities[city]);
}