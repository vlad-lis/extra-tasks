/**
 * Генерация части английского алфавита
 * @param {number} [from=0] - начальный индекс части алфавита (по умолчанию 0)
 * @param {number} [to=25] - конечный индекс части алфавита (по умолчанию 25)
 * @param {string[]} [exclude=['c','d']] - символы, исключаемые из алфавита (по умолчанию c, d)
 * @returns {string} - созданная часть алфавита одной строкой
 */
const alphabetSlice = (from = 0, to = 25, exclude = ['c', 'd']) => {
  if (
    typeof from !== 'number' ||
    typeof to !== 'number' ||
    !Array.isArray(exclude)
  ) {
    throw new Error(
      'Неверный тип переданных аргументов. "from" и "to" ожидаются типа number; "exclude" - array'
    );
  }

  if (from < 0 || from > 25 || to < 0 || to > 25 || from > to) {
    throw new Error(
      '"from" и "to" ожидают значения от 0 до 25. "from" должно быть меньше или равно "to'
    );
  }

  const content = [];

  for (let i = from; i <= to; i++) {
    const char = String.fromCharCode(97 + i);

    if (!exclude.includes(char)) {
      content.push(char);
    }
  }

  return content.join('');
};
