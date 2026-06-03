// Seleciona todos os elementos que têm a classe 'contador'
const contadores = document.querySelectorAll(".contador");

// Define a data alvo para o Objetivo (Ano-Mês-DiaTHora:Minuto:Segundo)
const tempoObjetivo1 = new Date("2027-12-31T23:59:59");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual; // Diferença em milissegundos

    // Se o tempo já passou, avisa o usuário
    if (tempoFinal < 0) {
        return "Prazo encerrado!";
    }

    // Conversões matemáticas brutas
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Ajuste com o operador de resto (%) para não acumular
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
    // Retorna a string formatada
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

// Executa a função e coloca o resultado no primeiro contador [0]
contadores[0].textContent = calculaTempo(tempoObjetivo1);
