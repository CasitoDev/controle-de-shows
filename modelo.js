class Ingresso {
  constructor(valorBase) {
    if (!Number.isInteger(valorBase) || valorBase < 0) throw Error("Preço inválido");
    this.valorBase = valorBase; // centavos
  }
  preco() { return this.valorBase; }
}

class IngressoInteira extends Ingresso {}

class IngressoMeia extends Ingresso {
  preco() { return Math.round(this.valorBase / 2); }
}

class Show {
  #vendidos = 0;
  constructor(nome, capacidade) {
    if (!Number.isInteger(capacidade) || capacidade < 1) throw Error("Lotação inválida");
    this.nome = nome;
    this.capacidade = capacidade;
  }
  vagas() { return this.capacidade - this.#vendidos; }
  reservar() {
    if (this.vagas() === 0) throw Error("Show esgotado");
    this.#vendidos++;
  }
}

class Bilheteria extends EventTarget {
  #receita = 0;
  vender(show, ingresso) {
    const valor = ingresso.preco();
    show.reservar();
    this.#receita += valor;
    this.dispatchEvent(new CustomEvent("venda", { detail: { show: show.nome, valor } }));
  }
  receita() { return this.#receita; }
}