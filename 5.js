function inverterString(str) {
  let stringInvertida = ""; // Inicializa a string invertida como vazia

  // Percorre a string original de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i]; // Adiciona cada caractere à nova string
  }

  return stringInvertida;
}
