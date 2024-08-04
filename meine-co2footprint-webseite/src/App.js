import React, { useState } from 'react';

function App() {
  const [filterLand, setFilterLand] = useState('');
  const [filterUnternehmen, setFilterUnternehmen] = useState('');

  const data = [
    { land: 'Deutschland', unternehmen: 'Thüringer Bratwurst Gbr', emissionen: '2.000.000' },
    { land: 'England', unternehmen: 'London Burger Ltd.', emissionen: '2.500.000' },
    { land: 'China', unternehmen: 'Glückskeks GmbH', emissionen: '3.800.000' },
    { land: 'Schweiz', unternehmen: 'Wiener Schnitzel GmbH', emissionen: '3.100.000' },
  ];

  const filteredData = data.filter(item =>
    item.land.toLowerCase().includes(filterLand.toLowerCase()) &&
    item.unternehmen.toLowerCase().includes(filterUnternehmen.toLowerCase())
  );

  return (
    <div>
      <header className="bg-dark text-white p-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src="logo.png" alt="Logo" width="50" height="50" />
            </div>
            <h1 className="ml-3">Klimawandel & CO2-Emissionen</h1>
            <nav>
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link text-white">Startseite</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Über uns</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <aside className="col-md-3 mb-3">
            <nav>
              <ul id="local-menu" className="list-group">
                <li className="list-group-item"><a href="#">CO2-Emissionen nach Land</a></li>
                <li className="list-group-item"><a href="#">CO2-Emissionen nach Unternehmen</a></li>
                <li className="list-group-item"><a href="#">Emissionstrends</a></li>
              </ul>
            </nav>
          </aside>

          <main className="col-md-9">
            <h2>CO2-Emissionsdaten</h2>

            <form id="filterForm" className="mb-3">
              <div className="form-row">
                <div className="col">
                  <input 
                    type="text" 
                    id="filterLand" 
                    className="form-control" 
                    placeholder="Nach Land filtern"
                    value={filterLand}
                    onChange={(e) => setFilterLand(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input 
                    type="text" 
                    id="filterUnternehmen" 
                    className="form-control" 
                    placeholder="Nach Unternehmen filtern"
                    value={filterUnternehmen}
                    onChange={(e) => setFilterUnternehmen(e.target.value)}
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
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <div className="container">
          <p>&copy; 2024 Non-Profit Organisation. Alle Rechte vorbehalten. <a href="#" className="text-white">Impressum</a> | <a href="#" className="text-white">Datenschutz</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
