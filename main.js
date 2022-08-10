////////////////////////////////////////////////////////
//======================Queries=========================
////////////////////////////////////////////////////////
//the rows
const titlesRow = $(".row-title");
const row1 = $(".row-1");
const row2 = $(".row-2");
const row3 = $(".row-3");
const row4 = $(".row-4");
const row5 = $(".row-5");
//the literal words 'your answer' for manipulation with daily double.
const literalWords = $("#your-answer-words");

//query the submit-button
const submitButton = $("#submit-button");

//query the 'typed-answer'
const typedAnswer = $("#typed-answer");

//the questions-results div
const correctOrNot = $("#questions-results");

//'your-score-actual' span
const yourScore = $("#your-score-actual");

//the Jeopardy words
const gameTitle = $("#Jeopardy");

////////////////////////////////////////////////////////
//======================Variables=======================
////////////////////////////////////////////////////////

//for use in daily double function
let squaresRemaining = 25;
let remainingDoubles = 1;
//create some elements for daily double
const dailyDouble = $('<div id="daily-double" class="button"></div>');
const wagerButton = $(
  '<button id="wager-button" class="golden">Submit</button>'
);
const yourWagerWords = $('<div id="your-wager-words">YOUR WAGER</div>');
const invisibleBox = $('<button class="button invisible"></button>');
const wagerTextBox = $(
  '<input type="text" id="wager-type" class="player-input" name="answer">'
);

//for use in question generation and answer verification
let ourClassArray = [];
let aQuestionArray = [];
let numberOfQuestions = 0;
let ourIndex = 0;
let ourQuestionPointValue = 0;

//wrap major functionality of the DOM in a function that runs when the DOM is ready to manipulated.
$(document).ready(function () {
  //add question tiles to the rows
  for (let i = 0; i < 5; i++) {
    titlesRow.append(
      $(`<div class='category golden'>${ourCategoriesArray[i]}</div>`)
    );
    row1.append(
      $(
        `<button class='button golden 100 ${ourPointValuesShortenedArray[0]}'>$${ourPointValuesShortenedArray[0]}</button>`
      )
    );
    row2.append(
      $(
        `<button class='button golden 100 ${ourPointValuesShortenedArray[1]}'>$${ourPointValuesShortenedArray[1]}</button>`
      )
    );
    row3.append(
      $(
        `<button class='button golden 100 ${ourPointValuesShortenedArray[2]}'>$${ourPointValuesShortenedArray[2]}</button>`
      )
    );
    row4.append(
      $(
        `<button class='button golden 100 ${ourPointValuesShortenedArray[3]}'>$${ourPointValuesShortenedArray[3]}</button>`
      )
    );
    row5.append(
      $(
        `<button class='button golden 100 ${ourPointValuesShortenedArray[4]}'>$${ourPointValuesShortenedArray[4]}</button>`
      )
    );
  }

  ////////////////////////////////////////////////////////
  //==============Event Handler Board Click===============
  ////////////////////////////////////////////////////////

  $(".button").click((e) => {
    $(".button").prop("disabled", true);
    const ourTarget = $(e.target);
    //toggle the invisible class on buttons and daily double picture generation
    ourTarget.toggleClass("invisible");
    //move the mouse to the text input box after clicking tile
    typedAnswer.focus();
    const myRando = Math.floor(Math.random() * squaresRemaining + 1);
    squaresRemaining -= 1;
    if (myRando === 1 && remainingDoubles > 0) {
      ourTarget.replaceWith(dailyDouble);
      submitButton.replaceWith(wagerButton);
      literalWords.replaceWith(yourWagerWords);
      typedAnswer.replaceWith(wagerTextBox);
      //wager button event listener to return original elements
      wagerButton.click(() => {
        ourQuestionPointValue = wagerTextBox.val();
        wagerButton.replaceWith(submitButton);
        yourWagerWords.replaceWith(literalWords);
        dailyDouble.replaceWith(invisibleBox);
        wagerTextBox.replaceWith(typedAnswer);
        refreshesAll();
      });
      //enter button event listener to return original elements
      wagerTextBox.keypress((e) => {
        if (e.which == 13) {
          ourQuestionPointValue = wagerTextBox.val();
          wagerButton.replaceWith(submitButton);
          yourWagerWords.replaceWith(literalWords);
          dailyDouble.replaceWith(invisibleBox);
          wagerTextBox.replaceWith(typedAnswer);
          refreshesAll();
        }
      });
      remainingDoubles -= 1;
    }
    //the following assigns the classes of board click to variable. This is a string; then take string and store the classes in an array.
    let ourClassString = ourTarget.attr("class");
    ourClassArray = ourClassString.split(" ");
    ourQuestionPointValue = ourClassArray[3];
    for (const object of QUESTIONS) {
      if (
        object["value"] === `$${ourQuestionPointValue}` &&
        object["showNumber"] === randomShow
      ) {
        aQuestionArray.push(object);
        numberOfQuestions++;
      }
    }
    for (let i = 0; i < aQuestionArray.length; i++) {
      let randomNumber = Math.floor(Math.random() * numberOfQuestions + 1);
      numberOfQuestions -= 1;
      if (randomNumber === 1) {
        ourIndex = i;
        correctOrNot.text(aQuestionArray[i]["question"]);
        break;
      }
    }
  });
  refreshesAll();
});

