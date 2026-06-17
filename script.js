function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
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

  document.getElementById("result").innerHTML =
    "Ditt BMI är " + bmi.toFixed(1) + "<br>" + category;
}
