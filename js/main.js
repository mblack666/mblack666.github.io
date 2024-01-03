function determineRange(number) {
  const ranges = [
    { start: 0, end: 70, color: '#FF0000' },
    { start: 70, end: 80, color: '#E9967A' },
    { start: 80, end: 90, color: '#9ACD32' },
    { start: 90, end: 95, color: '#228B22' },
    { start: 95, end: 101, color: '#00FF00' }
  ];

  for (const range of ranges) {
    if (number >= range.start && number < range.end) {
      return range.color;
    }
  }

  return '#191970';
}

let scoreElements = document.querySelectorAll('.main-score');
scoreElements.forEach(function(element) {
  let scoreValue = parseInt(element.getAttribute('data-score'));
  element.style.color = determineRange(scoreValue);
});


const scores = [];
scoreElements.forEach(function(element) {
  const number = parseInt(element.getAttribute('data-score'));
  if (!isNaN(number)) {
    scores.push(number);
  }
});

function calculateAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}

let averageScore = parseInt(calculateAverage(scores))
let averageScoreElement = document.querySelector('#main-average-score-value');
averageScoreElement.textContent = averageScore;

let averageScoreBlock = document.querySelector('#main-average-score');
averageScoreBlock.style.color = determineRange(averageScore);
