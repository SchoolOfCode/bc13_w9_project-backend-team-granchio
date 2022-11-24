const AdjectivesArr = [
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
function getDuckName() {
  let firstName = Math.floor(Math.random() * AdjectivesArr.length);
  let secondName = Math.floor(Math.random() * nounArr.length);
  return `${firstName} ${secondName}`;
}

export default getDuckName;
