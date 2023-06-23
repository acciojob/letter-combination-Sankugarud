function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }
  
  const digitToLetters = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const combinations = [''];
  
  for (const digit of digits) {
    const letters = digitToLetters[digit];
    const newCombinations = [];
    
    for (const combination of combinations) {
      for (const letter of letters) {
        newCombinations.push(combination + letter);
      }
    }
    
    combinations.length = 0;
    combinations.push(...newCombinations);
  }
  
  return combinations;
}

const input = "23";
const output = letterCombinations(input);
console.log(output);