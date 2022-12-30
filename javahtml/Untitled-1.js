function calculator() {
    let a = prompt("Введите 1-ое число")
    var c = a
    a = Number(a)
    if (isNaN(a) === true){
        alert("здесь буквы не нужны")
        calculator()
    }else{
        let b = prompt("Введите 2-ое число")
        var d = b
        b = Number(b)
        if (isNaN(b) === true){
            alert("эй! это калькулятор а не чат")
            calculator()
        }else{
            let pmmd = prompt("Введите операцию, которую хотите с ними провести(+ , - , : , *)")
            if (pmmd == "+"){
                alert("Сумма равна " + (a + b))
            }else if(pmmd == "-"){
                alert("Разность равна " + (a - b))
            }else if(pmmd == "*"){
                alert("Произведение равно " + (a * b))
            }else if(pmmd == ":"){
                alert("Частное равно " + (a / b))
            }else{
                alert("вы не понимаете что это калькулятор или что?")
                calculator()
            }
        }
    }

    function factorial(n){
        let answer = 1;
        for (let i = 1; i <= n; i++) {
            answer *= i;
        }
        return answer;
    }
    if (c > d) {
        alert("Число " + c + " больше числа " + d + ". " + "Факториал числа " + c + " равен " + factorial(c))
    }else if (c < d) {
        alert("Число " + d + " больше числа " + c + ". " + "Факториал числа " + d +  " равен " + factorial(d))
    }else {
        alert("Числа равны. Их факториал равен " + factorial(c))
    }
}
calculator()