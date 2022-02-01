function findMinimumDays(durations) {
    let days = 0;
    durations = durations.sort();
    while (durations.length){
        let time = durations.pop();
        for (let i = durations.length - 1; i >= 0; i--){
            if ( time + durations[i] <= 3){
                time += durations[i];
                durations.splice(i, 1);
            }
        }
        days += 1;
        console.log(time);
    }
    return days;
}

let arr = [1.9, 1.04, 1.25, 2.5, 1.75];

console.log(findMinimumDays(arr))