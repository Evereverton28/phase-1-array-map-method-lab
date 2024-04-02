const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Handle specific known cases
      if (word.toLowerCase() === 'nan') {
        return 'NaN';
      } else if (word.toLowerCase() === 'jsonp') {
        return 'JSONP';
      } else {
        return word.split(/(?=[A-Z])/).map(subWord => subWord.charAt(0).toUpperCase() + subWord.slice(1).toLowerCase()).join('');
      }
    }).join(' ');
  });
}
