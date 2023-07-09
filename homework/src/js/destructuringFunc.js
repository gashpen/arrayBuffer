/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
function destructuring( {special} ) {
  for (let i in special) {
      const attack = special[i];
      special[i] = 'description' in attack ? attack : Object.assign(attack, {description: 'Описание недоступно'})
  }
  return special;
};

export default destructuring;