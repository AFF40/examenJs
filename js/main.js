/*
 Author: AFF40<alejandro.fernando.flores99@gmail.com>
 Final Test: Bases de javascript
 Date: 3-5-2024
*/
// Función para obtener las tasas de cambio
function getExchangeRates(amount, fromCurrency, toCurrency) {
  fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rates = data.rates;
      const rateToCurrency = rates[toCurrency];
      // Realizar el cálculo de conversión utilizando la tasa de cambio obtenida
      const convertedAmount = amount * rateToCurrency;
      // Actualizar tu página HTML para mostrar el resultado
      document.getElementById('respuesta').value = convertedAmount.toFixed(2);
    })
    .catch(error => {
      console.error('Error al obtener las tasas de cambio:', error);
      alert('Ocurrió un error al obtener las tasas de cambio.');
    });
}

// boton calcular
const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('monto').value);
  const fromCurrency = document.getElementById('de').value;
  const toCurrency = document.getElementById('a').value;

  // Realizar la solicitud a la API de conversión de divisas
  getExchangeRates(amount, fromCurrency, toCurrency);
});


// Función para intercambiar las divisas y actualizar el resultado
function intercambiarDivisasYCalcular() {
  const amount = parseFloat(document.getElementById('monto').value);
  const fromCurrency = document.getElementById('de').value;
  const toCurrency = document.getElementById('a').value;


  // Verificar si se han seleccionado divisas válidas
  if (fromCurrency === toCurrency) {
    alert('Por favor selecciona divisas diferentes.');
    return;
  }

  // Intercambiar los valores de las divisas
  document.getElementById('de').value = toCurrency;
  document.getElementById('a').value = fromCurrency;

  getExchangeRates(amount, toCurrency, fromCurrency);
}

// botón de intercambio
const btnIntercambiar = document.getElementById('intercambiar');
btnIntercambiar.addEventListener('click', () => {
  intercambiarDivisasYCalcular(); 
});

