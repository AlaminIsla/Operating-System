let reqSeq = [137, 240, 179, 75, 118, 29, 15, 51];
let head = 55
reqSeq.push(head);


let sortedSeq = reqSeq.sort((a, b) => a - b);

let headIndex = sortedSeq.indexOf(head);


let seekTime = 0;

let scanOrder = [];

for (let i = headIndex; i < sortedSeq.length; i++) {
    scanOrder.push(sortedSeq[i]);
}


for (let i = headIndex - 1; i >= 0; i--) {
    scanOrder.push(sortedSeq[i]);
}


for (let i = 0; i < scanOrder.length - 1; i++) {
    seekTime += Math.abs(scanOrder[i + 1] - scanOrder[i]);
}


console.log("Total Seek Time:", seekTime);
