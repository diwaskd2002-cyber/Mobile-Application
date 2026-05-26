function Calculate(type) {

    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);

    let result;

    if (type == "+")
        result = a + b;

    else if (type == "-")
        result = a - b;

    else if (type == "*")
        result = a * b;

    else if (type == "/")
        result = a / b;

    document.getElementById("result").innerHTML =
        "Result = " + result;
}