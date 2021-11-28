var buttonEl = document.querySelector("#start-quiz");
var newPageEl = document.querySelector("#welcome-body");


var createPageHandler1 = function() {
    var qA = document.createElement("h1");
    qA.className = "quiz-questions";
    qA.textContent = "Commonly used data types do NOT include:";
    var responseA1 = document.createElement("button");
    responseA1.className = "quiz-response";
    responseA1.textContent = "1. strings";
    var responseA2 = document.createElement("button");
    responseA2.className = "quiz-response";
    responseA2.textContent = "2. booleans";
    var responseA3 = document.createElement("button");
    responseA3.className = "quiz-response";
    responseA3.textContent = "3. alerts";
    var responseA4 = document.createElement("button");
    responseA4.className = "quiz-response";
    responseA4.textContent = "4. numbers";
    newPageEl.replaceWith(qA, responseA1, responseA2, responseA3, responseA4);
    }
    if (responseA3.clicked == false) {
        var createPageHandler2 = function() {
        var qB = document.createElement("h1");
        qB.className = "quiz-questions";
        qB.textContent = "The condition in an if/else statement is enclosed with ______."
        newPageEl.replaceWith(qB);
        }
        buttonEl.addEventListener("click", createPageHandler2);
};

buttonEl.addEventListener("click", createPageHandler1); 


