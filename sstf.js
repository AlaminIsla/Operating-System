let head = 50;
let requests = [176, 79, 34, 60, 92, 11, 41, 114];
let totalSeek = 0;

while (requests.length > 0) {
    let minDistance = Infinity;
    let closestIndex = -1;

    for (let i = 0; i < requests.length; i++) {
        let distance = Math.abs(head - requests[i]);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
        }
    }


    totalSeek += minDistance;
    head = requests[closestIndex];

    requests.splice(closestIndex, 1);
}

console.log("Total Seek Distance =", totalSeek);
