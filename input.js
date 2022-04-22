
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function vypocitej() {
    let a = parseInt(document.querySelector('input[name="cislo1').value);
    let b = parseInt(document.querySelector('input[name="cislo2').value);
    return pouzijOperaci(a, b);
}

function pouzijOperaci(a, b) {
    let vyberOperace = document.getElementById("operace");
    let operace = vyberOperace.value;
    if (operace === "+") {
        return a + b;
    }
    if (operace === "-") {
        return a - b;
    }
    if (operace === "*") {
        return a * b;
    }
    if (operace === ":") {
        return a / b;
    }
}


function vypisVysledek() {
    document.querySelector('#vysledek > span').innerHTML = vypocitej();
}

document.querySelectorAll('select').forEach((element) => {
    element.addEventListener('change', vypisVysledek);
});

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypisVysledek);
});
