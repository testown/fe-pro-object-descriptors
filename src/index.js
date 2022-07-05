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
  const allPropertiesDescriptors = Object.getOwnPropertyDescriptors(object);
  const keysAllPropertiesDescriptors = Object.keys(allPropertiesDescriptors);
  if (descriptor === 'writable') {
    const result = keysAllPropertiesDescriptors.reduce((akkum, item) => {
      if (allPropertiesDescriptors[item].writable === true) {
        akkum[akkum.length++] = item;
      }
      return akkum;
    }, []);
    return result;
  } else if (descriptor === 'enumerable') {
    const result = keysAllPropertiesDescriptors.reduce((akkum, item) => {
      if (allPropertiesDescriptors[item].enumerable === true) {
        akkum[akkum.length++] = item;
      }
      return akkum;
    }, []);
    return result;
  } else if (descriptor === 'configurable') {
    const result = keysAllPropertiesDescriptors.reduce((akkum, item) => {
      if (allPropertiesDescriptors[item].configurable === true) {
        akkum[akkum.length++] = item;
      }
      return akkum;
    }, []);
    return result;
  }
};

/**
 * Должен вернуть true если объект был заморожен каким-либо методом заморозки freeze, seal, preventExtensions иначе false
 * @param {Object} object
 * @returns {boolean}
 */
export const isObjectAnyFrozen = (object) => {
  if (
    Object.isFrozen(object) ||
    !Object.isExtensible(object) ||
    Object.isSealed(object)
  ) {
    return true;
  }
  return false;
};

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
export const assignLockedValues = (object, propertyName) => {
  const newObj = Object.assign({}, object);
  if (propertyName in newObj) {
    Object.defineProperty(newObj, propertyName, {
      writable: false,
      enumerable: true,
      configurable: true,
      value: newObj[propertyName],
    });
  } else {
    Object.defineProperty(newObj, propertyName, {
      writable: false,
      enumerable: true,
      configurable: true,
      value: null,
    });
  }
  return newObj;
};

/**
 * Принимает объект и возвращает его копию, только абсолютно замороженную
 * Нельзя удалять свойства, добавлять и редактировать
 * @param {Object} object
 * @returns {Object}
 */
export const freezeAllInObject = (object) => {
  let newObj = Object.assign({}, object);
  Object.freeze(newObj);
  return newObj;
};
