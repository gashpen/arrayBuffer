/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
function destructuring(obj) {
  const arr = [];
  for (const i of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = i;
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
export default destructuring;
