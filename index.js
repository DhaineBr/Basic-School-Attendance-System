var clockElement = document.getElementById('clock');

function clock() {
    clockElement.textContent = new Date().toString();
}

setInterval(clock, 1000);



/*--------------------------------------------------LINECHART | DASHBOARD------------------------------------------*/




google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Students Average', 'Employees Average'], 
    ["August", 30, 10], ["September", 12, 11], ["October", 9, 9], ["November", 13, 4],
    ["December", 12, 6], ["January", 15, 5], ["February", 13, 12], ["March", 22, 10],
    ["April", 19, 10], ["May",12, 9], ["June",11, 13], ["July",15, 12],
  ]);

  // Set Options
  var options = {
    title: 'Monthly Attendance Summary',
    haxis: '',
    vaxis:'',
    legend: ''

  };

  // Draw
  var chart = new 
  google.visualization.LineChart(document.getElementById('myChart'));
  chart.draw(data, options);    
} 