////////////////////////////////////////////////////////
//====Sift through object to get data for game play=====
////////////////////////////////////////////////////////
// QUESTIONS_JEOPARDY
// QUESTIONS_DOUBLE_JEOPARDY
//global variables
let firstRoundQuestions = [];
let secondRoundQuestions = [];
let jeopardyShow = "Jeopardy!";
let doubleJeopardyShow = "Double Jeopardy!";
let firstRoundCategories = [];
let secondRoundCategories = [];
function pageRefresh() {
    //TODO:   MAKE A ROUND ONE: JEOPARDY, THEN MAKE A ROUND 2 DOUBLE JEOPARDY
    //fill first round array with questions. Hard coded now: On load one of
    //two data sets appears for game play
    const myRando = Math.floor(Math.random() * 2 + 1);
    if (myRando === 1) {
        for (let i = 0; i < QUESTIONS_JEOPARDY.length; i++) {
            firstRoundQuestions.push(QUESTIONS_JEOPARDY[i]);
            if ((i + 1) % 5 === 0) {
                firstRoundCategories.push(QUESTIONS_JEOPARDY[i].category);
            }
        }
    } else {
        for (let i = 0; i < QUESTIONS_DOUBLE_JEOPARDY.length; i++) {
            firstRoundQuestions.push(QUESTIONS_DOUBLE_JEOPARDY[i]);
            if ((i + 1) % 5 === 0) {
                firstRoundCategories.push(
                    QUESTIONS_DOUBLE_JEOPARDY[i].category
                );
            }
        }
    }
    //fill second round array with questions
    for (let i = 0; i < QUESTIONS_DOUBLE_JEOPARDY.length; i++) {
        secondRoundQuestions.push(QUESTIONS_DOUBLE_JEOPARDY[i]);
        if ((i + 1) % 5 === 0) {
            secondRoundCategories.push(QUESTIONS_DOUBLE_JEOPARDY[i].category);
        }
    }
    console.log("firstRoundQuestions: ", firstRoundQuestions);
    console.log("firstRoundCategories: ", firstRoundCategories);
}
//call the function to generate the show, question point values, and question bank
pageRefresh();
