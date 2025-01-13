const faturamentoDiario = [
  31490.7866, 37277.94, 37708.4303, 0, 0, 17934.2269, 0, 6965.1262, 24390.9374,
  14279.6481, 0, 0, 39807.6622, 27261.6304, 39775.6434, 29797.6232, 17216.5017,
  0, 0, 12974.2, 28490.9861, 8748.0937, 8889.0023, 17767.5583, 0, 0, 3071.3283,
  48275.2994, 10299.6761, 39874.1073,
];

// Filtrar dias com faturamento
const diasComFaturamento = faturamentoDiario.filter((valor) => valor > 0);

// Menor e maior valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento);
const maiorFaturamento = Math.max(...diasComFaturamento);

// Média de faturamento
const mediaMensal =
  diasComFaturamento.reduce((acc, val) => acc + val, 0) /
  diasComFaturamento.length;

// Número de dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(
  (valor) => valor > mediaMensal
).length;

// Exibir resultados
console.log(`Menor faturamento: ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
