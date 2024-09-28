let quiz = [
  {
    question: "Which of the following is a JavaScript data type?",
    optionA: "String",
    optionB: "Integer",
    optionC: "Float",
    optionD: "Character",
    correctAnswer: "String",
  },
  {
    question: "What is the correct syntax for referring to an external script in JavaScript?",
    optionA: "<script src='file.js'>",
    optionB: "<script href='file.js'>",
    optionC: "<script ref='file.js'>",
    optionD: "<script name='file.js'>",
    correctAnswer: "<script src='file.js'>",
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    optionA: "push()",
    optionB: "pop()",
    optionC: "shift()",
    optionD: "unshift()",
    correctAnswer: "push()",
  },
  {
    question: "How do you declare a JavaScript variable?",
    optionA: "var myVariable;",
    optionB: "v myVariable;",
    optionC: "variable myVariable;",
    optionD: "declare myVariable;",
    correctAnswer: "var myVariable;",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    optionA: "//",
    optionB: "/*",
    optionC: "<!--",
    optionD: "##",
    correctAnswer: "//",
  },
  {
    question: "How can you convert a string to a number in JavaScript?",
    optionA: "Number()",
    optionB: "String()",
    optionC: "parseText()",
    optionD: "convert()",
    correctAnswer: "Number()",
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    optionA: "22",
    optionB: "4",
    optionC: "NaN",
    optionD: "undefined",
    correctAnswer: "22",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    optionA: "pop()",
    optionB: "push()",
    optionC: "shift()",
    optionD: "unshift()",
    correctAnswer: "pop()",
  },
  {
    question: "How do you check the length of an array in JavaScript?",
    optionA: "array.length",
    optionB: "array.size",
    optionC: "array.count",
    optionD: "array.total",
    correctAnswer: "array.length",
  },
  {
    question: "What is the output of `typeof null`?",
    optionA: "object",
    optionB: "null",
    optionC: "undefined",
    optionD: "function",
    correctAnswer: "object",
  },
  {
    question: "Which method is used to join two or more arrays?",
    optionA: "concat()",
    optionB: "merge()",
    optionC: "join()",
    optionD: "append()",
    correctAnswer: "concat()",
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    optionA: "const",
    optionB: "let",
    optionC: "var",
    optionD: "constant",
    correctAnswer: "const",
  },
  {
    question: "What is the default value of an uninitialized variable in JavaScript?",
    optionA: "undefined",
    optionB: "null",
    optionC: "0",
    optionD: "empty string",
    correctAnswer: "undefined",
  },
  {
    question: "Which method is used to find the index of an element in an array?",
    optionA: "indexOf()",
    optionB: "find()",
    optionC: "search()",
    optionD: "locate()",
    correctAnswer: "indexOf()",
  },
  {
    question: "Which JavaScript keyword is used to define a function?",
    optionA: "function",
    optionB: "define",
    optionC: "func",
    optionD: "fn",
    correctAnswer: "function",
  },
  {
    question: "What is the output of `1 == '1'`?",
    optionA: "true",
    optionB: "false",
    optionC: "NaN",
    optionD: "undefined",
    correctAnswer: "true",
  },
  {
    question: "Which method is used to remove an element from the beginning of an array?",
    optionA: "shift()",
    optionB: "unshift()",
    optionC: "pop()",
    optionD: "splice()",
    correctAnswer: "shift()",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    optionA: "let colors = ['red', 'green', 'blue'];",
    optionB: "let colors = ('red', 'green', 'blue');",
    optionC: "let colors = 'red', 'green', 'blue';",
    optionD: "let colors = {'red', 'green', 'blue'};",
    correctAnswer: "let colors = ['red', 'green', 'blue'];",
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    optionA: "if (condition) { }",
    optionB: "if condition { }",
    optionC: "if [condition] { }",
    optionD: "if {condition} { }",
    correctAnswer: "if (condition) { }",
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    optionA: "===",
    optionB: "==",
    optionC: "=",
    optionD: "!=",
    correctAnswer: "===",
  },
];

let question = document.getElementById("question");
let answerA = document.getElementById("option-A");
let answerB = document.getElementById("option-B");
let answerC = document.getElementById("option-C");
let answerD = document.getElementById("option-D");
let nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
function displayData() {
  question.textContent = `${currentQuestion + 1}) ${quiz[currentQuestion].question}`;
  answerA.nextElementSibling.textContent = quiz[currentQuestion].optionA;
  answerB.nextElementSibling.textContent = quiz[currentQuestion].optionB;
  answerC.nextElementSibling.textContent = quiz[currentQuestion].optionC;
  answerD.nextElementSibling.textContent = quiz[currentQuestion].optionD;
}
displayData();

let score = 0;
function checkAnswer() {
  let selectedOption = "";

  if (answerA.checked) {
    selectedOption = answerA.nextElementSibling.textContent;
  } else if (answerB.checked) {
    selectedOption = answerB.nextElementSibling.textContent;
  } else if (answerC.checked) {
    selectedOption = answerC.nextElementSibling.textContent;
  } else if (answerD.checked) {
    selectedOption = answerD.nextElementSibling.textContent;
  }

  if (selectedOption === quiz[currentQuestion].correctAnswer) {
    score++;
  }
}

let totalQuestions = quiz.length; 
let totalMarks = 20;
function changeQuestion() {
  checkAnswer();
  currentQuestion++;
  
  if (currentQuestion < quiz.length) {
    displayData();
    answerA.checked = false;
    answerB.checked = false;
    answerC.checked = false;
    answerD.checked = false;
  } else {
    let percentage = Math.round((score / totalQuestions) * 100);
    let marksObtained = Math.round((score / totalQuestions) * totalMarks);

    Swal.fire({
      title: 'Quiz Completed!',
      html: `<b> Total Qestion : 20 </b> <br>
             <b> Correct Question:</b> ${score} <br> 
             <b>Percentage:</b> ${percentage}% <br> 
             <b>Marks:</b> ${marksObtained} out of ${totalMarks}`,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      currentQuestion = 0; 
      score = 0;
      displayData(); 
      answerA.checked = false;
      answerB.checked = false;
      answerC.checked = false;
      answerD.checked = false;
    });
  }
}

nextBtn.addEventListener("click", changeQuestion);
