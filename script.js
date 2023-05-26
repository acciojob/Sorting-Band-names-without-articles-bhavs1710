//your code here
const bands = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith'];
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});
