let fname = "";

//function for the greet
function feedback() {
    //grab the greet paragraph
    let feedbackParagraph = document.getElementById("feedback");

    //get values from the form
    fname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedbackText = document.getElementById("feedback");

    alert("Your feedback has been received. Thank you so much, " + fname + ".")
}