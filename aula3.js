//Atividade 3
/* 1) Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:*/

let x = 5;
let y = 7;

if(x < y){

    console.log("Olá mundo!");
}
else if(x > y){

    console.log("Mundo, olá!");
}
else(x == y);{

    console.log("Adeus!");
}


/*2)Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:*/

let fruta = "laranja";

switch(fruta){
    case "banana":
        console.log("O filme é Os minions.");
        break;
        case "laranja":
            console.log("O filme é Laranja Mecânica.");
            break;
            case "maçã":
                console.log("O filme é Branca de neve.");
                break;
                 default:
                    console.log("O cinema tá fechado.");
}

