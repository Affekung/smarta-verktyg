function calculateBMI() {

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

height = height / 100;

let bmi = weight / (height * height);

let category = "";

if (bmi < 18.5) {
    category = "Undervikt";
} else if (bmi < 25) {
    category = "Normalvikt";
} else if (bmi < 30) {
    category = "Övervikt";
} else {
    category = "Fetma";
}

document.getElementById("result").innerHTML =
    "Ditt BMI är " + bmi.toFixed(1) + "<br>" + category;

}
