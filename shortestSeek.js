let reqSeq = [176, 79, 34, 60, 92, 11, 41, 114];
let head = 50;

let remainingRequests = [];
let order = [];
let totalSeekTime = 0;  
while (reqSeq.length > 0) {
    let results = reqSeq.map(req => Math.abs(req - head));
    let minDiffIndex = results.indexOf(Math.min(...results));
    let closestRequest = reqSeq[minDiffIndex];
    order.push(closestRequest);
    reqSeq.splice(minDiffIndex, 1);
    totalSeekTime += Math.abs(closestRequest - head);  
    head = closestRequest;
}

console.log("Total Seek Time:", totalSeekTime);





