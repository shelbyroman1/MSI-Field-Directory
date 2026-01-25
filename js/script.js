window.addEventListener('DOMContentLoaded', async event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    // Fetch the JSON data
    const response = await fetch('fields.json');
    const fields = await response.json();

    // Get the table body
    const tbody = document.querySelector('#datatablesSimple tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with field data
    fields.forEach(field => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${field['Field Name']}</td>
            <td>${field['Sub-Location']}</td>
            <td>${field['School Catchment Area']}</td>
            <td>${field['Address']}</td>
            <td>${field['Usage Type']}</td>
            <td>${field['Surface Type']}</td>
            <td>${field['Slope']}</td>
            <td>${field['Evenness']}</td>
            <td>${field['Divots']}</td>
            <td>${field['Suitable Game Size']}</td>
            <td>${field['Lined']}</td>
            <td>${field['Goals']}</td>
            <td>${field['Goal Size']}</td>
            <td>${field['Goal Mobility']}</td>
            <td>${field['Goal Type']}</td>
            <td>${field['Parking Capacity']}</td>
            <td>${field['Parking Lot Location']}</td>
            <td>${field['Lights']}</td>
            <td>${field['Seating']}</td>
            <td>${field['Restrooms']}</td>
            <td>${field['Playgrounds']}</td>
            <td>${field['Track']}</td>
            <td>${field['Attachments']}</td>
        `;
        tbody.appendChild(row);
    });

    // Initialize DataTable
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});
