export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'El sushi es un plato tradicional japonés de arroz preparado en vinagre.'
}, {
  id: 1,
  name: 'Dal',
  description: 'La forma más común de preparar el dal es en forma de sopa a la que se pueden añadir cebollas, tomates y diversas especias.'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Los Pierogi son bolas de masa rellenas que se hacen envolviendo una masa sin levadura con un relleno salado o dulce y cociéndolas en agua hirviendo.'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'El shish kebab es una comida popular de cubos de carne ensartados y asados.'
}, {
  id: 4,
  name: 'Dim sum',
  description: 'Dim sum es una gran variedad de pequeños platos que los cantoneses disfrutan tradicionalmente en los restaurantes para el desayuno y el almuerzo.'
}];
