var deret = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]

function lebihdari15(x) {
    console.log(x.filter(x => {
        return x > 15;
    }));
}
lebihdari15(deret)