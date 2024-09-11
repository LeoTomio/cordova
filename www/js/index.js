document.getElementById('primeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number) || number <= 0) {
        resultDiv.textContent = 'Por favor, insira um número positivo.';
        resultDiv.className = 'result text-danger ';
        return;
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(number)) {
        resultDiv.textContent = `${number} é um número primo.`;
        resultDiv.className = 'result text-success';
    } else {
        resultDiv.textContent = `${number} não é um número primo.`;
        resultDiv.className = 'result text-danger';
    }
});
