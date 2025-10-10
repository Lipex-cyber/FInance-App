(function() {
    const ctx = document.getElementById('pieChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Transporte', 'Alimentação', 'Lazer', 'Moradia', 'Outros'],
            datasets: [{
                label: "Distribuição de Gastos",
                data: [500, 1200, 800, 2700, 500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8,
                    }
                },
                title: {
                    display: false,
                } ,
            },
        }
    });
})();

