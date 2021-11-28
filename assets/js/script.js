var buttonEl = document.querySelector("#start-quiz");
var newPageEl = document.querySelector("#welcome-body");


var createPageHandler = function() {
    newPageEl.replaceWith("");
    }
buttonEl.addEventListener("click",createPageHandler);

function startQuiz(){
    (function(){ 
    // Functions
        function getTimeRemaining(endtime) {
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor(total / 1000);
        
            return {
                total,
                seconds
            };
        }
        
        function initializeClock(id, endtime) {
            const clock = document.getElementById(id);
            const secondsSpan = clock.querySelector('.seconds');
        
            function updateClock() {
                const t = getTimeRemaining(endtime);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                
                if(t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
        
            updateClock();
            const timeinterval = setInterval(updateClock, 1000);
        }
        
        const deadline = new Date(Date.parse(new Date()) + 90 * 1000);
        initializeClock('timer', deadline);

    
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(number in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${number}">
                ${number}.
                ${currentQuestion.answers[number]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
          t.total = t.total - 10;
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
          question: "Commonly used data types do NOT include.",
          answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
          },
          correctAnswer: "3"
        },
        {
          question: "The condition in an if/else statement is enclosed with _____.",
          answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parantheses",
            4: "square brackets"
          },
          correctAnswer: "3"
        },
        {
          question: "Arrays in JavaScript can be used to store _____.",
          answers: {
            1: "strings and numbers",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
          },
          correctAnswer: "4"
        },
        {
          question: "String values must be enclosed within _____ when being assigned to variables.",
          answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parantheses"
        },
          correctAnswer: "3"
        },
        {
          question: "A very useful tool during development and debugging for printing content to the debugger.",
          answers: {
            1: "JavaScript",
            2: "terminal/git bash",
            3: "for loops",
            4: "console.log"
        },
          correctAnswer: "4"
      }
      ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
}