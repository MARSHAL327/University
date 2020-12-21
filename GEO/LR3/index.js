function calc(a, b, c) {
    let p = 0;
    let s = 0;

    p = (a + b + c) / 2;

    s = Math.sqrt( p * ((p - a) * (p - b) * (p - c))  );

    result.innerHTML = 
    `a = ${a} <br>
    b = ${b} <br>
    c = ${c} <br>
    <br><br>
    p = ${p} <br>
    s = ${s}
    `
}

function calc2(x1, x2, y1, y2) {
    let s = 0;

    s = ( (x1 + x2) / 2 ) * (Math.abs(y1 - y2));

    result.innerHTML = 
    `x1 = ${x1} <br>
    x2 = ${x2} <br>
    y1 = ${y1} <br>
    y2 = ${y2} <br>
    <br><br>
    s = ${s}
    `
}

