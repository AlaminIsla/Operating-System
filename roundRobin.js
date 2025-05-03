const processes = ['P1', 'P2', 'P3', 'P4'];
const arrival = [0, 1, 2, 4];
const burst = [5, 4, 2, 1];

const n = processes.length;
let remaining = burst.slice();  
let completion = Array(n).fill(0);
let waiting = Array(n).fill(0);
let turnaround = Array(n).fill(0);
let response = Array(n).fill(-1);

let time = 0;
let quantum = 2;
let queue = [];
let visited = Array(n).fill(false);


function addNewProcesses(t) {
  for (let i = 0; i < n; i++) {
    if (arrival[i] <= t && !visited[i]) {
      queue.push(i);
      visited[i] = true;
    }
  }
}

addNewProcesses(time);

while (queue.length > 0) {
  let idx = queue.shift(); 

  if (response[idx] === -1) {
    response[idx] = time - arrival[idx];
  }

  if (remaining[idx] > quantum) {
    time += quantum;
    remaining[idx] -= quantum;
  } else {
    time += remaining[idx];
    remaining[idx] = 0;
    completion[idx] = time;
  }


  addNewProcesses(time);


  if (remaining[idx] > 0) {
    queue.push(idx);
  }
}


for (let i = 0; i < n; i++) {
  turnaround[i] = completion[i] - arrival[i];
  waiting[i] = turnaround[i] - burst[i];
}

console.log("Process | Arrival | Burst | CT | WT | TAT | RT");
for (let i = 0; i < n; i++) {
  console.log(
    `${processes[i]}       |   ${arrival[i]}     |  ${burst[i]}   | ${completion[i]}  | ${waiting[i]}  |  ${turnaround[i]}   |  ${response[i]}`
  );
}
