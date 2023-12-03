const fs = require('node:fs');

function getInputLines() {
    return new Promise((resolve, reject) => {
        fs.readFile('input.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }

            resolve(data.split('\n'));
        });
    });
}

function solve(lines) {
  let sum = 0;
  for (let i = 0; i < lines.length-1; i++) {
    lines[i] = lines[i].replace(/one/g, "o1e")
      .replace(/two/g, "t2o")
      .replace(/three/g, "t3e")
      .replace(/four/g, "f4r")
      .replace(/five/g, "f5e")
      .replace(/six/g, "s6x")
      .replace(/seven/g, "s7n")
      .replace(/eight/g, "e8t")
      .replace(/nine/g, "n9e");
    //solve like part1.
    let curr = lines[i];
    let left = -1;
    let right = -1;

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
}

async function main() {
    try {
        let inputLines = await getInputLines();
        solve(inputLines);
    } catch (error) {
        // Handle errors here
        console.error(error);
    }
}

main();

