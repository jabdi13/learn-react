export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // Aplica la función de actualización.
      finalState = update(finalState);
    } else {
      // Reemplaza el siguiente estado.
      finalState = update;
    }
  }

  return finalState;
}
