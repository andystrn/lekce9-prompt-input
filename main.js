const sirkaMista = 62;
const vyskaMista = 70;
const hloubkaMista = 80;

let sirkaPracky = parseInt(prompt('Zadej šířku pračky'));
let vyskaPracky = parseInt(prompt('Zadej výšku pračky'));
let hloubkaPracky = parseInt(prompt('Zadej šířku pračky'));

// vypsání výsledků pomocí alert()
if (sirkaPracky < sirkaMista && vyskaPracky < vyskaMista && hloubkaPracky < hloubkaMista) {
    alert("Huraa! Pračka se vleze!");
} else {
    alert("Pračka se nevleze...:-/");
}

