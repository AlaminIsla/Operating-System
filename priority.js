// Input data
const processes = ["P1", "P2", "P3", "P4"]; 
const priority = [10, 20, 30, 40]; 
const arrivalTime = [0, 1, 2, 4]; 
const burstTime = [5, 4, 2, 1]; 

// Arrays to store results
const completionTime = [0, 0, 0, 0]; 
const turnaroundTime = [0, 0, 0, 0];
const waitingTime = [0, 0, 0, 0];

let remainingTime = [...burstTime];


for (let t = 0; t <= 12; t++) {
    let selectedProcess = -1;
    let highestPriority = -1;

    
    for (let i = 0; i < processes.length; i++) {
        if (arrivalTime[i] <= t && remainingTime[i] > 0 && priority[i] > highestPriority) {
            highestPriority = priority[i];
            selectedProcess = i;
        }
    }

    
    if (selectedProcess !== -1) {
        remainingTime[selectedProcess]--;

        // 
        if (remainingTime[selectedProcess] === 0) {
            completionTime[selectedProcess] = t + 1; // CT = current time + 1
            turnaroundTime[selectedProcess] = completionTime[selectedProcess] - arrivalTime[selectedProcess]; // TAT = CT - AT
            waitingTime[selectedProcess] = turnaroundTime[selectedProcess] - burstTime[selectedProcess]; // WT = TAT - BT
        }
    }
}


console.log("Process\tAT\tBT\tCT\tTAT\tWT");
for (let i = 0; i < processes.length; i++) {
    console.log(`${processes[i]}\t${arrivalTime[i]}\t${burstTime[i]}\t${completionTime[i]}\t${turnaroundTime[i]}\t${waitingTime[i]}`);
}