let a, b, c, a1, u, v, a2, b2, c2;

function randint(max) {
    return Math.floor(Math.random() * max);
}

function isSquare(num) {
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt);
}

function formatSolution(value) {
    return Number.isInteger(value) ? value : value.toFixed(1);
}

function FindAbc() {
    document.getElementById('Ansa').innerHTML = "";
    a = randint(20) - 10;
    b = randint(20) - 10;
    c = randint(20) - 10;

    if (a === 0) a = 1;
    if (b === 0) b = -1;

    let ta = (a === 1) ? "x²+" : (a === -1) ? "-x²+" : a + "x²+";
    let tb = (b === 1) ? "x+" : (b === -1) ? "-x+" : b + "x+";
    let tc = (c === 0) ? "" : (c < 0) ? c : "+" + c;

    document.getElementById('Qa').innerHTML = `f(x)= ${ta}${tb}${tc}`;
}

function FormeFac() {
    document.getElementById('Ansb').innerHTML = "";
    a1 = randint(9) + 2;
    u = randint(9) + 2;
    v = randint(9) + 1;

    document.getElementById('Qb').innerHTML = `f(x)= ${a1}(x - ${u})(x - ${v})`;
}

function ResEq() {
    document.getElementById('Ansc').innerHTML = "";
    a2 = randint(20) - 10;
    b2 = randint(20) - 10;
    c2 = randint(20) - 10;

    let answer = b2 * b2 - 4 * a2 * c2;

    while (answer < 0 || !Number.isInteger((-b2 - Math.sqrt(answer)) / (2 * a2))) {
        a2 = randint(20) - 10;
        b2 = randint(20) - 10;
        c2 = randint(20) - 10;
        answer = b2 * b2 - 4 * a2 * c2;
    }

    let ta = (a2 === 1) ? "x²+" : (a2 === -1) ? "-x²+" : a2 + "x²+";
    let tb = (b2 === 1) ? "x" : (b2 === -1) ? "-x" : b2 + "x";
    let tc = (c2 === 0) ? "" : (c2 < 0) ? c2 : "+" + c2;

    document.getElementById('Qc').innerHTML = `f(x)= ${ta}${tb}${tc}`;
}

function checkA() {
    const ansa = document.getElementById('a').value;
    const ansb = document.getElementById('b').value;
    const ansc = document.getElementById('c').value;

    if (ansa == a && ansb == b && ansc == c) {
        document.getElementById('Ansa').innerHTML = "Bonne réponse";
    } else {
        document.getElementById('Ansa').innerHTML = `Mauvaise réponse, c'était: a=${a} b=${b} c=${c}`;
    }
}

function checkB() {
    let b1 = a1 * (u + v);
    let c1 = a1 * u * v;

    if (document.getElementById('ffa').value == `${a1}x²-${b1}x-${c1}`) {
        document.getElementById('Ansb').innerHTML = "Bonne réponse";
    } else {
        document.getElementById('Ansb').innerHTML = `Mauvaise réponse, c'était: ${a1}x²-${b1}x-${c1}`;
    }
}

function checkC() {
    const answer = b2 * b2 - 4 * a2 * c2;
    const resb = document.getElementById('resb').value;
    const rw = (document.getElementById('resa').value == answer) ? 1 : 0;
    const resb1 = resb.toLowerCase();

    if (rw === 1) {
        document.getElementById('Ansc').innerHTML = "Bonne réponse, tu as trouvé Δ";
    } else {
        document.getElementById('Ansc').innerHTML = "Mauvaise réponse, Δ= " + answer;
    }

    if (answer < 0) {
        const msg = (resb1 === "aucun" || resb1 === "aucune" || resb1 === "s={}") ?
            (rw === 0 ? "mais tu as trouvé la bonne réponse: S={}" : "et tu as trouvé la bonne réponse: S={}") :
            (rw === 0 ? "et tu n'as pas trouvé la solution: S={}" : "mais tu n'as pas trouvé la solution: S={}");
        document.getElementById('Ansc1').innerHTML = msg;
    } else if (answer === 0) {
        const sol = formatSolution(-b2 / (2 * a2));
        const msg = (resb == sol) ?
            (rw === 0 ? `mais tu as trouvé la seule solution: S={${sol}}` : `et tu as trouvé la seule solution: S={${sol}}`) :
            (rw === 0 ? `et tu n'as pas trouvé la seule solution: S={${sol}}` : `mais tu n'as pas trouvé la seule solution: S={${sol}}`);
        document.getElementById('Ansc1').innerHTML = msg;
    } else {
        const sol1 = formatSolution((-b2 - Math.sqrt(answer)) / (2 * a2));
        const sol2 = formatSolution((-b2 + Math.sqrt(answer)) / (2 * a2));
        const expectedSolutions1 = `s={${sol1};${sol2}}`;
        const expectedSolutions2 = `s={${sol2};${sol1}}`;

        const msg = (resb1 === expectedSolutions1 || resb1 === expectedSolutions2) ?
            (rw === 0 ? `mais tu as trouvé les solutions: S={${sol1};${sol2}}` : `et tu as trouvé les solutions: S={${sol1};${sol2}}`) :
            (rw === 0 ? `et tu n'as pas trouvé les solutions: S={${sol1};${sol2}}` : `mais tu n'as pas trouvé les solutions: S={${sol1};${sol2}}`);
        
        document.getElementById('Ansc1').innerHTML = msg;
    }
}
