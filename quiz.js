
const userName = document.querySelector('#userName');
const headerText = document.querySelector('.headerText');
const greet = document.querySelector('.greeting');
const quiz = document.querySelector('.quiz');
const q1Button = document.querySelector('.submitq1');
const q2Button = document.querySelector('.submitq2');
const q3Button = document.querySelector('.submitq3');
const q4Button = document.querySelector('.submitq4');
const q5Button = document.querySelector('.submitq5');
const question = document.querySelector('.question');
const answerA = document.querySelector('.answerA');
const answerB = document.querySelector('.answerB');
const answerC = document.querySelector('.answerC');
const answerD = document.querySelector('.answerD');
let iterationNumber = 0
let qOption= '';
let score = 0



let questionList = [
    'Q1: What is the capital city of France?',
    'Q2: Who painted the Mona Lisa?',
    'Q3:  Who wrote the play "Romeo and Juliet?',
    'Q4: What is the tallest mountain in the world?',
    'Q5: What is the largest planet in our solar system?',

]

let aAnswerList = ['London', 'Vincent van Gogh', ' William Shakespeare', 'Mount Everest', 'Mars']
let bAnswerList = ['Paris', 'Pablo Picasso', 'Jane Austen', 'Mount Kilimanjaro', 'Jupitar']
let cAnswerList = ['Rome', 'Leonardo da Vinci', 'Charles Dickens', 'Mount Fuji', 'Earth']
let dAnswerList = ['Madrid', 'Michelangelo', 'Mark Twain', 'D) Mount McKinley (Denali)', 'Saturn']


quiz.style.display = 'none';
q1Button.style.display = 'none';
q2Button.style.display = 'none';
q3Button.style.display = 'none';
q4Button.style.display = 'none';
q5Button.style.display = 'none';

function reset() {
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswerList[iterationNumber];
    answerB.innerHTML = bAnswerList[iterationNumber];
    answerC.innerHTML = cAnswerList[iterationNumber];
    answerD.innerHTML = dAnswerList[iterationNumber];

    answerA.style.color = '#176B87';
    answerB.style.color = '#176B87';
    answerC.style.color = '#176B87';
    answerD.style.color = '#176B87';
}




function greeting() {
    headerText.innerHTML = ''
    headerText.innerHTML = 'Hello ' + userName.value + ',Welcome to my quiz frenzy'
    greet.style.display = 'none';
    quiz.style.display = 'block';
    q1Button.style.display = 'block';
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswerList[iterationNumber];
    answerB.innerHTML = bAnswerList[iterationNumber];
    answerC.innerHTML = cAnswerList[iterationNumber];
    answerD.innerHTML = dAnswerList[iterationNumber];
}

function aFunction() {
    answerA.style.color = 'red';
    answerB.style.color = '#176B87';
    answerC.style.color = '#176B87';
    answerD.style.color = '#176B87';
    qOption = 'a';
}

function bFunction() {
    answerA.style.color = '#176B87';
    answerB.style.color = 'red';
    answerC.style.color = '#176B87';
    answerD.style.color = '#176B87';
    qOption = 'b'
}

function cFunction() {
    answerA.style.color = '#176B87';
    answerB.style.color = '#176B87';
    answerC.style.color = 'red';
    answerD.style.color = '#176B87';
    qOption = 'c'
   
}

function dFunction() {
    answerA.style.color = '#176B87';
    answerB.style.color = '#176B87';
    answerC.style.color = '#176B87';
    answerD.style.color = 'red';
    qOption = 'd'
}


function submitq1() {
    if (qOption == 'b') {
        score += 1;
    }
    iterationNumber += 1;
    q1Button.style.display = 'none';
    q2Button.style.display = 'block';

    reset();




}

function submitq2() {
    if (qOption == 'c') {
        score += 1;
    }
    iterationNumber += 1;
    reset();
    q2Button.style.display = 'none';
    q3Button.style.display = 'block';


}

function submitq3() {
    if (qOption == 'a') {
        score += 1;
    }
    iterationNumber += 1;
    reset();
    q3Button.style.display = 'none';
    q4Button.style.display = 'block';


}

function submitq4() {
    if (qOption == 'a') {
        score += 1;
    }
    iterationNumber += 1;
    reset();
    q4Button.style.display = 'none';
    q5Button.style.display = 'block';


}

function submitq5() {
    if (qOption == 'b') {
        score += 1;
    }
    iterationNumber += 1;
    if (score <= 3) {
headerText.innerHTML =   'Ooops! ' + userName.value  + 'Your score is ' + score;
} else  {
headerText.innerHTML = 'Welldone ' + userName.value + '! ' + 'Your score is ' + score;
}


    reset();
    quiz.style.display = 'none';
}
