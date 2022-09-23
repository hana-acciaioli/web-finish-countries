//const
const searchForm = document.getElementById('search-form');
const csvButton = document.getElementById('csv-button');

//events

csvButton.addEventListener('click', () => {
    tableToCSV();
    downloadCSVFile();
    console.log();
});

//functions

function tableToCSV() {
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    const rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            // Get the text data of each cell of
            // a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(','));
    }
    // combine each row data with new line character
    csv_data = csv_data.join('\n');

    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
}

function downloadCSVFile(csv_data) {
    // Create CSV file object and feed our
    // csv_data into it
    const CSVFile = new Blob([csv_data], { type: 'text/csv' });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = 'Countries.csv';
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = 'none';
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
