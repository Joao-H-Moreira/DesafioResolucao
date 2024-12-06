// Desafio relâmpago For dentro do For

let pessoas = [
  {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
  },
  {
    nome: "Carlos",
    idade: 35,
    profissao: "Professor",
  },
  {
    nome: "Maria",
    idade: 22,
    profissao: "Designer",
  },
];

for (const pessoa of pessoas) {
  let chaves = Object.keys(pessoa);

  console.log("\n------------\n");

  chaves.forEach((chave) => {
    console.log(`${chave}: ${pessoa[chave]}`);
  });
}
console.log("\n------------");