function checkResult() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);
    let m6 = Number(document.getElementById("m6").value);
    let m7 = Number(document.getElementById("m7").value);
    let m8 = Number(document.getElementById("m8").value);

    let total = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;

    let division = "";
    let message = "";

    if (total >= 700) {
        division = "Distinction";
        message = "Congratulations! You got Distinction.";
        document.getElementById("result").style.color = "green";}
    
        else if (total >= 600) {
        division = "First Division";
        message = "Congratulations! You got First Division.";
        document.getElementById("result").style.color = "green";}
    else if (total >= 500) {
        division = "Second Division";
        message = "Good Job! You got Second Division.";
        document.getElementById("result").style.color = "orange";}

    else if (total >= 400) {
        division = "Third Division";
        message = "You got Third Division. Read More";
        document.getElementById("result").style.color = "blue";
    }
    else {
        division = "Fail";
        message = "Read More! You Failed.";
        document.getElementById("result").style.color = "red";
    }
    
    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Result: " + division +
        "<br>" + message;
}