////////////////////////////////////////////////////////
//==============Function Refresh Cases =================
////////////////////////////////////////////////////////

function refreshesAll() {
  ////////////////////////////////////////////////////////
  //==============Function for Your Score=================
  ////////////////////////////////////////////////////////

  function thisScore() {
    // if answer is blank then do nothing
    if (typedAnswer.val() === "") {
      typedAnswer.val();
    }
    // if answer matches answer bank -> correct
    else if (
      typedAnswer.val().toLowerCase() ===
      aQuestionArray[ourIndex]["answer"].toLowerCase()
    ) {
      correctOrNot.text("Correct!");
      //add point value to 'your score'
      yourScore.text(
        parseInt(yourScore.text(), 10) + parseInt(ourQuestionPointValue)
      );
    }
    // if answer doesn't match answer bank -> incorrect
    else if (
      typedAnswer.val().toLowerCase() !==
      aQuestionArray[ourIndex]["answer"].toLowerCase()
    ) {
      correctOrNot.text(
        `Incorrect! \nThe correct answer is: ${aQuestionArray[ourIndex]["answer"]}`
      );
      //subtract point value from 'your score'
      yourScore.text(
        parseInt(yourScore.text(), 10) - parseInt(ourQuestionPointValue)
      );
    }
    typedAnswer.val("");
    //restore button functionality to allow next question selection
    $(".button").prop("disabled", false);
    //return for use in data storage
    return yourScore.text();
  }

  ////////////////////////////////////////////////////////
  //=============Event Handler Submit Click===============
  ////////////////////////////////////////////////////////

  submitButton.click(() => {
    thisScore();
  });

  ////////////////////////////////////////////////////////
  //==============Event Handler Enter Button==============
  ////////////////////////////////////////////////////////

  typedAnswer.keypress(function (e) {
    if (e.which == 13) {
      submitButton.focus();
    }
  });
  ////////////////////////////////////////////////////////
  //===================Memory Handler ====================
  ////////////////////////////////////////////////////////

  // Retrieve a value from local storage
  const prevPlayerScore = window.localStorage.getItem("playerScore");

  // Set the text input to that value
  if (prevPlayerScore !== null) {
    yourScore.text(prevPlayerScore);
  }

  // When the value of the player score changes
  typedAnswer.change(function () {
    // Store that value in local storage
    window.localStorage.setItem("playerScore", thisScore());
  });
}
