function isFibonacci(num) {
  // Inicializa os dois primeiros números da sequência
  let a = 0;
  let b = 1;

  // Se o número for 0 ou 1, já pertence à sequência
  if (num === 0 || num === 1) {
    return true;
  }

  // Calcula os próximos números da sequência até atingir ou ultrapassar o número informado
  while (b <= num) {
    const next = a + b;
    if (next === num) {
      return true; // O número pertence à sequência
    }
    a = b;
    b = next;
  }

  return false; // O número não pertence à sequência
}

// Número a ser verificado
const number = 21;

// Verifica se o número pertence à sequência de Fibonacci
if (isFibonacci(number)) {
  console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}
