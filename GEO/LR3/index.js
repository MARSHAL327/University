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

