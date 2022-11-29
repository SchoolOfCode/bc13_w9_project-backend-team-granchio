const adjectivesArr = [
  "Blue",
  "Orange",
  "Yellow",
  "Purple",
  "Banana",
  "Red",
  "Blue",
  "Skinny",
  "Latte",
  "Daffy",
  "Dave",
  "Dinky",
  "Darth",
  "Dapper",
  "Drama",
  "Dilitante",
  "Danger",
  "Dippy",
];

const nounArr = [
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Duck",
  "Goose",
  "IncognitoDuck",
  "GingerbreadMan",
  "SoCMentor",
  "John-how-do-I-auto-generate-my-duck-please-help",
];

//this could have been done in a more easily readable way to ad weight to 'duck'
//by generating a random number as a catch, say 1-10, where 1-7 would assume 'duck'
//and 8-10 would run the rest of the function to choose an alternative
function generateRandomDuckName() {
  let firstName =
    adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
  let secondName = nounArr[Math.floor(Math.random() * nounArr.length)];
  return `${firstName} ${secondName}`;
}

export default generateRandomDuckName;
