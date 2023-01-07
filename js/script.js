function calculo(n1, n2) {
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)

    operador = document.getElementById('operador').value

    switch(operador) {
        case '+':
            resultadoSoma = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} + ${n2} é = ${resultadoSoma}`
            break
        case '-':
            resultadoSubtracao = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} - ${n2} é = ${resultadoSubtracao}`
            break
        case '*':
            resultadoMulti = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} * ${n2} é = ${resultadoMulti}`
            break
        case '/':
            resultadoDiv = (n1 / n2)
            if (Number.isNaN(resultadoDiv = NaN)) {
                document.getElementById('resultado').innerHTML = `Error: Digite um valor valido!`
            }else {
                document.getElementById('resultado').innerHTML = `O resultado de ${n1} / ${n2} é = ${resultadoDiv}`
                break
            }
    }
}