const data = [
    {pro: 1, arr: 0, bru: 7, completed: false},
    {pro: 2, arr: 1, bru: 4, completed: false},
    {pro: 3, arr: 2, bru: 15, completed: false},
    {pro: 4, arr: 3, bru: 11, completed: false},
    {pro: 5, arr: 4, bru: 20, completed: false},
    {pro: 6, arr: 4, bru: 9, completed: false},

];


data.sort((a, b) => a.arr - b.arr);

function sjfScheduling(data) {
    let time = 0;
    let completed = 0;
    let queue = [];
    let result = [];

    while (completed < data.length) {


        for (let i = 0; i < data.length; i++) {
            if (data[i].arr <= time && !data[i].completed) {
                queue.push(data[i]);
                data[i].completed = true;
            }
        }


        if (queue.length > 0) {
            queue.sort((a, b) => a.bru - b.bru);


            let process = queue.shift();
            process.completionTime = time + process.bru;
            process.turnaroundTime = process.completionTime - process.arr;
            process.waitingTime = process.turnaroundTime - process.bru;

            result.push(process);
            time += process.bru;
            completed++;
        } else {
            time++;
        }
    }

    return result;
}

let result = sjfScheduling(data);


result.forEach(process => {
    console.log(`Process: ${process.pro} Arrival: ${process.arr} Burst: ${process.bru} Completion: ${process.completionTime} Turnaround: ${process.turnaroundTime} Waiting: ${process.waitingTime}`);
});
