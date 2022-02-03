const countSignals = (frequencies, filterRanges) => {
//find the highest num in the 0th pos, and lowest in the 1st pos
//reutrn the number of freqs in that range

    let min = -Infinity;
    let max = Infinity;
    for (let range of filterRanges){
        if (range[0] > min) min = range[0];
        if (range[1] < max) max = range[1];
    }
    return frequencies.filter( freq => freq >=min && freq <= max ).length;
};

freqs = [8, 15, 14, 16, 21];
filters = [[10,17], [13, 15], [13,17]];
console.log(countSignals(freqs, filters));

