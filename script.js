//your code here
let bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function strip(word) {
const regex = /^(a |the |an )/i;
return word.replace(regex, '').trim();
}

const sortedBands = touristSpots.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
const listItem = document.createElement('li');
listItem.textContent = band;
bandList.appendChild(listItem);
});
