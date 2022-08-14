////////////////////////////////////////////////////////
//======================Queries=========================
////////////////////////////////////////////////////////
//the rows
const gameBoard = $("#question-bank");
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
//for use in question generation and answer verification
let ourClassArray = [];
let aQuestionArray = [];
let numberOfQuestions = 0;
let ourIndex = 0;
let ourQuestionPointValue = 0;
let firstRoundValues = [200, 400, 600, 800, 1000];
let secondRoundValues = [400, 800, 1200, 1600, 2000];
let counter = 0; //to number the spaces to match location of question in array
let ourQuestionObj;
//wrap major functionality of the DOM in a function that runs when the DOM is ready to manipulated.
$(document).ready(function () {
    //add question tiles to the rows
    for (let i = 0; i < 5; i++) {
        titlesRow.append(
            $(`<div class='category golden'>${firstRoundCategories[i]}</div>`)
        );
        row1.append(
            $(
                `<button class='button golden 200 ${counter++}'>$${
                    firstRoundValues[0]
                }</button>`
            )
        );
        row2.append(
            $(
                `<button class='button golden 400 ${counter++}'>$${
                    firstRoundValues[1]
                }</button>`
            )
        );
        row3.append(
            $(
                `<button class='button golden 600 ${counter++}'>$${
                    firstRoundValues[2]
                }</button>`
            )
        );
        row4.append(
            $(
                `<button class='button golden 800 ${counter++}'>$${
                    firstRoundValues[3]
                }</button>`
            )
        );
        row5.append(
            $(
                `<button class='button golden 1000 ${counter++}'>$${
                    firstRoundValues[4]
                }</button>`
            )
        );
    }

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
        console.log("ourClassString: ", ourClassString);
        ourClassArray = ourClassString.split(" ");
        ourQuestionPointValue = ourClassArray[2];
        let ourQuestionNumber = ourClassArray[3];
        ourQuestionObj = firstRoundQuestions[ourQuestionNumber];
        console.log("ourQuestionNumber: ", ourQuestionNumber);
        correctOrNot.text(ourQuestionObj["question"]);
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
        // if answer matches answer bank -> correct
        if (
            typedAnswer.val() !== "" &&
            typedAnswer.val().toLowerCase() ===
                ourQuestionObj["answer"].toLowerCase()
            // correctOrNot.text(ourQuestionObj["question"]);
        ) {
            correctOrNot.text("Correct!");
            //add point value to 'your score'
            yourScore.text(
                parseInt(yourScore.text(), 10) + parseInt(ourQuestionPointValue)
            );
        }
        // if answer doesn't match answer bank -> incorrect
        else if (
            typedAnswer.val() !== "" &&
            typedAnswer.val().toLowerCase() !==
                ourQuestionObj["answer"].toLowerCase()
        ) {
            correctOrNot.text(
                `Incorrect! \nThe correct answer is: ${ourQuestionObj["answer"]}`
            );
            //subtract point value from 'your score'
            yourScore.text(
                parseInt(yourScore.text(), 10) - parseInt(ourQuestionPointValue)
            );
        }
        if (parseInt(yourScore.text()) >= 7500) {
            titlesRow.remove();
            row1.remove();
            row2.remove();
            row3.remove();
            row4.remove();
            row5.remove();
            gameBoard.append(
                `<div><div class="gameOver">GAME OVER - YOU WIN!</div><button id="reloading"}>Play Again?</button></div>`
            );
            $("#reloading").click(function (e) {
                location.reload();
            });
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
            submitButton.click();
        }
    });
    ////////////////////////////////////////////////////////
    //===================Memory Handler ====================
    ////////////////////////////////////////////////////////

    // Retrieve a value from local storage
    // const prevPlayerScore = window.localStorage.getItem("playerScore");

    // // Set the text input to that value
    // if (prevPlayerScore !== null) {
    //     yourScore.text(prevPlayerScore);
    // }

    // // When the value of the player score changes
    // typedAnswer.change(function () {
    //     // Store that value in local storage
    //     window.localStorage.setItem("playerScore", thisScore());
    // });
}
//Double Jeoopardy:
//after jeopardy questions done, could have a popup that displays "end of jeopardy round, are you ready for double jeopardy?"
//once button is clicked then use double jeopardy questions and double jeopardy
//values. Then add an additional chance at daily double.
//after game is over then I can say above a certain value, they win, if below then
//they lose. I can have a play again button that resets the board and the score.
//could have a final jeopardy question, but if your score is negative then game over message

//CURRENT ISSUES WITH GAME PLAY:
//IF THEY REFRESH, THE SCORE REMAINS AND THE BOARD RESETS. PERHAPS REMOVE SCORE PERSISTENCE AS A QUICK FIX.
//OTHERWISE I WOULD HAVE TO KEEP TRACK OF THE QUESTIONS THEY HAVE ANSWERED IN AN ARRAY IN LOCAL STORAGE AND CHECK THE CONTENTS OF THAT ARRAY TO ERASE QUESTIONS AND IF THEY HAVE USED DAILY DOUBLES OR NOT.
