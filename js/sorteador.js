const submeterformulario = () => {
    const rangeinicial = document.getElementById("rangeinicial").value;
    const rangefinal = document.getElementById("rangefinal").value;
    const minhaaposta = document.getElementById("minhaaposta").value;
    realizarsorteio(+rangeinicial, +rangefinal, +minhaaposta);
}

const realizarsorteio = (rangeinicial, rangefinal, minhaaposta) => {


if (!rangeinicial) {
    alert('informe o range inicial!');
    return;
}
if (!rangefinal) {
    alert('informe o range final!');
    return;
}
if (!minhaaposta) {
    alert('informe sua aposta!');
    return;
}
    const numerosorteado = novosorteio(rangeinicial, rangefinal);
    if (numerosorteado === minhaaposta) {
        alert('parabéns! você acertou');
        return;
    }
    alert(`errou! o numero sorteado foi ${numerosorteado}`);
}
const novosorteio = (rangeinicial, rangefinal) => {
    return (Math.floor(Math.random() * (rangefinal - rangeinicial + 1)) + rangeinicial)
}