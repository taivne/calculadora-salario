
function calcularSalario() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const horasMes = parseFloat(document.getElementById('horasMes').value);

    if (!validarEntrada(valorHora, horasMes)) {
        return;
    }

    const salarioBruto = valorHora * horasMes;
    const descontoINSS = salarioBruto * 0.08;
    const descontoSindicato = salarioBruto * 0.05;
    const totalDescontos = salarioBruto * 0.11 + descontoINSS + descontoSindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    const resultsDiv = document.querySelector('.nota-fiscal');
    resultsDiv.style.display = 'block';  

    typeEffect('salarioBruto', `Salário Bruto: R$${salarioBruto.toFixed(2)}`, 0, () => {
        typeEffect('descontoINSS', `Desconto INSS: R$${descontoINSS.toFixed(2)}`, 0, () => {
            typeEffect('descontoSindicato', `Desconto Sindicato: R$${descontoSindicato.toFixed(2)}`, 0, () => {
                typeEffect('totalDescontos', `Total de Descontos: R$${totalDescontos.toFixed(2)}`, 0, () => {
                    typeEffect('salarioLiquido', `Salário Líquido: R$${salarioLiquido.toFixed(2)}`, 0);
                });
            });
        });
    });
}

function typeEffect(elementId, fullText, delay, callback) {
    const element = document.getElementById(elementId);
    let i = 0;
    element.textContent = '';  
    setTimeout(() => {
        const typing = setInterval(() => {
            if (i < fullText.length) {
                element.textContent += fullText.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                if (callback) callback(); 
            }
        }, 50);  
    }, delay);
}

function validarEntrada(valorHora, horasMes) {
    if (isNaN(valorHora) || isNaN(horasMes) || valorHora <= 0 || horasMes <= 0) {
        alert("Por favor, insira valores positivos e válidos para ambas as entradas.");
        return false;
    }
    return true;
}

