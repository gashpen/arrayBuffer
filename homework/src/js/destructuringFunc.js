/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
function destructuring(obj) {
  for (const i of obj.special) {
    if (!i.hasOwnProperty('description')) {
      i.description = 'Описание недоступно';
    }
  }
  return obj.special;
}
export default destructuring;
