function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please enter both weight and height!");
        return;
    }

    height = height / 100; // Convert cm to meters
    let bmi = (weight / (height * height)).toFixed(1);

    document.getElementById("bmi-value").innerText = bmi;

    let category = "";
    let tips = "";

    if (bmi < 18.5) {
        category = "Underweight";
        tips = "Eat more calories, focus on protein-rich foods, and exercise regularly.";
        document.getElementById("bmi-value").style.color = "blue";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        tips = "Maintain a balanced diet and keep an active lifestyle!";
        document.getElementById("bmi-value").style.color = "green";
    } else if (bmi >= 25 && bmi <= 39.9) {
        category = "Overweight";
        tips = "Consider a diet rich in fruits, veggies, and lean protein. Exercise at least 30 minutes daily.";
        document.getElementById("bmi-value").style.color = "orange";
    } else {
        category = "Obese";
        tips = "Follow a healthy diet, reduce sugar intake, and engage in cardio exercises regularly.";
        document.getElementById("bmi-value").style.color = "red";
    }

    document.getElementById("bmi-category").innerText = category;
    document.getElementById("health-tips").innerText = tips;

    // Highlight scale bar
    let scales = document.querySelectorAll(".scale");
    scales.forEach(scale => scale.style.opacity = "0.2");

    if (bmi < 18.5) scales[0].style.opacity = "1";
    else if (bmi >= 18.5 && bmi <= 24.9) scales[1].style.opacity = "1";
    else if (bmi >= 25 && bmi <= 39.9) scales[2].style.opacity = "1";
    else scales[3].style.opacity = "1";
}

function resetBMI() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi-value").innerText = "--";
    document.getElementById("bmi-category").innerText = "Category";
    document.getElementById("health-tips").innerText = "Enter your weight & height to get tips.";
    document.querySelectorAll(".scale").forEach(scale => scale.style.opacity = "0.2");
}
