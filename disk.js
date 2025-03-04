let rqs = [176,79,34,60,92,11,41,114];
let head = 50;


let totalHead = 0;
let headMovement = [];

for (let rq of rqs) {
  
    let distance = Math.abs(head - rq);
    totalHead +=distance
    head = rq;
    headMovement.push(head)
}

console.log("Total Head Movements:", totalHead);