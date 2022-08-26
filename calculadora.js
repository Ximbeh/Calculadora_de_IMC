
function calcular(){
    var altura=(document.getElementById("q1").value)/100
    var peso=document.getElementById("q2").value

    q3 = parseFloat(peso) / parseFloat(altura)**2
    document.getElementById('q3').value=q3
    console.log(q3)
}

function limpar(){
    document.getElementById('q3').value=""
    document.getElementById('q2').value=""
    document.getElementById('q1').value=""
}


