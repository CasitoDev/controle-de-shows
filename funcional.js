// Cada linha contém um tipo e um preço-base em centavos.
function totalEmCentavos(linhas) {
  return linhas
    .map(({ tipo, base }) => tipo === "meia" ? Math.round(base / 2) : base)
    .reduce((total, valor) => total + valor, 0);
}