const display = document.querySelector("#display"); // seleciona um elemento específico

const buttons = document.querySelectorAll("button"); //seleciona todos do mesmo elemento

buttons.forEach((btn) => { //define um "apelido" para todos elementos iguais
    btn.addEventListener("click", () =>{ //faz um evento acontecer. "Click", reproduz o botão clickado
        if (btn.id === "=") { //se o botão for "=", mostra o resultado de um cálculo
            display.value = eval (display.value);
        } else if (btn.id === "ac") { //se o botão for "ac", esvazia o display com ""
            display.value = "";
        } else if (btn.id === "de") { //se o botão for "de", deleta um dos números digitados da direita
            display.value = display.value.slice(0, -1)
        } else { //se clickar nos outros botões, eles aparecerão no display e se incrementarão
            display.value += btn.id;
        }
    })
});