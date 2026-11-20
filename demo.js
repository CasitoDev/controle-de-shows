const saida = document.querySelector("pre");
function linha(texto) { saida.textContent += texto + "\n"; }

const show = new Show("Aurora", 2);
const caixa = new Bilheteria();
let avisos = 0;
caixa.addEventListener("venda", ({ detail }) => {
  avisos++;
  linha("Confirmação " + avisos + " | " + detail.show + " | " + detail.valor + " centavos");
});
linha("Vagas iniciais: " + show.vagas());
caixa.vender(show, new IngressoInteira(10000));
caixa.vender(show, new IngressoMeia(10000));
try { caixa.vender(show, new IngressoInteira(10000)); }
catch (erro) { linha("Terceira venda: " + erro.message); }
linha("Vagas finais: " + show.vagas() + " | Receita: " + caixa.receita() + " centavos");
const itens = Object.freeze([
  Object.freeze({ tipo: "inteira", base: 10000 }),
  Object.freeze({ tipo: "meia", base: 10000 })
]);
for (const [nome, entrada, esperado] of [
  ["Inteira + meia", itens, 15000], ["Lista vazia", [], 0],
  ["Meia com arredondamento", [{ tipo: "meia", base: 101 }], 51]
]) {
  const obtido = totalEmCentavos(entrada);
  if (obtido !== esperado) throw Error(nome);
  linha(nome + ": " + obtido + " centavos | OK");
}
if (caixa.receita() !== 15000 || show.vagas() !== 0 || avisos !== 2) throw Error("Fluxo inválido");
linha("Fluxo da bilheteria e confirmações: OK");