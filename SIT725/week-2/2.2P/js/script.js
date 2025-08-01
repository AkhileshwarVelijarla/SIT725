function addNumbers() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;

  fetch(`/add?num1=${num1}&num2=${num2}`)
    .then(response => response.json())
    .then(data => {
      if (data.result !== undefined) {
        document.getElementById('result').textContent = `Result: ${data.result}`;
      } else {
        document.getElementById('result').textContent = `Error: ${data.error}`;
      }
    })
    .catch(err => {
      document.getElementById('result').textContent = `Error: ${err.message}`;
    });
}
