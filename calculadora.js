const historico = new Array()

//calculadora
function calcular(){
    var altura=(document.getElementById("q1").value)/100
    var peso=document.getElementById("q2").value
    q3 = parseFloat(peso) / parseFloat(altura)**2
    document.getElementById('q3').value=q3.toFixed(1)
    console.log(q3.toFixed(1))

//historico
    historicoq3 = `${peso}/${altura*altura}=${q3}`
    historico.push(historicoq3)
    console.log(historico)
    if (q3 <= 18.5) {alert('Seu IMC indica magreza')
    } else if (q3 <= 24.9){alert ('Seu IMC indica normalidade')}
    else if (q3 <= 29.9){alert ('Seu IMC indica peso acima do recomendado')}
    else if (q3 <= 39.9){alert ('Seu IMC indica obesidade')}
    else if (q3 >= 40.0){alert ('Seu IMC indica obesidade morbida')}
}

//limpar
function limpar(){
    document.getElementById('q3').value=""
    document.getElementById('q2').value=""
    document.getElementById('q1').value=""
}


