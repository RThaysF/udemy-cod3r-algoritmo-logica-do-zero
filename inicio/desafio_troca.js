//trocar os valores das variaveis. depois da troca... a = 94 e b = 7.

let a = 7;
let b = 94;

 let temp = a;
 a = b;
 b = temp;

[a, b] = [b, a];

console.log(a);
console.log(b);