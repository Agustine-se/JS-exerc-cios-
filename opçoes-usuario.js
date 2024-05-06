/*1) Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair*/
let escolha = prompt("Oque deseja fazer?\nA)Falar com a atendente\nB)Falar com o RH\nC)Falar com o gerente\nD)Sair")

switch(escolha){
    case "A":
        alert("Você irá falar com a atendente.")
    break
    case "B":
        alert("Você irá falar com o RH.")
    break
    case "C":
        alert("Você irá falar com o gerente.")
    break
    case "D":
        alert("Você saiu do programa")
    break
}