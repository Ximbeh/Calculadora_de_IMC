
function calcular(){
    var altura=(document.getElementById("q1").value)/100
    var peso=document.getElementById("q2").value


    q3 = parseFloat(altura) / parseFloat(peso)*parseFloat(peso)
    document.getElementById('q3').value=q3
    console.log(q3)
}