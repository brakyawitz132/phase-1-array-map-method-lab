const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// console.log(tutorials[0][2])

function titleCased() {
  const fixedTitles = tutorials.map(title => {
    const words = title.split(" ") // split up words to access individual words
    return words.map(word => {
      return word[0].toUpperCase()+word.slice(1) // change the first letter to upper case and add the other letters
    }).join(" ") // add all words together to get full string
  })
  return fixedTitles
}