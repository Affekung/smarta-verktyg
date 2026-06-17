function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Ange både längd och vikt.";
    return;
  }

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

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML =
    "Ditt BMI är " + bmi.toFixed(1) + "<br>" + category;
}

function calculateCalories() {
  let gender = document.getElementById("gender").value;
  let age = parseFloat(document.getElementById("age").value);
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let activity = parseFloat(document.getElementById("activity").value);
  let bmr;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calories = Math.round(bmr * activity);

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML =
    "Ditt ungefärliga kaloribehov är " + calories + " kalorier per dag.";
}
