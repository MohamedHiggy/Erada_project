google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['البلد', 'السعر'],
    ['رجب', 47],
    ['جمادي الثاني', 31],
    ['جمادي الأول', 25],
    ['ربيع الثاني', 71],
    ['ربيع الأول', 31],
    ['صفر', 42],
    ['محرم', 0]
  ]);

  var options = {
    title: '',
    curveType: 'function',
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    tooltip: {
        isHtml: true
    },
    vAxis: {
      gridlines: {
        color: "#FFFFFF"
      },
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}