const temperatureInput = document.getElementById("temperature");
const unitInput = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

const error = document.getElementById("error");


convertBtn.addEventListener("click", function () {

    const temperature = parseFloat(temperatureInput.value);

    const unit = unitInput.value;


    // Check if the user entered a valid temperature
    if (isNaN(temperature)) {

        error.textContent = "Please enter a valid temperature.";

        result.style.display = "none";

        return;
    }


    // Clear previous error
    error.textContent = "";


    if (unit === "celsius") {

        const fahrenheit = (temperature * 9 / 5) + 32;

        const kelvin = temperature + 273.15;


        result1.textContent =
            `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

        result2.textContent =
            `Kelvin: ${kelvin.toFixed(2)} K`;

    }


    else if (unit === "fahrenheit") {

        const celsius = (temperature - 32) * 5 / 9;

        const kelvin = celsius + 273.15;


        result1.textContent =
            `Celsius: ${celsius.toFixed(2)} °C`;

        result2.textContent =
            `Kelvin: ${kelvin.toFixed(2)} K`;

    }


    else if (unit === "kelvin") {

        const celsius = temperature - 273.15;

        const fahrenheit = (celsius * 9 / 5) + 32;


        result1.textContent =
            `Celsius: ${celsius.toFixed(2)} °C`;

        result2.textContent =
            `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

    }


    result.style.display = "block";

});


// Reset button
resetBtn.addEventListener("click", function () {

    temperatureInput.value = "";

    unitInput.value = "celsius";

    result1.textContent = "";

    result2.textContent = "";

    error.textContent = "";

    result.style.display = "none";

});