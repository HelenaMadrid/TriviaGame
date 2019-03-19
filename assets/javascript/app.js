$(document).ready(function () {
    var number = 10;
    //var countNextQ = 3;
    var secondsLeft;
    var nextQuestion;
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
    var numberQuestion = 0;
    var clockRunning = false;

    var question = $("#question");
    var optionOne = $("#option-one");
    var optionTwo = $("#option-two");
    var optionThree = $("#option-three");
    var optionFour = $("#option-four");

    function decrement() {
        number--;
        $("#show-number").text(number);
        console.log(number);
        $("#show-number").attr("class", "text-white");

        if (number === 0) {
            unansweredCounter++;
            numberQuestion++;
            clockRunning = false;
            clearInterval(secondsLeft);

            switch (numberQuestion) {
                case 1:
                    questions.Two.thirtySeconds();
                    break;
                case 2:
                    questions.Three.thirtySeconds();
                    break;
                case 3:
                    questions.Four.thirtySeconds();
                    break;
                case 4:
                    questions.Five.thirtySeconds();
                    break;
                case 5:
                    questions.Six.thirtySeconds();
                    break;
                case 6:
                    questions.Seven.thirtySeconds();
                    break;
                case 7:
                    questions.Eight.thirtySeconds();
                    break;
                case 8:
                    questions.Nine.thirtySeconds();
                    break;
                case 9:
                    questions.Ten.thirtySeconds();
                    break;
                case 10:
                    questions.results();
                    break;

            }

            // console.log(unansweredCounter);
            //reset();
            //questions.One.AnswerIncorrect();
        }
    }
    function startOver() {
        reset();
        nextQuestion;
        correctCounter = 0;
        incorrectCounter = 0;
        unansweredCounter = 0;
        numberQuestion = 0;
        clockRunning = false;
        show();
        questions.One.thirtySeconds();
    }

    function reset() {
        number = 11;
        secondsLeft;
    }
    function hide() {
        optionOne.hide();
        optionTwo.hide();
        optionThree.hide();
        optionFour.hide();
    }

    function show() {
        optionOne.show();
        optionTwo.show();
        optionThree.show();
        optionFour.show();
    }

    var questions = {
        One: {
            question: "1. What is the surname given to bastards born in Dorne?",
            answerOptions: ["Stone", "Rivers", "Snow", "Sand"],
            correctAnswer: "Sand",
            thirtySeconds: function () {
                if (!clockRunning) {
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }
                var opt1 = this.answerOptions[0];
                console.log(opt1);

                var opt2 = this.answerOptions[1];
                console.log(opt2);

                var opt3 = this.answerOptions[2];
                console.log(opt3);

                var opt4 = this.answerOptions[3];
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
                $(".option").on("click", function () {
                    var userAnswer = $(this);
                    console.log(userAnswer);
                    console.log(userAnswer.val());
                    console.log(questions.One.correctAnswer);
                    if (userAnswer.val() === questions.One.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //clockRunning=false;
                        questions.One.AnswerCorrect();
                        //questions.Two.thirtySeconds();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Two.thirtySeconds();
                        questions.One.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://thefashioncrow.files.wordpress.com/2016/05/meeting_in_dorn_jaime_myrcella.jpg' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Two.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.One.correctAnswer + ".</p><br><img src='https://thefashioncrow.files.wordpress.com/2016/05/meeting_in_dorn_jaime_myrcella.jpg' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Two.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Two: {
            question: "2. How did Daenerys Targaryen eventually hatch her dragon eggs?",
            answerOptions: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"],
            correctAnswer: "In a funeral pyre",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Two.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Two.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Two.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Two.answerOptions[3];
                console.log(opt4);

                question.text(questions.Two.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);


                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);
                    console.log(userAnswer);
                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Two.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Three.thirtySeconds();
                        questions.Two.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        questions.Two.AnswerIncorrect();
                        //questions.Three.thirtySeconds();
                    }

                });

            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://pa1.narvii.com/6227/002d80e5ee251df03d2131cc33daf63de05a8bc7_hq.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Three.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Two.correctAnswer + ".</p><br><img src='https://pa1.narvii.com/6227/002d80e5ee251df03d2131cc33daf63de05a8bc7_hq.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Three.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Three: {
            question: "3. The phrase 'Valar Morghulis' or 'all men must die' is usually responded with: ",
            answerOptions: ["Valar GoGo or 'all men must dance'", "Valar Morghulis or 'all men must die'", "Valar Rohnas or 'all men must live'", "Valar Dohaeris or 'all men must serve'"],
            correctAnswer: "Valar Dohaeris or 'all men must serve'",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Three.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Three.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Three.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Three.answerOptions[3];
                console.log(opt4);

                question.text(questions.Three.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Three.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Four.thirtySeconds();
                        questions.Three.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Four.thirtySeconds();
                        questions.Three.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://media1.tenor.com/images/0846eb162a5923ddc1c704cf7f521381/tenor.gif?itemid=12106922' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Four.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Three.correctAnswer + ".</p><br><img src='https://media1.tenor.com/images/0846eb162a5923ddc1c704cf7f521381/tenor.gif?itemid=12106922' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Four.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Four: {
            question: "4. Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
            answerOptions: ["Weirdwood", "Wildfire", "Valyrian Steel", "Snowballs"],
            correctAnswer: "Valyrian Steel",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Four.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Four.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Four.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Four.answerOptions[3];
                console.log(opt4);

                question.text(questions.Four.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Four.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Five.thirtySeconds();
                        questions.Four.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Five.thirtySeconds();
                        questions.Four.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://images.immediate.co.uk/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=45&resize=620,413' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Five.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Four.correctAnswer + ".</p><br><img src='https://images.immediate.co.uk/volatile/sites/3/2019/02/1-2-ac324ad.jpg?quality=45&resize=620,413' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Five.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Five: {
            question: "5. Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
            answerOptions: ["Ghost", "Nymeria", "Lady", "Summer"],
            correctAnswer: "Lady",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Five.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Five.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Five.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Five.answerOptions[3];
                console.log(opt4);

                question.text(questions.Five.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Five.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Six.thirtySeconds();
                        questions.Five.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Six.thirtySeconds();
                        questions.Five.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://media.vanityfair.com/photos/59751bbae3e3375c6a06ec49/master/w_690,c_limit/lady.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Six.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Five.correctAnswer + ".</p><br><img src='https://media.vanityfair.com/photos/59751bbae3e3375c6a06ec49/master/w_690,c_limit/lady.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Six.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Six: {
            question: "6. Arya's punishment for stealing from the Many-Face God is:",
            answerOptions: ["Death", "Memorie loss", "Uncontrollable laughter", "Blindness"],
            correctAnswer: "Blindness",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Six.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Six.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Six.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Six.answerOptions[3];
                console.log(opt4);

                question.text(questions.Six.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Six.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Seven.thirtySeconds();
                        questions.Six.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Seven.thirtySeconds();
                        questions.Six.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://media.giphy.com/media/ItEZ0kz23px6w/giphy.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Seven.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Six.correctAnswer + ".</p><br><img src='https://media.giphy.com/media/ItEZ0kz23px6w/giphy.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Seven.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Seven: {
            question: "7. Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
            answerOptions: ["Knowledge of poisons", "Pride in drawing blood first", "Nighttime attacks", "Ruby-colored armor"],
            correctAnswer: "Knowledge of poisons",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Seven.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Seven.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Seven.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Seven.answerOptions[3];
                console.log(opt4);

                question.text(questions.Seven.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Seven.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Eight.thirtySeconds();
                        questions.Seven.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Eight.thirtySeconds();
                        questions.Seven.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='http://i.imgur.com/UKeDkF0.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Eight.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Seven.correctAnswer + ".</p><br><img src='http://i.imgur.com/UKeDkF0.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Eight.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Eight: {
            question: "8. The Night King was created using a dagger made of:",
            answerOptions: ["Fire", "Dragonglass", "Blue Ice", "Obsidian"],
            correctAnswer: "Dragonglass",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Eight.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Eight.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Eight.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Eight.answerOptions[3];
                console.log(opt4);

                question.text(questions.Eight.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Eight.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Nine.thirtySeconds();
                        questions.Eight.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Nine.thirtySeconds();
                        questions.Eight.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://media0.giphy.com/media/3o85xlO10JSub49oiI/giphy.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Nine.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Eight.correctAnswer + ".</p><br><img src='https://media0.giphy.com/media/3o85xlO10JSub49oiI/giphy.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Nine.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Nine: {
            question: "9. How many arrows does Ramsay Bolton let loose at Rickon Stark?",
            answerOptions: ["Three", "Four", "Two", "Five"],
            correctAnswer: "Four",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Nine.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Nine.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Nine.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Nine.answerOptions[3];
                console.log(opt4);

                question.text(questions.Nine.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Nine.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.Ten.thirtySeconds();
                        questions.Nine.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.Ten.thirtySeconds();
                        questions.Nine.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://media.vanityfair.com/photos/59a5d09a98ea7f027d30ee14/master/w_690,c_limit/RICKON.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Ten.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Nine.correctAnswer + ".</p><br><img src='https://media.vanityfair.com/photos/59a5d09a98ea7f027d30ee14/master/w_690,c_limit/RICKON.gif' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.Ten.thirtySeconds, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        Ten: {
            question: "10. Dead creatures revived by White Walkers are known as:",
            answerOptions: ["Wights", "Walkers", "Zombie", "Claws"],
            correctAnswer: "Wights",
            thirtySeconds: function () {
                clearInterval(nextQuestion);
                if (!clockRunning) {
                    reset();
                    clearInterval(secondsLeft);
                    secondsLeft = setInterval(decrement, 1000);
                    clockRunning = true;
                }

                var opt1 = questions.Ten.answerOptions[0];
                console.log(opt1);

                var opt2 = questions.Ten.answerOptions[1];
                console.log(opt2);

                var opt3 = questions.Ten.answerOptions[2];
                console.log(opt3);

                var opt4 = questions.Ten.answerOptions[3];
                console.log(opt4);

                question.text(questions.Ten.question);

                show();

                optionOne.text(opt1);
                optionOne.attr("value", opt1)

                optionTwo.text(opt2);
                optionTwo.attr("value", opt2);

                optionThree.text(opt3);
                optionThree.attr("value", opt3);

                optionFour.text(opt4);
                optionFour.attr("value", opt4);

                $(".option").off("click");
                $(".option").on("click", function () {
                    var userAnswer = $(this);

                    console.log(userAnswer.val());
                    if (userAnswer.val() === questions.Ten.correctAnswer) {
                        console.log("correct");
                        correctCounter++;
                        numberQuestion++;
                        console.log("Counter: " + correctCounter);
                        //questions.results();
                        questions.Ten.AnswerCorrect();
                    }
                    else {
                        console.log("wrong");
                        incorrectCounter++;
                        numberQuestion++;
                        //questions.results();
                        questions.Ten.AnswerIncorrect();
                    }

                });
            },
            AnswerCorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Correct! Well done!</h3><br><img src='https://steamuserimages-a.akamaihd.net/ugc/849347241498889444/38C503D666338AA570644618AEA3A4A716963D19/' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.results, 3000);
                //questions.Two.thirtySeconds();
            },
            AnswerIncorrect: function () {
                clockRunning = false;
                clearInterval(secondsLeft);
                $("#show-number").text(number);
                question.html("<h3>Nope!</h3><p>The correct answer was " + questions.Ten.correctAnswer + ".</p><br><img src='https://steamuserimages-a.akamaihd.net/ugc/849347241498889444/38C503D666338AA570644618AEA3A4A716963D19/' class='col-xl-6 col-lg-6 col-md-6 col-sm-6'>");
                hide();
                nextQuestion = setInterval(questions.results, 3000);
                //questions.Two.thirtySeconds();
            },
        },

        results: function () {
            clearInterval(nextQuestion);
            $(".option").off("click");
            clockRunning = false;
            clearInterval(secondsLeft);
            question.html("<h3>All done, here's how you did!</h3><br><p>Correct Answers: " + correctCounter + "</p><br><p>Incorrect Answers: " + incorrectCounter + "</p><br><p>Unanswered: " + unansweredCounter + "</p><br><button class='h3' id='startOver'>Start Over?</button>");
            $("#startOver").on("click", function () {
                startOver();

            });
        }

    }

    questions.One.thirtySeconds();
});