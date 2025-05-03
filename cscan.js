let requests = [0, 14, 41, 53, 65, 67, 98, 122, 124, 183, 199];
let head = 53;
let diskSize = 200; 

let left = [];
let right = [];


for (let i = 0; i < requests.length; i++) {
  if (requests[i] >= head) {
    right.push(requests[i]);
  } else {
    left.push(requests[i]);
  }
}


function bubbleSort(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(left, true);
bubbleSort(right, true);


let totalSeek = 0;
let current = head;


for (let i = 0; i < right.length; i++) {
  totalSeek += Math.abs(current - right[i]);
  current = right[i];
}


if (current != diskSize - 1) {
  totalSeek += Math.abs(current - (diskSize - 1));
  current = 0; 
  totalSeek += diskSize - 1;
} else {
  current = 0;
  totalSeek += diskSize - 1;
}


for (let i = 0; i < left.length; i++) {
  totalSeek += Math.abs(current - left[i]);
  current = left[i];
}

console.log("Total Seek Distance:", totalSeek); // Output: 386
