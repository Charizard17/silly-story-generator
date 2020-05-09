// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
let customName = document.getElementById("customname");
let randomize = document.getElementsByClassName("randomize");
let story = document.getElementsByClassName("story");

function randomValueFromArray() {}

// 2. RAW TEXT STRINGS
let storyText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis quam earum animi velit nesciunt!";
let insertX = [
  "Lorem ipsum dolor",
  "sit amet consectetur",
  "Fugiat veritatis quam",
];
let insertY = ["qweqwe asdasd yxcyxc", "qay wsx edc", "rtfg cvbdf fhgdsdf"];
let insertZ = [
  "ksldfksld skdfkwe poqwope",
  "asdpo oasd oapoqw",
  "aspod opasodpo asod",
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  console.log("clicked");
}

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);