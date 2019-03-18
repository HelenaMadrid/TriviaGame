//var questions = ["What's my name?", "how old am I?", "what's my pet's name"];
//var option
var qNumber = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

var number = 10;
var countNextQ=3;
var secondsLeft;
var nextQuestion;
var correctCounter=0;
var incorrectCounter=0;
var unansweredCounter=0;
var clockRunning = false;

var question=$("#question");
var optionOne=$("#option-one");
var optionTwo=$("#option-two");
var optionThree=$("#option-three");
var optionFour=$("#option-four");

function decrement(){
    number--;
    $("#show-number").text(number);
    console.log(number);
    $("#show-number").attr("class","text-white");
    
    if(number === 0) {
        unansweredCounter++;
    }
}

function reset(){
    number = 10;
    secondsLeft;
}

function nextQ(){
    countNextQ--;
}

var questions = {
    One:{
        question: "1. What is the surname given to bastards born in Dorne?",
        answerOptions: ["Stone", "Rivers", "Snow", "Sand"],
        correctAnswer: "Sand",
        thirtySeconds: function(){
            if (!clockRunning) {
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning = true;
            }
            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.One.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.One.correctAnswer){
                    console.log("correct");
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    clockRunning=false;
                    questions.OneAnswerCorrect();
                    //questions.Two.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    //questions.Two.thirtySeconds();
                    questions.OneAnswerIncorrect();
                }

            });

        }
    },
    OneAnswerCorrect: function(){
        clockRunning=false;
        clearInterval(secondsLeft);
        $("#show-number").text(number);
        question.html("<h3>Correct! Well done!</h3><br><img src='https://images.immediate.co.uk/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=45&resize=620,413'>");
        optionOne.hide();
        optionTwo.hide();
        optionThree.hide();
        optionFour.hide();
        //nextQuestion=setTimeout(questions.Two.thirtySeconds, 3000);
        questions.Two.thirtySeconds();
    },

    OneAnswerIncorrect: function(){
        clockRunning=false;
        clearInterval(secondsLeft);
        $("#show-number").text(number);
        question.html("<h3>Nope!</h3><p>The correct answer was "+questions.One.correctAnswer+".</p><br><img src='https://images.immediate.co.uk/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=45&resize=620,413'>");
        
        
        optionOne.hide();
        optionTwo.hide();
        optionThree.hide();
        optionFour.hide();


        //nextQuestion=setTimeout(3000);
        questions.Two.thirtySeconds();
    },
    
    Two:{
        question: "2. How did Daenerys Targaryen eventually hatch her dragon eggs?",
        answerOptions: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
        correctAnswer: "In a funeral pyre",
        thirtySeconds: function(){
            if (!clockRunning) {
            reset();
            clearInterval(secondsLeft);
            secondsLeft = setInterval(decrement, 1000);
            clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Two.question);

            optionOne.show();
            optionTwo.show();
            optionThree.show();
            optionFour.show();

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);


            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Two.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Three.thirtySeconds();
                }
                if (number === 0) {
                    unansweredCounter++;
                    reset();
                    questions.Three.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Three.thirtySeconds();
                }

            });

        }
    },

    Three:{
        question: "3. The phrase 'Valar Morghulis' or 'all men must die' is usually responded with: ",
        answerOptions: ["Valar GoGo or 'all men must dance'", "Valar Morghulis or 'all men must die'", "Valar Rohnas or 'all men must live'", "Valar Dohaeris or 'all men must serve'"],
        correctAnswer: "Valar Dohaeris or 'all men must serve'",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Three.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Three.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Four.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Four.thirtySeconds();
                }

            });

        }
    },

    Four:{
        question: "4. Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
        answerOptions: ["Weirdwood", "Wildfire", "Valyrian Steel", "Snowballs"],
        correctAnswer: "Valyrian Steel",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Four.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Four.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Five.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Five.thirtySeconds();
                }

            });

        }
    }, 

    Five:{
        question: "5. Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
        answerOptions: ["Ghost", "Nymeria", "Lady", "Summer"],
        correctAnswer: "Lady",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Five.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Five.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Six.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Six.thirtySeconds();
                }

            });

        }
    },

    Six:{
        question: "6. Arya's punishment for stealing from the Many-Face God is:",
        answerOptions: ["Death", "Memorie loss", "Uncontrollable laughter", "Blindness"],
        correctAnswer: "Blindness",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Six.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Six.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Seven.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Seven.thirtySeconds();
                }

            });

        }
    },

    Seven:{
        question: "7. Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
        answerOptions: ["Knowledge of poisons", "Pride in drawing blood first", "Nighttime attacks", "Ruby-colored armor"],
        correctAnswer: "Knowledge of poisons",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Seven.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Seven.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Eight.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Eight.thirtySeconds();
                }

            });

        }
    },

    Eight:{
        question: "8. The Night King was created using a dagger made of:",
        answerOptions: ["Fire", "Dragonglass", "Blue Ice", "Obsidian"],
        correctAnswer: "Dragonglass",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Eight.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Eight.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Nine.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Nine.thirtySeconds();
                }

            });

        }
    },

    Nine:{
        question: "9. How many arrows does Ramsay Bolton let loose at Rickon Stark?",
        answerOptions: ["Three", "Four", "Two", "Five"],
        correctAnswer: "Four",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Nine.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Nine.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.Ten.thirtySeconds();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.Ten.thirtySeconds();
                }

            });

        }
    },

    Ten:{
        question: "10. Dead creatures revived by White Walkers are known as:",
        answerOptions: ["Wights", "Walkers", "Zombie", "Claws"],
        correctAnswer: "Wights",
        thirtySeconds: function(){
            if (!clockRunning) {
                reset();
                clearInterval(secondsLeft);
                secondsLeft = setInterval(decrement, 1000);
                clockRunning=true;
            }

            var opt1= this.answerOptions[0];
            console.log(opt1);

            var opt2= this.answerOptions[1];
            console.log(opt2);

            var opt3= this.answerOptions[2];
            console.log(opt3);

            var opt4= this.answerOptions[3];
            console.log(opt4);

            question.text(questions.Ten.question);

            optionOne.text(opt1);
            optionOne.attr("value", opt1)

            optionTwo.text(opt2);
            optionTwo.attr("value", opt2);

            optionThree.text(opt3);
            optionThree.attr("value", opt3);

            optionFour.text(opt4);
            optionFour.attr("value", opt4);

            $(".option").off("click");
            $(".option").on("click", function (){
                var userAnswer=$(this);
        
                console.log(userAnswer.val());
                if(userAnswer.val()===questions.Ten.correctAnswer){
                    console.log("correct");
                    reset();
                    correctCounter++;
                    console.log("Counter: "+ correctCounter);
                    questions.results();
                }
                else{
                    console.log("wrong");
                    incorrectCounter++;
                    questions.results();
                }

            });

        }
    },

    results: function (){
        clockRunning=false;
        clearInterval(secondsLeft);
        question.text("All done, here's how you did!");
        optionOne.text("");
        optionOne.append("<p>Correct Answers: "+correctCounter+"</p>");
        optionTwo.append("<p>Incorrect Answers: "+incorrectCounter+"</p>");

    }
}

questions.One.thirtySeconds();





