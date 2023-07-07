function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // eu não precisava ter feito isso uma função separada
}

function adivinheONum(){
    alert("\rBem-vindo ao jogo de adivinhar o número!");
    
    do {
        let numero = getRandomIntInclusive(0, 10);
        let palpite = prompt("Digite um número de 0 a 10");
        let i = 0;
    
        while (i <= 2) {
            if(i == 2){
                alert("Acabaram as tentativas!\n Que pena! O número era " + numero);
                break;
            }
            else{ 
                if (palpite == numero) {
                    alert("Parabéns você venceu!");
                    break;
                }
                else {
                    palpite = prompt("Está errado!\n Digite o número novamente!");
                    i++;
                }
            }
        }
    
        var jogarDenovo = prompt("Quer jogar denovo?\n 1: Sim\n 2: Não");
    } while (jogarDenovo == 1);    
}