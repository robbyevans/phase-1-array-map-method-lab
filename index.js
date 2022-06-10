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

function titleCased(){
  let newTutorial=[];
  for (let items of tutorials){
let capitalizeString = (string)=>string[0].toUpperCase()+
  string.slice(1);

let capitalizedWords =(string)=>string.split(' ').map
  (capitalizeString).join(' ');

  newTutorial.push (capitalizedWords(items));
    
  }
  return (newTutorial)
}
