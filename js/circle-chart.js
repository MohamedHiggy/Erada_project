//Water_Consumption
google.load("visualization", "1", { packages: ["corechart"] });

google.setOnLoadCallback(drawChartOne);

function drawChartOne() {
    var data = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Photos', 22],
        ['Videos', 9]
    ]);

    var options = {
        title: "",
        pieHole: 0.85,
        pieSliceBorderColor: "none",
        colors: ['#00B98B', '#CC1435'],
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "none"
        }
    };

    var chart = new google.visualization
        .PieChart(document.getElementById('Water_Consumption'));
    chart.draw(data, options);
}	

//Users
google.load("visualization", "2", { packages: ["corechart"] });

google.setOnLoadCallback(drawChartTwo);

function drawChartTwo() {
    var data = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Photos', 22],
        ['Videos', 9]
    ]);

    var options = {
        title: "",
        pieHole: 0.85,
        pieSliceBorderColor: "none",
        colors: ['#00B98B', '#CC1435'],
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "none"
        }
    };

    var chart = new google.visualization
    .PieChart(document.getElementById('Users'));
    chart.draw(data, options);
}


//Complaints
google.load("visualization", "3", { packages: ["corechart"] });

google.setOnLoadCallback(drawChartThree);

function drawChartThree() {
    var data = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Photos', 22],
        ['Videos', 9]
    ]);

    var options = {
        title: "",
        pieHole: 0.85,
        pieSliceBorderColor: "none",
        colors: ['#1496CC', '#F29122'],
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "none"
        }
    };

    var chart = new google.visualization
    .PieChart(document.getElementById('Complaints'));
    chart.draw(data, options);
}


//Orders
google.load("visualization", "3", { packages: ["corechart"] });

google.setOnLoadCallback(drawChartFour);

function drawChartFour() {
    var data = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Photos', 22],
        ['Videos', 9]
    ]);

    var options = {
        title: "",
        pieHole: 0.85,
        pieSliceBorderColor: "none",
        colors: ['#00B98B', '#1496CC'],
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "none"
        }
    };

    var chart = new google.visualization
    .PieChart(document.getElementById('Orders'));
    chart.draw(data, options);
}

//Conveyors
google.load("visualization", "3", { packages: ["corechart"] });

google.setOnLoadCallback(drawChartFive);

function drawChartFive() {
    var data = google.visualization.arrayToDataTable([
        ['Content', 'Size'],
        ['Photos', 22],
        ['Videos', 9],
        ['Videos', 15],
        ['Videos', 30]
    ]);

    var options = {
        title: "",
        pieHole: 0.85,
        pieSliceBorderColor: "none",
        colors: ['#00B98B', '#1496CC', '#F29122', '#505050'],
        legend: {
            position: "none"
        },
        pieSliceText: "none",
        tooltip: {
            trigger: "none"
        }
    };

    var chart = new google.visualization
    .PieChart(document.getElementById('Conveyors'));
    chart.draw(data, options);
}