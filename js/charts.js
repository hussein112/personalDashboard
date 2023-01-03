
const todayAvgProgress = document.getElementById('todayAverageProgress');




new Chart(todayAvgProgress, {
    type: 'bar',
    data: {
        labels: ['4/8', '8/8', '15/8', '20/8', '27/8'],
        datasets: [{
            label: '# of Tasks Completed',
            data: [10, 20, 30, 40, 60],
            borderWidth: 1,
            backgroundColor: document.documentElement.style.getPropertyValue('--primary'),
            borderColor: document.documentElement.style.getPropertyValue('--tertiary')
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const lastWeekProgress = document.getElementById('lastWeekProgress');


new Chart(lastWeekProgress, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: '# of Tasks Completed',
            data: [10, 30, 5, 100, 200, 50, 0],
            borderWidth: 1,
            backgroundColor: document.documentElement.style.getPropertyValue('--primary'),
            borderColor: document.documentElement.style.getPropertyValue('--tertiary')
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
