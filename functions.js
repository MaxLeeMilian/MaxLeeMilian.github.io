
let a
let b
let c
let a1
let u
let v

function randint(max){
    return Math.floor(Math.random() * max)
}
function FindAbc() {
    document.getElementById('Ansa').innerHTML = ""
    a = randint(20) - 10;
    b = randint(20) - 10;
    c = randint(20) - 10;
    let ta = a + "x²+"
    let tb = b + "x+"
    if (a == 0){
        a += 1;      
    }
    if(a==1){
        ta = "x²+";
    }
    if (b == 0){
        b -= 1;
        tb = b + "x+"
    }
    if(b==1){
        tb = "x+";
    }
    if(c == 0){
        document.getElementById('Qa').innerHTML = ta + tb;
    }else{document.getElementById('Qa').innerHTML = ta + tb+c;}
}
function FormeFac() {
    document.getElementById('Ansb').innerHTML = ""
    a1 = randint(9)+2;
    u = randint(9)+2;
    v = randint(9)+1;
    document.getElementById('Qb').innerHTML = a1+'(x - '+u+')(x - '+v+')'
}

function checkA() {
    const ansa = document.getElementById('a').value;
    const ansb = document.getElementById('b').value;
    const ansc = document.getElementById('c').value;
    if (ansa == a && ansb == b && ansc == c){
        document.getElementById('Ansa').innerHTML = "Bonne reponse";
    }else{
        document.getElementById('Ansa').innerHTML = "Mauvaise reponse, c'etait: a="+a+" b="+b+" c="+c;
    }
}
function checkB(){
    let b1 = a1*v + a1*u
    let c1 = a1*u*v
    if (document.getElementById('ffa').value == a1+"x²-"+b1+"x-"+c1){
        document.getElementById('Ansb').innerHTML = "Bonne reponse"
    }else{
        document.getElementById('Ansb').innerHTML = "Mauvaise reponse, c'etait: "+a1+"x²-"+b1+"x-"+c1;
    }
}