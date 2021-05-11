
const calcular = document.getElementById('calcular')

function imc() {

    
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const imc = (peso / (altura * altura)).toFixed(1)

        let classificação = ''

        if (imc < 16) {

            classificação = 'baixo peso, muito grave!'

        }
        else if (imc >= 16 && imc <= 16.99) {
            classificação = 'baixo peso grave'
        }
        else if (imc >= 17 && imc <= 18.49) {
            classificação = 'baixo peso'
        }
        else if (imc >= 18.50 && imc <= 25.49) {
            classificação = 'peso normal'
        }
        else if (imc >= 25 && imc <= 29.99) {
            classificação = 'Sobrepeso'
        }
        else if (imc >= 30 && imc <= 34.99) {
            classificação = 'Obesidade Grau I'
        }
        else if (imc >= 35 && imc <= 39.99) {
            classificação = 'Obesidade Grau II'
        }
        else if (imc > 40) {
            classificação = 'Obesidade Grau III'
        }

        resultado.textContent= (nome + ' seu imc é : ' + imc + ' e a sua classificação é: ' + classificação)
    }
    else {
        resultado.textContent = 'preencha todos os campos!'
    }
   
    
}

calcular.addEventListener('click', imc)


    
