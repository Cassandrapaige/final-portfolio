import typeError from './typeError'

const range = (start, end, step = 1) => {
    let output = [];

    if(typeof end === "undefined") {
        end = start;
        start = 0;
    };

    if(typeError([start, end, step], ["number"])) return;

    for(let i = start; i <= end; i += step) {
        output.push(i);
    };

    return output;
};

export default range;