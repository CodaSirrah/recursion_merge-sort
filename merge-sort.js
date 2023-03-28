function mergeSort(a) {
    // base case
    if (a.length <= 1) return a;

    // split array left and right;
    let l = [];
    let r = [];
    for (let i = 0; i < a.length; i++) {
        (i < Math.round(a.length / 2)) ?
        l.push(a[i]) : r.push(a[i]);
    }
    l = mergeSort(l);
    r = mergeSort(r);
    return merge(l, r);
    }

// merges arrays by comparing each iteration from left and right arrays
function merge(l, r) {
    let m = [];
    let i = 0;
    let j = 0;
    while (i < l.length && j < r.length) {
        if (l[i] <= r[j]) {
            m.push(l[i]);
            i++;
        } else {
            m.push(r[j]);
            j++;
        }
    }

    // any numbers leftover from one of the arrays can be added without comparison, since each array is already individually sorted
    while (i < l.length) {
        m.push(l[i]);
        i++
    }
    while (j < r.length) {
        m.push(r[j]);
        j++
    }
    return m;
}

let answer = (mergeSort([ 1, -100, 0, 5, 4, 1004, -2, 1006, 2, 1003, 9, 230, 232, 234, 219]));
console.log(answer);