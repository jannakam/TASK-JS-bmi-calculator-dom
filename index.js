function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  // Challenge 1
  const heightInM = height * 0.01;
  const bmi = weight / (heightInM * heightInM);
  alert(bmi);

  // Challenge 2
  if (bmi < 18.5) {
    alert("Underweight");
  } else if (bmi > 18.5 && bmi < 24.9) {
    alert("Healthy Weight");
  } else if (bmi > 25 && bmi < 29.9) {
    alert("Overweight");
  } else if (bmi > 30) {
    alert("Obesity");
  }

  // Challenge 3
  let healthy = false;
  if (age > 19 && age < 24) {
    if (bmi > 19 && bmi < 24) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else if (age > 25 && age < 34) {
    if (bmi > 20 && bmi < 25) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else if (age > 35 && age < 44) {
    if (bmi > 21 && bmi < 26) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else if (age > 45 && age < 54) {
    if (bmi > 22 && bmi < 27) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else if (age > 55 && age < 64) {
    if (bmi > 23 && bmi < 28) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else if (age > 65) {
    if (bmi > 24 && bmi < 29) {
      healthy = true;
    } else {
      healthy = false;
    }
  } else {
    alert("Age is outside the valid range");
  }

  if (healthy === false) {
    alert("Unhealthy");
  } else {
    alert("Healthy");
  }
}
