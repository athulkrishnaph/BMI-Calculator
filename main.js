var gender;
var input;
calc = function () {
  if (!heigh.value || !weigh.value || !aged.value || gender === undefined) {
    alert("Enter sufficient inputs");
  } else {
      let output = weigh.value / (heigh.value / 100) ** 2;
      if (output < 16) {
        input = "Severe Thinness";
      } else if (output >= 16 && output < 17) {
        input = "Moderate Thinness";
      } else if (output >= 17 && output < 18.5) {
        input = "Mild Thinness";
      } else if (output >= 18.5 && output < 25) {
        input = "Normal";
      } else if (output >= 25 && output < 30) {
        input = "Overweight";
      } else if (output >= 30 && output < 35) {
        input = "Obese Class I";
      } else if (output >= 35 && output < 40) {
        input = "Obese Class II";
      } else {
        input = "Obese Class III";
      }
    bmi.innerHTML = "BMI : " + output.toFixed(2) + "("+input+")";
    let bfp = 1.2 * output + 0.23 * aged.value - 16.2 * gender - 5.4;
    fat.innerHTML = "BODY FAT : " + bfp.toFixed(2) + "%";
  }
};
genm = function () {
    gender = 1;
    men.style.transform = "scale(1.05)";
    const mElements = document.getElementsByClassName("m");
    for (const m of mElements) {
        m.style.color = "lightblue";
    }
    men.style.transition="transform 0.3s"
    female.style.transform = "scale(1)";
};
genf = function () {
    gender = 0;
    men.style.transform = "scale(1)";
    const fElements = document.getElementsByClassName("f");
    for (const f of fElements) {
        f.style.color = "pink";
    }
    female.style.transition="transform 0.3s"
    female.style.transform = "scale(1.05)";
};
weightincrement = function () {
  weigh.value++;
};
weightdecrement = function () {
  weigh.value--;
};
ageincrement = function () {
  aged.value++;
};
agedecrement = function () {
  aged.value--;
};
hei = function () {
    hei.style.colour="rgb(91, 91, 91)"
}