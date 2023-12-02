const fs = require('node:fs');

function solve() {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const lines = data.split('\n');
    let sum = 0;
    for (let i = 0; i < lines.length-1; i++){
      let curr = lines[i];
      let left = -1;
      let right = -1;
      // Find digits in each string
      for (let j = 0; j < curr.length; j++){
        
        if (curr[j] >= '0' && curr[j] <= '9') {
          if (left == -1){
            left = curr[j];
          }
          right = curr[j];
        } 
      }
      left = left.concat("", right);
      sum += parseInt(left);
    }

    console.log(sum);
  });
}

solve();
