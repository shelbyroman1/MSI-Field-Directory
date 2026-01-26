window.addEventListener('DOMContentLoaded', async event => {
  const response = await fetch('fields.json');
  const fields = await response.json();

  const tbody = document.querySelector('#datatablesSimple tbody');
  tbody.innerHTML = '';

  // Convert null/undefined/"null" into blank text
  const show = (v) => (v === null || v === undefined || v === 'null') ? '' : v;

  fields.forEach(field => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${show(field['field_name'])}</td>
      <td>${show(field['sub_location'])}</td>
      <td>${show(field['school_catchment_area'])}</td>
      <td>${show(field['address'])}</td>
      <td>${show(field['usage_type'])}</td>
      <td>${show(field['surface_type'])}</td>
      <td>${show(field['slope'])}</td>
      <td>${show(field['evenness'])}</td>
      <td>${show(field['divots'])}</td>
      <td>${show(field['suitable_game_size'])}</td>
      <td>${show(field['lined'])}</td>
      <td>${show(field['goals'])}</td>
      <td>${show(field['goal_size'])}</td>
      <td>${show(field['goal_mobility'])}</td>
      <td>${show(field['goal_type'])}</td>
      <td>${show(field['parking_capacity'])}</td>
      <td>${show(field['parking_lot_location'])}</td>
      <td>${show(field['lights'])}</td>
      <td>${show(field['seating'])}</td>
      <td>${show(field['restrooms'])}</td>
      <td>${show(field['playgrounds'])}</td>
      <td>${show(field['track'])}</td>
      <td>${show(field['Attachments'])}</td>
    `;
    tbody.appendChild(row);
  });

  const datatablesSimple = document.getElementById('datatablesSimple');
  if (datatablesSimple) new simpleDatatables.DataTable(datatablesSimple);
});
