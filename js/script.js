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
            <td>${field['field_name']}</td>
            <td>${field['sub_location']}</td>
            <td>${field['school_catchment_area']}</td>
            <td>${field['address']}</td>
            <td>${field['usage_type']}</td>
            <td>${field['surface_type']}</td>
            <td>${field['slope']}</td>
            <td>${field['evenness']}</td>
            <td>${field['divots']}</td>
            <td>${field['suitable_game_size']}</td>
            <td>${field['lined']}</td>
            <td>${field['goals']}</td>
            <td>${field['goal_size']}</td>
            <td>${field['goal_mobility']}</td>
            <td>${field['goal_type']}</td>
            <td>${field['parking_capacity']}</td>
            <td>${field['parking_lot_location']}</td>
            <td>${field['lights']}</td>
            <td>${field['seating']}</td>
            <td>${field['restrooms']}</td>
            <td>${field['playgrounds']}</td>
            <td>${field['track']}</td>
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
