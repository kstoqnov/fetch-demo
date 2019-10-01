const toTitleCase = text => text[0].toUpperCase() + text.substring(1);

const toBookCase = text =>
  text
    .split(' ')
    .reduce((acc, word) => acc.concat(toTitleCase(word)), [])
    .join(' ');

export { toBookCase, toTitleCase };
