// Tabelle.js
import React, { useState } from 'react';

export function Tabelle() {
  const [filterText, setFilterText] = useState('');

  // Die Zeichenbeschränkung für das Eingabefeld
  const allowedCharacters = /^[a-zA-ZäöüÄÖÜß0-9-\s]*$/;

  // Beispielhafte Daten für die Tabelle
  const data = [
    { land: 'Deutschland', unternehmen: 'Thüringer Bratwurst Gbr', emissionen: '2.000.000' },
    { land: 'England', unternehmen: 'London Burger Ltd.', emissionen: '2.500.000' },
    { land: 'China', unternehmen: 'Glückskeks GmbH', emissionen: '3.800.000' },
    { land: 'Schweiz', unternehmen: 'Wiener Schnitzel Holding', emissionen: '3.100.000' },
    { land: 'Mexico', unternehmen: 'Lecker Takkos GmbH', emissionen: '1.400.000' },
    { land: 'Italien', unternehmen: 'Pasta Imperium GmbH', emissionen: '4.600.000' },
  ];

  // Filtern der Daten basierend auf dem Filtertext
  const filteredData = data.filter(item =>
    item.land.toLowerCase().includes(filterText.toLowerCase()) ||
    item.unternehmen.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h2>Filtern der CO2-Emissionsdaten nach Land oder Unternehmen</h2>
      <form id="filterForm" className="mb-3">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              id="filterText"
              className="form-control filter-input"
              placeholder="Nach Land oder Unternehmen filtern"
              value={filterText}
              onChange={(e) => {
                if (allowedCharacters.test(e.target.value)) {
                  setFilterText(e.target.value);
                }
              }}
            />
          </div>
        </div>
      </form>

      <table id="emissionsTable" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Land</th>
            <th>Unternehmen</th>
            <th>Jährliche Emissionen (Tonnen CO2)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.land}</td>
              <td>{item.unternehmen}</td>
              <td>{item.emissionen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}