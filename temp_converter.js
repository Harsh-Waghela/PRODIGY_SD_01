document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", () => {
        const temperatureInput = document.getElementById("temperatureInput").value;
        const unit = document.getElementById("unitSelect").value;
        const convertedSection = document.getElementById("convertedSection");

        const celsiusOutput = document.getElementById("celsiusOutput");
        const fahrenheitOutput = document.getElementById("fahrenheitOutput");
        const kelvinOutput = document.getElementById("kelvinOutput");

        const temp = parseFloat(temperatureInput);

        if (isNaN(temp)) {
            alert("Please enter a valid temperature value.");
            return;
        }

        let celsius, fahrenheit, kelvin;

        switch (unit) {
            case "celsius":
                celsius = temp;
                fahrenheit = (temp * 9/5) + 32;
                kelvin = temp + 273.15;
                break;
            case "fahrenheit":
                celsius = (temp - 32) * 5/9;
                fahrenheit = temp;
                kelvin = celsius + 273.15;
                break;
            case "kelvin":
                celsius = temp - 273.15;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = temp;
                break;
        }

        // Update the result section
        celsiusOutput.textContent = celsius.toFixed(2);
        fahrenheitOutput.textContent = fahrenheit.toFixed(2);
        kelvinOutput.textContent = kelvin.toFixed(2);

        // Trigger slide-in animation
        convertedSection.classList.remove("active"); // Reset previous animation
        void convertedSection.offsetWidth; // Force reflow to restart animation
        convertedSection.classList.add("active");
    });
});
