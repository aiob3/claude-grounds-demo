/** Mediana de uma lista de números: o valor do meio depois de ordenar. */
export function mediana(lista) {
  const ordenada = [...lista].sort()
  return ordenada[Math.floor(ordenada.length / 2)]
}
