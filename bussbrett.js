var runde = 0;
var knapp = Knapp();
knapp.onclick = bussflytt;

function bussflytt() {
    if (runde == 0){
        Buss1()
        Buss2()
        Buss3()
        Buss4()
        Buss5()
        Buss6()
        Buss7()
        Buss8()
        Buss9()
        Buss10()
        Buss11()
        Buss12()
        Buss13()
        Buss14()
        Buss15()
        Buss16()
        Buss17()
        Buss18()
        Buss19()
        Buss20()
    }
    runde += 1;
    if (runde == 6){
        runde = 1;
    }
    buss1.bussflytt()
    buss2.bussflytt()
    buss3.bussflytt()
    buss4.bussflytt()
    buss5.bussflytt()
    buss6.bussflytt()
    buss7.bussflytt()
    buss8.bussflytt()
    buss9.bussflytt()
    buss10.bussflytt()
    buss11.bussflytt()
    buss12.bussflytt()
    buss13.bussflytt()
    buss14.bussflytt()
    buss15.bussflytt()
    buss16.bussflytt()
    buss17.bussflytt()
    buss18.bussflytt()
    buss19.bussflytt()
    buss20.bussflytt()
}

function Knapp() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '60px';
    el.style.height = '30px';
    document.body.appendChild(el);
}
function Buss1() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 1;
    el.style.position = 'fixed';
    el.style.left = b1r1x
    el.style.top = b1r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b1r1x
            el.style.top = b1r1y
        }
        if (runde == 2){
            el.style.left = b1r2x
            el.style.top = b1r2y
        }
        if (runde == 3){
            el.style.left = b1r3x
            el.style.top = b1r3y
        }
        if (runde == 4){
            el.style.left = b1r4x
            el.style.top = b1r4y
        }
        if (runde == 5){
            el.style.left = b1r5x
            el.style.top = b1r5y
        }
    };
    return el;
}
var buss1 = Buss1();
function Buss2() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 2;
    el.style.position = 'fixed';
    el.style.left = b2r1x
    el.style.top = b2r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b2r1x
            el.style.top = b2r1y
        }
        if (runde == 2){
            el.style.left = b2r2x
            el.style.top = b2r2y
        }
        if (runde == 3){
            el.style.left = b2r3x
            el.style.top = b2r3y
        }
        if (runde == 4){
            el.style.left = b2r4x
            el.style.top = b2r4y
        }
        if (runde == 5){
            el.style.left = b2r5x
            el.style.top = b2r5y
        }
    };
    return el;
}
var buss2 = Buss2();
function Buss3() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 3;
    el.style.position = 'fixed';
    el.style.left = b3r1x
    el.style.top = b3r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b3r1x
            el.style.top = b3r1y
        }
        if (runde == 2){
            el.style.left = b3r2x
            el.style.top = b3r2y
        }
        if (runde == 3){
            el.style.left = b3r3x
            el.style.top = b3r3y
        }
        if (runde == 4){
            el.style.left = b3r4x
            el.style.top = b3r4y
        }
        if (runde == 5){
            el.style.left = b3r5x
            el.style.top = b3r5y
        }
    };
    return el;
}
var buss3 = Buss3();
function Buss4() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 4;
    el.style.position = 'fixed';
    el.style.left = b4r1x
    el.style.top = b4r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b4r1x
            el.style.top = b4r1y
        }
        if (runde == 2){
            el.style.left = b4r2x
            el.style.top = b4r2y
        }
        if (runde == 3){
            el.style.left = b4r3x
            el.style.top = b4r3y
        }
        if (runde == 4){
            el.style.left = b4r4x
            el.style.top = b4r4y
        }
        if (runde == 5){
            el.style.left = b4r5x
            el.style.top = b4r5y
        }
    };
    return el;
}
var buss4 = Buss4();
function Buss5() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 5;
    el.style.position = 'fixed';
    el.style.left = b5r1x
    el.style.top = b5r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b5r1x
            el.style.top = b5r1y
        }
        if (runde == 2){
            el.style.left = b5r2x
            el.style.top = b5r2y
        }
        if (runde == 3){
            el.style.left = b5r3x
            el.style.top = b5r3y
        }
        if (runde == 4){
            el.style.left = b5r4x
            el.style.top = b5r4y
        }
        if (runde == 5){
            el.style.left = b5r5x
            el.style.top = b5r5y
        }
    };
    return el;
}
var buss5 = Buss5();
function Buss6() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 6;
    el.style.position = 'fixed';
    el.style.left = b6r1x
    el.style.top = b6r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b6r1x
            el.style.top = b6r1y
        }
        if (runde == 2){
            el.style.left = b6r2x
            el.style.top = b6r2y
        }
        if (runde == 3){
            el.style.left = b6r3x
            el.style.top = b6r3y
        }
        if (runde == 4){
            el.style.left = b6r4x
            el.style.top = b6r4y
        }
        if (runde == 5){
            el.style.left = b6r5x
            el.style.top = b6r5y
        }
    };
    return el;
}
var buss6 = Buss6();
function Buss7() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 7;
    el.style.position = 'fixed';
    el.style.left = b7r1x
    el.style.top = b7r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b7r1x
            el.style.top = b7r1y
        }
        if (runde == 2){
            el.style.left = b7r2x
            el.style.top = b7r2y
        }
        if (runde == 3){
            el.style.left = b7r3x
            el.style.top = b7r3y
        }
        if (runde == 4){
            el.style.left = b7r4x
            el.style.top = b7r4y
        }
        if (runde == 5){
            el.style.left = b7r5x
            el.style.top = b7r5y
        }
    };
    return el;
}
var buss7 = Buss7();
function Buss8() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 8;
    el.style.position = 'fixed';
    el.style.left = b8r1x
    el.style.top = b8r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b8r1x
            el.style.top = b8r1y
        }
        if (runde == 2){
            el.style.left = b8r2x
            el.style.top = b8r2y
        }
        if (runde == 3){
            el.style.left = b8r3x
            el.style.top = b8r3y
        }
        if (runde == 4){
            el.style.left = b8r4x
            el.style.top = b8r4y
        }
        if (runde == 5){
            el.style.left = b8r5x
            el.style.top = b8r5y
        }
    };
    return el;
}
var buss8 = Buss8();
function Buss9() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 9;
    el.style.position = 'fixed';
    el.style.left = b9r1x
    el.style.top = b9r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b9r1x
            el.style.top = b9r1y
        }
        if (runde == 2){
            el.style.left = b9r2x
            el.style.top = b9r2y
        }
        if (runde == 3){
            el.style.left = b9r3x
            el.style.top = b9r3y
        }
        if (runde == 4){
            el.style.left = b9r4x
            el.style.top = b9r4y
        }
        if (runde == 5){
            el.style.left = b9r5x
            el.style.top = b9r5y
        }
    };
    return el;
}
var buss9 = Buss9();
function Buss10() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 10;
    el.style.position = 'fixed';
    el.style.left = b10r1x
    el.style.top = b10r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b10r1x
            el.style.top = b10r1y
        }
        if (runde == 2){
            el.style.left = b10r2x
            el.style.top = b10r2y
        }
        if (runde == 3){
            el.style.left = b10r3x
            el.style.top = b10r3y
        }
        if (runde == 4){
            el.style.left = b10r4x
            el.style.top = b10r4y
        }
        if (runde == 5){
            el.style.left = b10r5x
            el.style.top = b10r5y
        }
    };
    return el;
}
var buss10 = Buss10();
function Buss11() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 11;
    el.style.position = 'fixed';
    el.style.left = b11r1x
    el.style.top = b11r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b11r1x
            el.style.top = b11r1y
        }
        if (runde == 2){
            el.style.left = b11r2x
            el.style.top = b11r2y
        }
        if (runde == 3){
            el.style.left = b11r3x
            el.style.top = b11r3y
        }
        if (runde == 4){
            el.style.left = b11r4x
            el.style.top = b11r4y
        }
        if (runde == 5){
            el.style.left = b11r5x
            el.style.top = b11r5y
        }
    };
    return el;
}
var buss11 = Buss11();
function Buss12() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 12;
    el.style.position = 'fixed';
    el.style.left = b12r1x
    el.style.top = b12r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b12r1x
            el.style.top = b12r1y
        }
        if (runde == 2){
            el.style.left = b12r2x
            el.style.top = b12r2y
        }
        if (runde == 3){
            el.style.left = b12r3x
            el.style.top = b12r3y
        }
        if (runde == 4){
            el.style.left = b12r4x
            el.style.top = b12r4y
        }
        if (runde == 5){
            el.style.left = b12r5x
            el.style.top = b12r5y
        }
    };
    return el;
}
var buss12 = Buss12();
function Buss13() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 13;
    el.style.position = 'fixed';
    el.style.left = b13r1x
    el.style.top = b13r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b13r1x
            el.style.top = b13r1y
        }
        if (runde == 2){
            el.style.left = b13r2x
            el.style.top = b13r2y
        }
        if (runde == 3){
            el.style.left = b13r3x
            el.style.top = b13r3y
        }
        if (runde == 4){
            el.style.left = b13r4x
            el.style.top = b13r4y
        }
        if (runde == 5){
            el.style.left = b13r5x
            el.style.top = b13r5y
        }
    };
    return el;
}
var buss13 = Buss13();
function Buss14() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 14;
    el.style.position = 'fixed';
    el.style.left = b14r1x
    el.style.top = b14r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b14r1x
            el.style.top = b14r1y
        }
        if (runde == 2){
            el.style.left = b14r2x
            el.style.top = b14r2y
        }
        if (runde == 3){
            el.style.left = b14r3x
            el.style.top = b14r3y
        }
        if (runde == 4){
            el.style.left = b14r4x
            el.style.top = b14r4y
        }
        if (runde == 5){
            el.style.left = b14r5x
            el.style.top = b14r5y
        }
    };
    return el;
}
var buss14 = Buss14();
function Buss15() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 15;
    el.style.position = 'fixed';
    el.style.left = b15r1x
    el.style.top = b15r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b15r1x
            el.style.top = b15r1y
        }
        if (runde == 2){
            el.style.left = b15r2x
            el.style.top = b15r2y
        }
        if (runde == 3){
            el.style.left = b15r3x
            el.style.top = b15r3y
        }
        if (runde == 4){
            el.style.left = b15r4x
            el.style.top = b15r4y
        }
        if (runde == 5){
            el.style.left = b15r5x
            el.style.top = b15r5y
        }
    };
    return el;
}
var buss15 = Buss15();
function Buss16() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 16;
    el.style.position = 'fixed';
    el.style.left = b16r1x
    el.style.top = b16r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b16r1x
            el.style.top = b16r1y
        }
        if (runde == 2){
            el.style.left = b16r2x
            el.style.top = b16r2y
        }
        if (runde == 3){
            el.style.left = b16r3x
            el.style.top = b16r3y
        }
        if (runde == 4){
            el.style.left = b16r4x
            el.style.top = b16r4y
        }
        if (runde == 5){
            el.style.left = b16r5x
            el.style.top = b16r5y
        }
    };
    return el;
}
var buss16 = Buss16();
function Buss17() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 17;
    el.style.position = 'fixed';
    el.style.left = b17r1x
    el.style.top = b17r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b17r1x
            el.style.top = b17r1y
        }
        if (runde == 2){
            el.style.left = b17r2x
            el.style.top = b17r2y
        }
        if (runde == 3){
            el.style.left = b17r3x
            el.style.top = b17r3y
        }
        if (runde == 4){
            el.style.left = b17r4x
            el.style.top = b17r4y
        }
        if (runde == 5){
            el.style.left = b17r5x
            el.style.top = b17r5y
        }
    };
    return el;
}
var buss17 = Buss17();
function Buss18() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 18;
    el.style.position = 'fixed';
    el.style.left = b18r1x
    el.style.top = b18r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b18r1x
            el.style.top = b18r1y
        }
        if (runde == 2){
            el.style.left = b18r2x
            el.style.top = b18r2y
        }
        if (runde == 3){
            el.style.left = b18r3x
            el.style.top = b18r3y
        }
        if (runde == 4){
            el.style.left = b18r4x
            el.style.top = b18r4y
        }
        if (runde == 5){
            el.style.left = b18r5x
            el.style.top = b18r5y
        }
    };
    return el;
}
var buss18 = Buss18();
function Buss19() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 19;
    el.style.position = 'fixed';
    el.style.left = b19r1x
    el.style.top = b19r1y
    document.body.appendChild(el);
    el.bussflytt = function() {
        if (runde == 1){
            el.style.left = b19r1x
            el.style.top = b19r1y
        }
        if (runde == 2){
            el.style.left = b19r2x
            el.style.top = b19r2y
        }
        if (runde == 3){
            el.style.left = b19r3x
            el.style.top = b19r3y
        }
        if (runde == 4){
            el.style.left = b19r4x
            el.style.top = b19r4y
        }
        if (runde == 5){
            el.style.left = b19r5x
            el.style.top = b19r5y
        }
    };
    return el;
}
var buss19 = Buss19();
function Buss20() {
    var el = document.createElement('div');
    el.style.backgroundColor = 'blue';
    el.style.width = '30px';
    el.style.height = '60px';
    el.style.color = 'white';
    el.innerHTML = 20;
    el.style.position = 'fixed';
    el.style.left = b20r1x
    el.style.top = b20r1y
    document.body.appendChild(el);
    el.bussflytt = function () {
        if (runde == 1){
            el.style.left = b20r1x
            el.style.top = b20r1y
        }
        if (runde == 2){
            el.style.left = b20r2x
            el.style.top = b20r2y
        }
        if (runde == 3){
            el.style.left = b20r3x
            el.style.top = b20r3y
        }
        if (runde == 4){
            el.style.left = b20r4x
            el.style.top = b20r4y
        }
        if (runde == 5){
            el.style.left = b20r5x
            el.style.top = b20r5y
        }
    };
    return el;
}
var buss20 = Buss20();