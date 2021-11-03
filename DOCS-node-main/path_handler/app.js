const path = require("path");
const fs = require("fs");
const { printa } = require("./utils/print.js");
/**
 Nota Mental - 
 Essas variaveis sao globais. Podem ser chamadas em qualquer parte do codigo sem precisar de invocacao.
**/

//Caminho Absoluto ate o diretorio
printa("Caminho Absoluto ate o diretorio");
console.log(__dirname);

//Caminho absoluto ate o arquivo presente
printa("Caminho Absoluto ate o arquivo presente");
console.log(__filename);

/**
 Nota Mental - 
 o path resolve/join eh um builder de caminhos muito eficiente! Resolve criara caminhos absolutos / Join caminhos relativos.
 Se voce precisar voltar um diretorio basta usar a expressao ".." (Soh funciona com resolve)
**/
printa("Caminho Absoluto ate o arquivo testao.txt");
const caminhoAbsoluto = path.resolve("testim", "testao.txt");
console.log(caminhoAbsoluto);
printa("Caminho Relativo ate o arquivo testao.txt");
const caminhoRelativo = path.join("testim", "testao.txt");
console.log(caminhoRelativo);
printa("Caminho absoluto voltando um diretorio ate o arquivo notes-app");

const caminhoVoltaUm = path.resolve("..", "notes-app");
console.log(caminhoVoltaUm);

/**
 Nota Mental - 
use o readDir para conseguir ler os arquivos no diretorio! Existe a opcao sincrona e assincrona
**/
printa("Lista de todos os arquivos no diretorio - forma sincrona");
console.log(fs.readdirSync(__dirname));
printa("Lista de todos os arquivos no diretorio - forma assincrona");
fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
  }
});
