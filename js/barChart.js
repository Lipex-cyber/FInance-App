
(function() {
    const ctx = document.getElementById('barChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Receitas',
                    data: [4000, 3000, 5000, 4500, 6000, 5500],
                    backgroundColor: '#28a745', 
                    borderColor: '#28a745',
                    borderWidth: 1,
                    borderRadius: 8, 
                    borderSkipped: false, 
                },
                {
                    label: 'Despesas',
                    data: [2400, 1300, 3800, 3900, 4000, 3800],
                    backgroundColor: '#dc3545', 
                    borderColor: '#dc3545',
                    borderWidth: 1,
                    borderRadius: 8,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom', 
                    labels: {
                        usePointStyle: true, 
                        boxWidth: 8, 
                    }
                },
                title: {    
                    display: false, 
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value, index, values) {
                            if (value === 0) return '0';
                            if (value >= 1000) return (value / 1000) + 'k';
                            return value;
                        },
                        stepSize: 1200 
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false 
                    }
                }
            }
        }
    });
})();
