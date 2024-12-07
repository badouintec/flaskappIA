// Inicializar gráfica
const ctx = document.getElementById('chartCanvas').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Consumo de agua (m³)',
            data: [50, 45, 60, 70, 65],
            backgroundColor: 'rgba(42, 157, 143, 0.2)',
            borderColor: 'rgba(42, 157, 143, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
