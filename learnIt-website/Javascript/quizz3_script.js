/*This document is only used for functions specific to Quiz 3*/

//The following array []spans displays all the spans which contain the options for each each question
var spans = document.getElementsByTagName('span');

//The array []questions stores the six questions of the quizz
var questions = ['<b>What are two elements that are found inside the code block of a class?</b> (Select two)<br><br>',
                 '<b>Match each of the following with their role in a creating a class</b><br>',
                 '<b>The constructor of a Circle class is defined as follow: </b><br><em>public Circle(int radius, int x, String label,int y){<br>this.radius= radius;<br>this.label = label;<br>this.x = x;<br>this.y = y;<br>}</em><br><b>We execute the following statement:</b><br><em>circle1 = new Circle(2,1,"myCircle",1)</em><br><b>Answer the questions below</b>',
                 '<b>The constructor of a Person class is defined as follow: </b><br><em>public Person(String firstName, int age, boolean isKingInTheNorth, char firstLetterInName){<br>this.firstName= firstName;<br>this.age = age;<br>this.isKingInTheNorth = isKingInTheNorth;<br>this.firstLetterInName = firstLetterInName;}</em><br><b>The following statement is executed:</b><br><em>Person johnSnow = new Person("John",30,true,&quot;j&quot;)</em><br> <b>Match each field with the corresponding value:</b><br>',
                 '<b>Fill in the blanks.</b>',
                 '<b>The constructor of a Circle class is defined as follow: </b><br><em>public Circle(int radius, int x, String label,int y){<br>this.radius= radius;<br>this.label = label;<br>this.x = x;<br>this.y = y;}</em><br><b>Which of the following images correctly shows what we see when we inspect a circle object created with the following statement?</b><br><em>circle1 = new Circle(2,1,"myCircle",1)</em>'];

//The array []options is a two dimension arrays that stores the options for each question as an array
var options = [['Class header', 'Fields', 'Methods', 'import statements'],
               ['Class header', 'Fields', 'Methods', 'Constructors'],
               ['How many fields does Circle object have?','What is the value circle1.x ?','What is the value circle1.radius ?','How many parameters does the constructor take?'],
               ['firstName','age','isKingInTheNorth','firstLetterInName','lastName'],
               ['Once you have created an ',', you might want to use the values stored in any of its ','or change the values of those',',or you could just ask it tto perform an action. You can do all of that using','.']];

//The array []dropDownOptions is an array that stores the different options to pick from for the drop down questions
var dropDownOptions = ['Allowing objects to perform actions','Specifying the name of the class','Properties specific to an object created from that class','Initialising the instances of the class','Elements that are supplied to the constructor in order to create an object'];

//The array []draggableOptions is an array that stores the different options that can be draggged in the drag and drop question
var draggableOptions = ['&quot;j&quot;','"John"','true','30'];

//The array []correctAnswersCheckbox is an array that stores the correct options for the first question
var correctAnswersCheckbox = ['Fields','Methods'];

//The array []correctAnswersCheckbox is an array that stores the correct options for the first question
var correctAnswersDropDown = ['Specifying the name of the class','Properties specific to an object created from that class','Allowing objects to perform actions','Initialising the instances of the class'];

//The array []correctAnswersNumbers is an array that stores the correct options for the first question
var correctAnswersNumbers = [4, 1, 2, 4];

//The array []correctAnswersDragDrop is an array that stores the correct options for the fourth question
var correctAnswersDragDrop = ['"John"','30','true','&quot;j&quot;'];

//The array []correctAnswersText is an array that stores the correct values for the fifth question
var correctAnswersText = ['object','fields','fields','methods'];

//The {}questToOptions is an associative array that associates each question with the four available option for that question
var questToOptions = {};
for(var i=0; i < questions.length; i++){
    questToOptions[questions[i]] = options[i];
}

//The {}dropDownOptToRightAns is an associative array that associates each subquestion in the drop down question with the right option for that subquestion
var dropDownOptToRightAns = {};
for(var i=0; i < questToOptions[questions[1]].length; i++){
    dropDownOptToRightAns[questToOptions[questions[1]][i]] = correctAnswersDropDown[i];
}

//The {}numbOptToAns is an associative array that associates each subquestion with the answer option for that subquestion in the third question
var numbOptToAns = {};
for(var i=0; i < questToOptions[questions[2]].length; i++){
    numbOptToAns[questToOptions[questions[2]][i]] = correctAnswersNumbers[i];
}

//The {}droppedOptToAns is an associative array that associates each option with the right draggable item int the fourth question
var droppedOptToAns = {};
for(var i=0; i < questToOptions[questions[3]].length; i++){
    droppedOptToAns[questToOptions[questions[3]][i]] = correctAnswersDragDrop[i];
}

//The following array stores the divs that are supposed to display the feedback to the user
var feedbackDivs = document.getElementsByClassName('feedback');

