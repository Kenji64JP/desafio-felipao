let hero = ["Junin", 2600];

console.log(hero);

if (hero[1] < 1000) {
    console.log(`O Herói de nome ${hero[0]} está no nível Ferro!`)

}else if (hero[1] > 1000 && hero[1] < 2001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Bronze!`)

}else if (hero[1] > 2000 && hero[1] < 5001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Prata!`)

}else if (hero[1] > 5000 && hero[1] < 7001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Ouro!`)

}else if (hero[1] > 7000 && hero[1] < 8001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Platina!`)

}else if (hero[1] > 8000 && hero[1] < 9001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Ascendente!`)

}else if (hero[1] > 9000 && hero[1] < 10001) {
    console.log (`O Herói de nome ${hero[0]} está no nível Imortal!`)

}else{
    console.log (`O Herói de nome ${hero[0]} está no nível Radiante!`)

}

// Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"