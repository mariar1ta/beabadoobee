const ctx = document.getElementById('socialChart').getContext('2d');

// Dados das redes sociais
const data = {
    labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok'],
    datasets: [{
        label: 'Bilhões de usuários ativos',
        data: [2900, 2500, 2000, 1500, 1000],
        backgroundColor: [
            '#808080', // Cinza escuro
            '#a9a9a9', // Cinza médio
            '#c0c0c0', // Cinza claro
            '#d3d3d3', // Cinza suave
            '#dcdcdc'  // Cinza pálido
        ],
        borderColor: [
            '#808080',
            '#a9a9a9',
            '#c0c0c0',
            '#d3d3d3',
            '#dcdcdc'
        ],
        borderWidth: 2
    }]
};

const config = {
    type: 'bar',  // Gráfico de barras
    data: data,
    options: {
        onClick: (e, activeEls) => {
            if (activeEls.length > 0) {
                const chartIndex = activeEls[0].index;
                const urls = [
                    'https://facebook.com',
                    'https://youtube.com',
                    'https://whatsapp.com',
                    'https://instagram.com',
                    'https://tiktok.com'
                ];
                // Redireciona para a rede social correspondente
                window.open(urls[chartIndex], '_blank');
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: true // Mantém a proporção original
    }
};

const socialChart = new Chart(ctx, config);

// Simular atualização em tempo real
setInterval(() => {
    const newData = [2900 + Math.random() * 10, 2500 + Math.random() * 10, 2000 + Math.random() * 10, 1500 + Math.random() * 10, 1000 + Math.random() * 10];
    socialChart.data.datasets[0].data = newData;
    socialChart.update();
}, 5000);
