let requests = [14, 41, 53, 65, 67, 98, 122, 124, 183, 199];
let head = 53;

let left = [];
let right = [];


for (let i = 0; i < requests.length; i++) {
  if (requests[i] < head) {
    left.push(requests[i]);
  } else {
    right.push(requests[i]);
  }
}


function bubbleSort(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (
        (ascending && arr[j] > arr[j + 1]) ||
        (!ascending && arr[j] < arr[j + 1])
      ) {
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(left, false);     
bubbleSort(right, true);     


let seekSequence = [...right, ...left];
let totalSeek = 0;
let current = head;

for (let i = 0; i < seekSequence.length; i++) {
  totalSeek += Math.abs(current - seekSequence[i]);
  current = seekSequence[i];
}

console.log("Total Seek Distance:", totalSeek);  
