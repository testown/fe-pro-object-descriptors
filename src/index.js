/**
 * Принимает в себя два аргумента, один из них принимает объект, второй строку с названием
 * дескриптора. Должно вернуть массив строк, которыми являются ключи объекта соответствующие
 * дескриптору. То есть если у нас есть два свойства у которых writable true(если мы передали арг
 * writable) то возвращает массив со строками-названиями этих свойств. Смотрите пример в check.js
 * @param {Object} object
 * @param {'writable' | 'enumerable' | 'configurable'} descriptor
 *
 * @returns string[]
 */
export const getKeysByDescriptor = (object, descriptor) => {

};

/**
 * Должен вернуть true если объект был заморожен каким-либо методом заморозки freeze, seal, preventExtensions иначе false
 * @param {Object} object
 * @returns {boolean}
 */
export const isObjectAnyFrozen = (object) => {};

/**
 * Принимает объект и строку. Мы должны вернуть НОВЫЙ объект(копию оригинального), в котором
 * название свойства (мы передали вторым аргументом), будет поставлено во writable false(только
 * нельзя перезаписывать, все остальное можно). Если свойство было в объекте, то мы ставим его значение
 * если не было ставим в значение null
 * @param {Object} object
 * @param {string} propertyName
 *
 * @returns {Object}
 */
export const assignLockedValues = (object, propertyName) => {};

/**
 * Принимает объект и возвращает его копию, только абсолютно замороженную
 * Нельзя удалять свойства, добавлять и редактировать
 * @param {Object} object
 * @returns {Object}
 */
export const freezeAllInObject = (object) => {};

//--------------------------------

const object = {};

Object.defineProperties(object, {
  firstName: {
    value: 'Test',
    writable: false,
    enumerable: false,
    configurable: false,
  },
  lastName: {
    value: 'Test',
    writable: true,
    enumerable: false,
    configurable: false,
  },
  age: {
    value: 80,
    writable: false,
    enumerable: true,
    configurable: false,
  },
  checker: {
    value: 80,
    writable: false,
    enumerable: false,
    configurable: true,
  },
});

// let  ss = {
// checker: {
//     value: 80,
//     writable: false,
//     enumerable: false,
//     configurable: true,
//   },
// };


// console.log(ss.checker.value);
// let cc = object.age.writable;
// console.log(cc);

let allPropertiesDescriptors = Object.getOwnPropertyDescriptors(object);
console.log(allPropertiesDescriptors);
let keysAllPropertiesDescriptors = Object.keys(allPropertiesDescriptors);
console.log(keysAllPropertiesDescriptors);
//console.log(Object.getOwnPropertyDescriptor(object, keysAllPropertiesDescriptors[0]));
//  console.log(allPropertiesDescriptors[keysAllPropertiesDescriptors[2]].enumerable);

let bb = keysAllPropertiesDescriptors.reduce((akkum, item) => {
alert(item);
akkum[akkum.length++] = item;
return akkum;
}, []);
console.log(bb);



let d = Object.getOwnPropertyDescriptor(object, 'firstName');
console.log('my - ');
console.log(Object.entries(d));
let aa = Object.entries(d)[1];
console.log(aa[0]);
console.log('my --- '); 



// let des = Object.getOwnPropertyDescriptors(object);
// console.log('---MY OBJECT---');
// console.log(des);
// console.log(Object.keys(des));

