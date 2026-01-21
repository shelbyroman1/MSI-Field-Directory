window.addEventListener('DOMContentLoaded', async event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki
    // Fetch the JSON data
    const response = await fetch('_fields.json');
    const fields = await response.json();

    // Get the table body
    const tbody = document.querySelector('#datatablesSimple tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with field data
    fields.forEach(field => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${field.name}</td>
            <td>${field.sublocation}</td>
            <td>${field.address}</td>
            <td>${field['Surface Type']}</td>
            <td>${field['Suitable Game Size']}</td>
            <td>${field['Size of goals']}</td>
            <td>${field['Parking capacity']}</td>
            <td>${field['Parking lot location']}</td>
            <td>${field['Seating']}</td>
            <td>${field['Restrooms']}</td>
            <td>${field['Playgrounds']}</td>
        `;
        tbody.appendChild(row);
    });

    // Initialize DataTable
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});
