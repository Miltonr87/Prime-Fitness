function verify() {
  const data = new Date();
  const birth = data.getFullYear(); // 4 digits
  const year = document.getElementById("birth"); // Year provided by user
  const res = document.querySelector("div#res"); // Result of All Operations

  const weight = document.getElementById("weight");
  const height = document.getElementById("height");

  if (year.value.length == 0 || Number(year.value) > birth) {
    window.alert("[ERR] Check the data and try again!");
  } else {
    let sex = document.getElementsByName("radsex");
    let age = birth - Number(year.value);
    let gender = "";
    const img = document.createElement("img");
    img.setAttribute("id", "photo");

    if (sex[0].checked) {
      // Male checked
      gender = "Male";
      if (age >= 0 && age <= 15) {
        // child
      } else if (age < 34) {
        // young
      } else if (age < 50) {
        // adult
      } else {
        // old
      }
    } else if (sex[1].checked) {
      // Female checked
      gender = "Female";
      if (age >= 0 && age <= 15) {
        // child
      } else if (age < 34) {
        // young
      } else if (age < 50) {
        // adult
      } else {
        // old
      }
    }

    // BMI Caculator (Brazilian Reference)
    const w1 = Number.parseInt(weight.value); // Weight from user turned into a number
    const h2 = Number.parseFloat(height.value); // Height from user turned into a number

    const result = w1 / (h2 * h2); // BMI calculation with result

    if (result == 0) {
      window.alert("[ERR] Check the data and try again!");
    } else if (result < 17) {
      /* var para = document.createElement("P"); */
      var t = document.createTextNode("Very Underweight");
    } else if (result >= 17 || result <= 18.49) {
      var t = document.createTextNode("Underweight");
    } else if (result >= 18.5 || result <= 24.99) {
      var t = document.createTextNode("Normal Weight");
    } else if (result >= 25 || result <= 29.99) {
      var t = document.createTextNode("Overweight");
    } else if (result >= 30 || result <= 34.99) {
      var t = document.createTextNode("Obesity I");
    } else if (result >= 35 || result <= 39.99) {
      var t = document.createTextNode("Obesity II (severe)");
    } else if (result >= 40) {
      var t = document.createTextNode("Obesity III (morbid)");
    }
    res2.innerHTML = `BMI detected <strong> ${result.toFixed(
      2
    )} </strong> for <strong> ${age} </strong> years old: `;
    res3.appendChild(t);
  }
}
