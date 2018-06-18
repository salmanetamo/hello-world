/*This document is only used for functions specific to Quiz 2*/

//The following array will store all the inputs
var inputs = document.getElementsByTagName('input');

//The array []questions stores the six questions of the quizz
var questions = ['<b>Which of the following best describes a variable type?</b><br>',
				 '<b>Which of the following is NOT a valid identifier that can be used as a variable name?</b><br>',
				 '<b>Which of the following is not a data type in Java?</b><br>',
				 '<b>Which of the following is a valid way to declare a variable named myVariable of type int and assigned the value 2 to it</b><br>',
				 '<b>Given the following three variables x, y, and z, which value does the expression evaluate to?<br> int x = 8;<br> int y = 4;<br> int z = 2;<br>The expression: x + y/z + 2</b><br>',
				 '<b>Given the two booleans a and b, which value does the expression evaluate to?<br> boolean a = true;<br> boolean b = false;<br>The expression: !a && b</b><br>'];

//The array []options is a two dimension arrays that stores the options for each question as an array
var options = [['the piece of information stored, for example a number','a name given to a variable that can be used to refer to the variable in a program','determines what kind of information a variable can store, for example numbers or characters','the part of the computer where variables are stored as the program runs'],
			   
			   ['myVariable','my_variable','my variable','my$variable1'],
			   
			   ['number','double','int','long'],
			   
			   ['myVariable int = 2;','int myVariable = 2','int myVariable = 2;','int 2 = myVariable;'],
			   
			   ['3','12','8','9'],
			   
			   ['true','0','false','"true"']];

//The following array []correctAnswers store the correct options of the six questions
var correctAnswers = ['determines what kind of information a variable can store, for example numbers or characters','my variable','number','int myVariable = 2;','12','false']

//The array []feedbacks is a two dimension arrays that stores the correct answer and right answer feedback for each question as an array
var feedbacks = [['You got it right!','You did not get it right.<br>The piece of information stored, for example a number -> value <br>A name given to a variable that can be used to refer to the variable in a program -> identifier<br> The part of the computer where variables are stored as the program runs -> memory'],
				 ['You got it right!','You did not get it right.<br>Variable names can contain letters, numbers and special characters but spaces are not allowed.'],
				 ['You got it right!','You did not get it right.<br>Number is not a data type. Different types are used to represent numbers(short, byte, int, double, float)'],
				 ['You got it right!','You did not get it right.<br>Here is the right syntax to declare and initialize any variable in Java:<br>DataType variableName = value;<br>P.S: Do not forget the semi-colon'],
				 ['You got it right!','You did not get it right.<br>Maths operations are evaluated from left to right. Expressions in parenthesis have precedence followed by multiplication and division.'],
				 ['You got it right!','You did not get it right.<br>!a evaluates to false. false and false evaluates to false']];

//The {}questToOptions is an associative array that associates each question with the four available option for that question
var questToOptions = {};
for(var i=0; i < 6; i++){
 	questToOptions[questions[i]] = options[i];
}

//The {}questToAnswers is an associative array that associates each question with the correct answer for that question
var questToAnswers = {};
for(var i=0; i < 6; i++){
 	questToAnswers[questions[i]] = correctAnswers[i];
}

//The {}questToFeedbacks is an associative array that associates each question with the feedback for both a correct and a wrong answer for that question
var questToFeedbacks = {};
for(var i=0; i < 6; i++){
 	questToFeedbacks[questions[i]] = feedbacks[i];
}

//The following functions loads the questions and their respective options
function loadQuestions(){

	document.getElementById("defaultOpen").click();
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

function moveToNextQuest() {
	var nextQuestNum = parseInt(document.getElementsByClassName("active")[0].innerHTML.slice(-1)) + 1;
	if(nextQuestNum <= 6){
		openQuestion(event, 'question'+nextQuestNum.toString());
	}
}

function moveToPreviousQuest() {
	var previousQuestNum = parseInt(document.getElementsByClassName("active")[0].innerHTML.slice(-1)) - 1;
	if(previousQuestNum >= 1){
		openQuestion(event, 'question'+previousQuestNum.toString());
	}
}

/*The following function allows the display of questions in different tabs
Parameters: event, questionId(div containing the selected question)
*/
function openQuestion(event, questionId) {
	var i, formContent, buttons;

    // Get all elements with class="tabcontent" and hide them
    formContent = document.getElementsByClassName("formContent");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    buttons = document.getElementsByClassName("buttons");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(questionId).style.display = "block";
    buttons[parseInt(questionId.slice(-1))-1].className += " active";
}

/*This function tells the user whether they have got the answer right or wrong for a specific question
Parameter: questionId(div containing the selected question)
*/
function giveFeedback(questionId) {
	var indexForArrays = parseInt(questionId.slice(-1)) - 1;
	var feedbackDiv = document.getElementById('feedbackQuestion'+questionId.slice(-1))
	if(isCorrectAnswer(questionId)){
		feedbackDiv.innerHTML = questToFeedbacks[questions[indexForArrays]][0];
	} else {
		feedbackDiv.innerHTML = questToFeedbacks[questions[indexForArrays]][1];	
	}
}

/*This function returns true if the answer is correct and false otherwise for a specific question
Parameter: questionId(div containing the selected question)
*/
function isCorrectAnswer(questionId){
	var isCorrect = false;
	var inputIndex = (parseInt(questionId.slice(-1)) - 1) * 4;
	for(var i = 0; i < 4; i++){                  
            if((inputs[i+inputIndex].checked) && (inputs[i+inputIndex].value == questToAnswers[questions[parseInt(questionId.slice(-1)) - 1]])){
                isCorrect = true;
                break;
            } 
        }
    return isCorrect;
}