function fahrenheit_calculate() {
    let fahrenheit_amount = +document.querySelector("#input_Fahrenheit_amount").value;
    let result_fahrenheit = document.querySelector("#output_display_1");
    
    
    let result_1 = (((fahrenheit_amount - 32) / 1.8) + 273.15).toFixed(2);
    result_fahrenheit.innerHTML = result_1
    
}


function celsius_calculate() {
    let celsius_amount = +document.querySelector("#input_Celsius_amount").value;
    let result_celsius = document.querySelector("#output_display_2");
    
    
    let result_2 = (celsius_amount + 273.15).toFixed(2);
    result_celsius.innerHTML = result_2
    
}