/*This function shows the user their score at the end of the quiz*/
function gradeAndFeedback(){
    document.getElementById('submitButton').style.display = 'none';
    feedbackRadioInput();
    feedbackTextInput();
    feedbackDragNDrop();
    feedbackNumbers();
    feedbackDropDown();
    feedbackCheckBox();
    alert('Your quiz is submitted, and your score is: '+ overallGrade()+'  Check each question to see feedback.');
}

/*This function calculates the total score by adding individual scores of each question.
 returns: tottal score
 */
function overallGrade(){
    return gradeRadioInput() + gradeTextInput() + gradeDragNDrop() + gradeNumbers() + gradeDropDown() + gradeCheckBox();
}


/*The following function returns the score for the sixth question*/
function gradeRadioInput(){
    var score = 0;
    var choices = document.querySelectorAll('input[type=radio]');
    choices[1].setAttribute('value', "rightAnswer");
    var feedbackImage = document.querySelectorAll('#question6 img');
    for(var i=0; i<choices.length; i++){
        if (choices[i].checked) {
            if(choices[i].value ==  "rightAnswer"){
                feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
                score += 1;
            } else {
                feedbackImage[i].setAttribute('src','../images/wrongIcon.svg');
            }
        }
    }
    return score;
}


/*This function provides feedback for the sixth question*/
function feedbackRadioInput(){
    if (gradeRadioInput() == 1){
        feedbackDivs[5].innerHTML = 'Good job!! You got the answer right';
    } else {
        feedbackDivs[5].innerHTML = 'The right answer was: Option 2'+  
                                    '<br> The values used when creating an object need to match the data type of the parameters in the constructor of the class.'
    }
}

/*The following function returns the score for the fifth question*/
function gradeTextInput(){
    var score = 0;
    var answerHolders = document.querySelectorAll('input[type=text]');
    var feedbackImage = document.querySelectorAll('#question5 img');
    for(var i=0; i<answerHolders.length; i++){
        if (answerHolders[i].value ==  correctAnswersText[i]) {
            feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
            score += 1/answerHolders.length;
        } else {
            feedbackImage[i].setAttribute('src','../images/wrongIcon.svg'); 
        }
    }
    return score;
}

/*This function provides feedback for the fifth question*/
function feedbackTextInput(){
    if(gradeTextInput() == 1){
        feedbackDivs[4].innerHTML = 'Good job!! You got all the answers right';
    } else {
        feedbackDivs[4].innerHTML = 'The full answer was: ' + questToOptions[questions[4]][0] + ' <b> ' + correctAnswersText[0] + ' </b> ' +
                                    questToOptions[questions[4]][1] + ' <b> ' + correctAnswersText[1] + ' </b> ' +
                                    questToOptions[questions[4]][2] + ' <b> ' + correctAnswersText[2] + ' </b> ' +
                                    questToOptions[questions[4]][3] + ' <b> ' + correctAnswersText[3] + ' </b> ' +
                                    questToOptions[questions[4]][4] + ' <br> ' + 'Methods are used to access and/or change the fields of an object. When they are called, they make the object perform an action which may or may not return some value.'
    }
}

/*The following function returns the score for the fourth question*/
function gradeDragNDrop(){
    var score = 0;
    var answerHolders = document.querySelectorAll('div#question4 div span');
    var feedbackImage = document.querySelectorAll('#question4 img');
    for(var i=0; i<answerHolders.length; i++){
        if (answerHolders[i].innerText ==  droppedOptToAns[questToOptions[questions[3]][i]]) {
            feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
            score += 1/draggableOptions.length;
        } else {
            feedbackImage[i].setAttribute('src','../images/wrongIcon.svg');
        }
    }
    return score;
}


/*This function provides feedback for the fourth question*/
function feedbackDragNDrop(){
    if(gradeDragNDrop() == 1){
        feedbackDivs[3].innerHTML = 'Good job!! You got all the answers right';
    } else {
        feedbackDivs[3].innerHTML = 'The right matches were: <br>' + questToOptions[questions[3]][0] +': ' + correctAnswersDragDrop[0] + '<br>'+
                                    questToOptions[questions[3]][1] +': ' + correctAnswersDragDrop[1] + '<br>'+
                                    questToOptions[questions[3]][2] +': ' + correctAnswersDragDrop[2] + '<br>'+
                                    questToOptions[questions[3]][3] +': ' + correctAnswersDragDrop[3] + '<br>'+'The values used when creating an object need to match the data type of the parameters in the constructor of the class.'
    }
}

/*The following function returns the score for the third question*/
function gradeNumbers(){
    var score = 0;
    var numberInputs = document.querySelectorAll('input[type=number]');
    var subquestions = questToOptions[questions[2]];
    var feedbackImage = document.querySelectorAll('#question3 img');
    for(var i=0; i<subquestions.length; i++){
        if (parseInt(numberInputs[i].value) ==  numbOptToAns[subquestions[i]]) {
            feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
            score += 1/subquestions.length;
        } else {
            feedbackImage[i].setAttribute('src','../images/wrongIcon.svg');
        }
    }
    return score;
}

