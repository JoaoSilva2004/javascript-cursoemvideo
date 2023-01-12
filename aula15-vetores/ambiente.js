let num = [3];

num.push(9);
num.push(3);
num.push(2);
num.push(8);
num.push(1);
num.sort();

console.log(`O nosso vetor é o ${num}`);

console.log(`O vetor possui ${num.length} posições.`);

console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(8);

console.log(`O valor 8 está a posição ${pos}.`);
