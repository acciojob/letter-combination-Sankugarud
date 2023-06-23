
   const result = [];

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const currentDigit = nextDigits[0];
      const letters = digitToLetters[currentDigit];

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  }

  backtrack('', digits);

  return result;
}


module.exports = letterCombinations;
