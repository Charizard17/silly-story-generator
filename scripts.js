// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
let customName = document.getElementById("customname");
let randomize = document.getElementById("randomize");
let story = document.getElementById("story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storyText = `The fake :insertw:: I failed the first quarter of a class in middle school, :insertx:. Walter did this every quarter that year. I forgot that they mail home the end-of-year cards, and my mom got it before Walter could intercept with my fake. The weather was at :temp: degrees. She was PISSED—at the school for their error and :inserty:. The teacher also retired that year and had already thrown out his records, because his weight was :weight:, so they had to take my mother’s “proof” (:insertz:) and “correct” the “mistake.” I’ve never told her the truth.`;

let insertW = ["food recipe", "monkey name", "king of the world"];
let insertX = [
  "I called to President of America",
  "my grandpa forgot his denture",
  "the dog was eating jelly",
];
let insertY = [
  "chef said this is the most delicious cake in the world",
  "the officer said this is not a good time",
  "the battery of the Tesla was over",
];
let insertZ = [
  "actually I wanted to eat these oranges",
  "he had blue earpods",
  "pastor was drinking bread and eating apple juice",
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  let wItem = randomValueFromArray(insertW);
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory
    .replace(":insertw:", wItem)
    .replace(":insertx:", xItem)
    .replace(":inserty:", yItem)
    .replace(":insertz:", zItem);

  if (customName.value) {
    newStory = newStory.replace("Walter", customName.value);
    customName.value = "";
  }

  if (document.getElementById("us").checked) {
    let temp = "95°F";
    let weight = "330 pounds";
    newStory = newStory.replace(":temp:", temp).replace(":weight:", weight);
  } else if (document.getElementById("uk")) {
    let temp = "35°C";
    let weight = "23.62 stones";
    newStory = newStory.replace(":temp:", temp).replace(":weight:", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
