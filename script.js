var magicNumber = Math.floor(Math.random() * 11);

function showNumber() {

    var number = document.getElementById("magicNumber").value;

    document.getElementById("demo").innerHTML = magicNumber;

    if (number == magicNumber) {
        alert("is correct!")
    } else if (number < magicNumber) {
        alert("the number is smaller.Try next time!")
    } else if (number > magicNumber) {
        alert("the number is greater.Try next time!")
    }


}

function magicProcess() {
    console.log("sample", document.getElementById("demo"))
    document.getElementById("demo").innerHTML = "Yey!";
}
function showMeTheNumber() {
    alert(magicNumber)
}


