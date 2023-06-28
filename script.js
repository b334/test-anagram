function anagram(string1, string2) {
  const charMap1 = buildCharMap(string1.trim().toLowerCase());
  const charMap2 = buildCharMap(string2.trim().toLowerCase());

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return 'not anagram';
  } else {
    const result = Object.keys(charMap1).every((key) => {
      return charMap1[key] === charMap2[key];
    });
    return result ? 'anagram' : 'not anagram';
  }
}

function buildCharMap(string) {
  let charmap = {};
  for (let char of string) {
    charmap[char] = charmap[char] + 1 || 1;
  }
  return charmap;
}

console.log(anagram('raat', 'tarr'));
console.log(anagram('bate', 'fate'));
console.log(anagram('hello', 'olelh'));
console.log(anagram('dog', 'god'));
