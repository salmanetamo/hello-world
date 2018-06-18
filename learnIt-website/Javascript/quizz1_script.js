/*This document is only used for functions specific to Quiz 1*/

//The following array will store all the inputs
var inputs = document.getElementsByTagName('input');

//The array []questions stores the six questions of the quizz
var questions = ['<br><b>1-Which of the following best defines the term "code" ?</b><br>',
				 '<br><b>2-Select the right option to fill in the blank in this sentence. <br>A _______ is a template from which individual objects can be created</b><br>',
				 '<br><b>3-Objects are usually able to perform some actions. <br>How do you make an object perform an action?</b><br>',
				 '<br><b>4-Which of the following provides information that the method needs in order to perform its action?</b><br>',
				 '<br><b>5-What is the type of the following value? <br>3.1415</b><br>',
				 '<br><b>6-Which of these values could be of type boolean?</b><br>'];

//The array []options is a two dimension arrays that stores the options for each question as an array
var options = [['A collection of instructions which can be run each time a particular job needs to be done by a computer','The text, written in a programming language, that defines the instructions to be executed, or run, by a computer','The physical components of a computer','A popular programming language'],
			   ['class','constructor','object','field'],
			   ['Initialize the fields of the object','Declare the action','Call a method of the object','Use the constructor of the class'],
			   ['Property','Field','Parameter','Constructor'],
			   ['int','boolean','byte','double'],
			   ['"true"','true','1','0.5']];

//The {}questToOptions is an associative array that associates each question with the four available option for that question
var questToOptions = {};
for(var i=0; i < 6; i++){
 	questToOptions[questions[i]] = options[i];
}

//The following array []correctAnswers store the correct options of the six questions
var correctAnswers = ['The text, written in a programming language, that defines the instructions to be executed, or run, by a computer','class','Call a method of the object','Parameter','double','true']

//The {}questToAnswers is an associative array that associates each question with the correct answer for that question
var questToAnswers = {};
for(var i=0; i < 6; i++){
 	questToAnswers[questions[i]] = correctAnswers[i];
}

/*The following functions loads the questions and their respective options*/
function loadQuestions(){
	var spanIndex = 0;
	for (var i = 0; i < 6; i++) {
		document.getElementsByTagName('label')[i].innerHTML = questions[i];
		for (var j =0; j < 4; j++) {
			document.getElementsByTagName('span')[spanIndex + j].innerHTML = questToOptions[questions[i]][j];
			inputs[spanIndex + j].value = questToOptions[questions[i]][j];
		}
		spanIndex += 4;
	}	
}

/*The following makes sure the user gets feedback after clicking on the submit button.
If all questions are answered, user gets his score. Else, he is asked to complete the quiz.
*/
function submitQuiz() {
	if(!isQuizComplete()){
		alert('Complete the quizz to see your score!');
	} else {
		document.getElementById('score').innerHTML = ('Congratulations! Your score is: ' + getScore());
	}
}

/*This function returns true if the quiz is complete all the questions have been answered, and false otherwise*/
function isQuizComplete() {
	var inputIndex = 0;
    for (var j = 0; j < 6; j++){
        for( var i = 0; i < 4;i++){                  
            if(inputs[i+inputIndex].checked){
                break;
            } 
        }
        inputIndex += 4;
        if(i == 4){
            return false;
        }
    }
        return true;
}

/*This function computes and returns the score after the quiz is completed*/
function getScore() {
	var score = 0;
	var inputIndex = 0;
	for (var j = 0; j < 6; j++){
        for( var i = 0; i < 4; i++){                  
            if((inputs[i+inputIndex].checked) && (inputs[i+inputIndex].value == questToAnswers[questions[j]])){
                score++;
            } 
        }
        inputIndex += 4;
	}
	return score;
}