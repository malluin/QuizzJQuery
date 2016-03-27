// JavaScript Document
$( document ).ready(function() {
$("#quizz > ul > li > ul > li").each(function() {
	$(this).css("cursor","pointer");
	$(this).bind("click",  function() {
	saveAndCheck($(this).attr('class'), $("#quizz ul").index($(this).parent())-1); 		
	$(this).parent().children().unbind();
	$(this).parent().children().addClass('notChosen');
	$(this).removeClass('notChosen');
	$(this).addClass('chosen');
	$(this).parent().children().css("cursor","text");
 
	});
});

var nbQuestions = $("#quizz > ul > li").length;

var t = new Array();

for (i=0; i<nbQuestions; i++) {
	t[i]='';
}

var nbAnswers=0;
var score=0;
	
function saveAndCheck(reponse, num) {
	nbAnswers++;
	t[num]=reponse;
	if(nbAnswers==nbQuestions) {
		$("#quizz").append("<ul id='score'><li> Votre score est de "+getScore()+"</li></ul>");
	}
}

function getScore() {
	for(i=0; i<nbQuestions; i++) {
		if(t[i]=='correct') {
			score++;
		}
	}
	return score;
}
});