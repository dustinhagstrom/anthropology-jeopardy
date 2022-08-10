////////////////////////////////////////////////////////
//====Sift through object to get data for game play=====
////////////////////////////////////////////////////////

//global variables
let ourShowArray = [];
let ourPointValuesArray = [];
let ourPointValuesShortenedArray = [];
let randomShow = 0;
let ourCategoriesArray = [];
function pageRefresh() {
  //get a random show number
  randomShow =
    QUESTIONS[Math.floor(Math.random() * QUESTIONS.length + 1)]["showNumber"];
  //only use questions from round "Jeopardy"
  for (let i = 0; i < QUESTIONS.length; i++) {
    if (
      QUESTIONS[i]["showNumber"] === randomShow &&
      QUESTIONS[i]["round"] === "Jeopardy!"
    ) {
      ourShowArray.push(QUESTIONS[i]);
    }
  }
  //put the value of the questions into an array, make them numbers w/o commas and sort them.
  for (let i = 0; i < ourShowArray.length; i++) {
    let ourValue = ourShowArray[i].value.slice(1);
    ourValue = ourValue.replace(",", "");
    let ourValueNum = parseInt(ourValue);
    ourPointValuesArray.push(ourValueNum);
  }
  ourPointValuesArray.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  //make sure that there are at least five questions for each value and push that value into an array in order. there should only be five values in this array.
  let count = 0;
  for (let i = 0; i < ourPointValuesArray.length; i++) {
    if (ourPointValuesArray[i] === ourPointValuesArray[i + 1]) {
      count++;
    }
    if (
      count > 4 &&
      ourPointValuesArray[i] !==
        ourPointValuesShortenedArray[ourPointValuesShortenedArray.length - 1]
    ) {
      ourPointValuesShortenedArray.push(ourPointValuesArray[i]);
      count = 0;
      i -= 1;
    }
  }
  console.log(ourPointValuesShortenedArray);
  for (const object of QUESTIONS) {
    if (
      object["value"].includes(ourPointValuesShortenedArray[0]) &&
      object["showNumber"] === randomShow &&
      object["value"] !== ourCategoriesArray[ourCategoriesArray.length - 1] &&
      object["round"] === "Jeopardy!" &&
      ourCategoriesArray.length < 5
    ) {
      ourCategoriesArray.push(object["category"]);
    }
  }
}
//call the function to determine the show, question point values, and question bank
pageRefresh();

//display the categories at the top of the columns
//reruns all functions for questions if there are not exactly five sets of point value questions.
if (ourPointValuesShortenedArray.length !== 5) {
  ourPointValuesShortenedArray = [];
  pageRefresh();
}
