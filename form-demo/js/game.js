let fname = "";

//function for the greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;

    //show the result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!"
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct. Honey is the best!";
    }
}

function truths() {
    let truthsAnswer = document.getElementById("truths-answer");
    let kentuckySelected = document.getElementById("kentucky").checked;
    let languagesSelected = document.getElementById("languages").checked;
    let siblingsSelected = document.getElementById("siblings").checked;

    if (kentuckySelected) {
        truthsAnswer.innerHTML = fname + ", you are wrong! I was born in Kentucky and lived there for the first few years of my life."
    } else if (languagesSelected) {
        truthsAnswer.innerHTML = fname + ", you are wrong! I learned English at school, Estonian from my mom, and Swedish from my dad."
    } else if (siblingsSelected) {
        truthsAnswer.innerHTML = fname + ", you are right! I only have one sister. She is in 8th grade at EPS."
    }
}