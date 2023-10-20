var canvasElement = document.getElementById('skillsChart');

var config = {
  type: 'pie',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB', 'Express', 'ReactJS'],
    datasets: [{label: 'Skill Set', data: [5, 5, 4, 2, 2, 2, 2]}]
  },
  options: {
    responsive: true,
  }
};

var skillsChart = new Chart(canvasElement, config)
