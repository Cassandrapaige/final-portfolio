const typeError = (args, types) => {
    let type = i => types[i] || types[types.length - 1];

    args.map((arg, i) => {
        if(typeof arg !== type(i)) {
            throw new TypeError("You have inputted the incorrect type")
        };
    });
};

export default typeError;