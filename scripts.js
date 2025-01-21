function toggleCalculadora() {
    const content = document.getElementById('calculadora-content');
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
}

function insert(n) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML += n;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function calcular() {
    const resultado = document.getElementById('resultado');
    try {
        resultado.innerHTML = eval(resultado.innerHTML.replace('%', '/100'));
    } catch {
        resultado.innerHTML = "Erro";
    }
}

function raizQuadrada() {
    const resultado = document.getElementById('resultado');
    try {
        const valor = eval(resultado.innerHTML);
        resultado.innerHTML = Math.sqrt(valor);
    } catch {
        resultado.innerHTML = "Erro";
    }
}