/*This function provides feedback for the third question*/
function feedbackNumbers(){
    if(gradeNumbers() == 1){
        feedbackDivs[2].innerHTML = 'Good job!! You got all the answers right';
    } else {
        feedbackDivs[2].innerHTML = 'The right answers were:<br>' + questToOptions[questions[2]][0] + ': ' + correctAnswersNumbers[0] +'<br>'+
                                    questToOptions[questions[2]][1] + ': ' + correctAnswersNumbers[1] +'<br>'+
                                    questToOptions[questions[2]][2] + ': ' + correctAnswersNumbers[2] +'<br>'+
                                    questToOptions[questions[2]][3] + ': ' + correctAnswersNumbers[3] +'<br>'+ 'The values provided when creating an object match the parameter list of the constructor. However, bear in mind that sometimes, some fields are given default values.'
    }
}

/*The following function returns the score for the second question*/
function gradeDropDown(){
    var score = 0;
    var selectInputs = document.getElementsByTagName('select');
    var subquestions = questToOptions[questions[1]];
    var feedbackImage = document.querySelectorAll('#question2 img');
    for(var i=0; i<subquestions.length; i++){
        if (selectInputs[i].value ==  dropDownOptToRightAns[subquestions[i]]) {
            feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
            score += 1/subquestions.length;
        } else {
            feedbackImage[i].setAttribute('src','../images/wrongIcon.svg');
        }
    }
    return score;
}

/*This function provides feedback for the second question*/
function feedbackDropDown(){
    if(gradeDropDown() == 1){
        feedbackDivs[1].innerHTML = 'Good job!! You got all the answers right';
    } else {
        feedbackDivs[1].innerHTML = 'The right matches were: <br>' + questToOptions[questions[1]][0]+': '+ correctAnswersDropDown[0]+'<br>'+
                                     questToOptions[questions[1]][1]+': '+ correctAnswersDropDown[1]+'<br>'+
                                     questToOptions[questions[1]][2]+': '+ correctAnswersDropDown[2]+'<br>'+
                                     questToOptions[questions[1]][3]+': '+ correctAnswersDropDown[3]+'<br>'+ 'Elements that are supplied to the constructor in order to create an object: This corresponds to the constructor parameters that are used to initialise the fields.'
    }
}

/*The following function returns the score for the first question*/
function gradeCheckBox(){
    var score = 0;
    var checkBoxInputs = document.querySelectorAll('input[type=checkbox]');
    var feedbackImage = document.querySelectorAll('#question1 img');
    for(var i=0; i<checkBoxInputs.length; i++){
        if (checkBoxInputs[i].checked){
            if(correctAnswersCheckbox.indexOf(questToOptions[questions[0]][i]) != -1){
                feedbackImage[i].setAttribute('src','../images/correctIcon.svg');
                score += 1/correctAnswersCheckbox.length;
            } else {
                feedbackImage[i].setAttribute('src','../images/wrongIcon.svg');
            }
            
        }
    }
    return score;
}
/*This function provides feedback for the first question*/
function feedbackCheckBox(){
    if(gradeCheckBox() == 1){
        feedbackDivs[0].innerHTML = 'Good job!! You got all the answers right';
    } else {
        feedbackDivs[0].innerHTML = 'The right options were: ' +'<br>'+ correctAnswersCheckbox[0]+'<br>'+ correctAnswersCheckbox[1]+'<br>'
                                    + 'The class header and the import statements(if needed) are outside the class code block. The curly braces that contain the class code block are opened right after the class header and contains the fields, the constructor, and the methods of the class.'
    }
}

//The following functions loads the questions and their respective options
function loadQuestions(){
    document.getElementById("defaultOpen").click();
    var spanIndex = 0;
    for (var i = 0; i < questions.length; i++) {
        document.querySelectorAll('main div.formContent form > label')[i].innerHTML = questions[i];
    }

    for (var i = 0; i < questions.length-1; i++) {
        for (var j =0; j < questToOptions[questions[i]].length; j++) {
            spans[spanIndex + j].innerHTML = questToOptions[questions[i]][j];
        }
        spanIndex += questToOptions[questions[i]].length;
    }   

    //Specific to the dropdown question
    var optionIndex = 0;
    for(var i = 0; i < document.getElementsByTagName('select').length; i++){
        for(var j = 0; j < dropDownOptions.length; j++){
            document.getElementsByTagName('option')[optionIndex + j].innerHTML = dropDownOptions[j];
        }
        optionIndex += dropDownOptions.length;
    }

    //Specific to the drag and drop question
    var draggableButtons = document.getElementsByClassName('draggableButtons');
    for(var i =0; i < draggableButtons.length; i++){
        draggableButtons[i].innerHTML = draggableOptions[i];
    }
}

//The following three functions are specific to the drag and drop question

/*This function ensures when the answer is dragged, it can be dropped in the span*/ 
function allowDrop(event) {
    event.preventDefault();
}
/*This function captures the id of the element that is being dragged*/ 
function dragAnswer(event) {
    event.dataTransfer.setData("text", event.target.id);
}
/*This function ensures when the dragged element can be dropped in the span*/ 
function dropAnswer(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
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
