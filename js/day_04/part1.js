const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8').toString().split("\n").map(line => {
  return line.split(":")[1];
});

let t = input.pop();

let left = [];
let right = [];

for (let i = 0; i < input.length; i++){ 
  left.push(input[i].split("|")[0].split(" ").map(num => {
    return parseInt(num);
  }).filter(num => {
    return !Number.isNaN(num);
  }));

  right.push(input[i].split("|")[1].split(" ").map(num => {
    return parseInt(num);
  }).filter(num => {
    return !Number.isNaN(num);
  }));

}

let total_score = 0;

for (let i = 0; i < right.length; i++){
  let score = 0;
  let wins = 0;
  for (let j = 0; j < right[i].length; j++){
    if (left[i].includes(right[i][j])){
      wins++;
    }
  }

  for (let j = 0; j < wins; j++) {
    if (score === 0){
      score++;
    } else {
      score *=2;
    }
  }
  total_score += score;
  score = 0;
  wins = 0;
}

console.log(total_score);

