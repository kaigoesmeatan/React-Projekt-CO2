import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [filterText, setFilterText] = useState('');
  const [activeTab, setActiveTab] = useState('Unsere Mission');
  const [activeFooterTab, setActiveFooterTab] = useState('');
  const [dir, setDir] = useState('ltr'); // => Standardmäßig 'ltr'

  const allowedCharacters = /^[a-zA-ZäöüÄÖÜß0-9-\s]*$/;

  useEffect(() => {
    // Ermittlung der bevorzugten Sprache des Benutzers
    const userLang = navigator.language || navigator.userLanguage;
    // HTML-Element auswählen und Sprachattribut setzen
    document.documentElement.lang =userLang;
    // Dynamisch das 'dir' Attribut setzen basierend auf der Sprache
    // rtl => right to left
    // ltr => left to right
    if (['ar', 'he', 'fa'].includes(language)) { // Beispiel für RTL-Sprachen
      setDir('rtl');
    } else {
      setDir('ltr');
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFooterTabClick = (tab) => {
    setActiveFooterTab(tab);
  };

  const data = [
    { land: 'Deutschland', unternehmen: 'Thüringer Bratwurst Gbr', emissionen: '2.000.000' },
    { land: 'England', unternehmen: 'London Burger Ltd.', emissionen: '2.500.000' },
    { land: 'China', unternehmen: 'Glückskeks GmbH', emissionen: '3.800.000' },
    { land: 'Schweiz', unternehmen: 'Wiener Schnitzel Holding', emissionen: '3.100.000' },
    { land: 'Mexico', unternehmen: 'Lecker Takkos GmbH', emissionen: '1.400.000' },
    { land: 'Italien', unternehmen: 'Pasta Imperium GmbH', emissionen: '4.600.000' },
  ];

  const filteredData = data.filter(item =>
    item.land.toLowerCase().includes(filterText.toLowerCase()) ||
    item.unternehmen.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div dir={dir}>
      <header className="bg-dark text-white p-3">
        <div className="container">
          <div className="header-flex">
            <div className="logo-container">
              <img src="logo192.png" alt="Logo" className="logo" />
              <h1 className="site-title">CO2-Footprint | Land & Industrie</h1>
            </div>
            <nav className="nav-container">
              <ul className="nav">
                <li className="nav-item">
                  <button
                    className={`nav-link text-white ${activeTab === 'Unsere Mission' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Unsere Mission')}
                  >
                    Unsere Mission
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link text-white ${activeTab === 'Über uns' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Über uns')}
                  >
                    Über uns
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link text-white ${activeTab === 'Kontakt' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Kontakt')}
                  >
                    Kontakt
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="container mt-5">
          {activeTab === 'Unsere Mission' && (
            <div>
              <h2>Unsere Mission</h2>
              <p>Wir setzen uns für Transparenz im Klimaschutz ein, indem wir eine Webseite entwickeln,
                die die CO2-Emissionen von Unternehmen und Ländern offenlegt. Unser interdisziplinäres
                Team arbeitet daran, diese Plattform zu gestalten und umzusetzen, um der Öffentlichkeit
                klare und verständliche Informationen zu bieten.</p>
              <p>Ziel ist es, informierte Entscheidungen zu fördern und den Dialog über den Klimawandel zu unterstützen.</p>
            </div>
          )}
          {activeTab === 'Über uns' && (
            <div>
              <h2>Über uns</h2>
              <p>Wir sind eine Non-Profit-Organisation, die sich dem Kampf gegen den Klimawandel widmet.
                Unser Fokus liegt auf der Schaffung transparenter Informationen über CO2-Emissionen weltweit.
                Mit einem engagierten Team arbeiten wir daran, verständliche Daten bereitzustellen, um
                Bewusstsein zu schaffen und umweltbewusste Entscheidungen zu fördern.</p>
              <p>Unser Ziel ist es, durch Klarheit und Aufklärung einen positiven Beitrag für den Planeten zu leisten.</p>
            </div>
          )}
          {activeTab === 'Kontakt' && (
            <div>
              <h2>Kontakt</h2>
              <p>Wir freuen uns, von Ihnen zu hören! Bei Fragen, Anregungen oder für weitere
                Informationen zu unserer Arbeit stehen wir Ihnen gerne zur Verfügung.</p>
              <p>So erreichen Sie uns:</p>
              <p>E-Mail: [Max-Mustermann@co2footprint.com]</p>
              <p>Telefon: [01234/56789]</p>
              <p>Adresse: [Max Mustermann Allee 1, 012345 Musterhausen]</p>
              <p>Für allgemeine Anfragen oder spezifische Anliegen können Sie auch unser Kontaktformular
                auf der Webseite nutzen. Wir bemühen uns, Ihnen so schnell wie möglich zu antworten.
                Vielen Dank für Ihr Interesse und Ihre Unterstützung!</p>
              </div>
          )}

          {/* Der restliche Inhalt der Seite bleibt unverändert */}
          <h2>Filtern der CO2-Emissionsdaten nach Land, oder Unternehmen</h2>
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
      </main>

      <footer className="bg-dark text-white p-3 mt-5">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; 2024 Non-Profit Organisation. Alle Rechte vorbehalten.</p>
          <div className="nav d-flex">
            <button
              className={`nav-link text-white ${activeFooterTab === 'Impressum' ? 'active' : ''}`}
              onClick={() => handleFooterTabClick('Impressum')}
            >
              Impressum
            </button>
            <button
              className={`nav-link text-white ${activeFooterTab === 'Datenschutz' ? 'active' : ''}`}
              onClick={() => handleFooterTabClick('Datenschutz')}
            >
              Datenschutz
            </button>
          </div>
        </div>
      </footer>

      {activeFooterTab === 'Impressum' && (
        <div className="container mt-3">
          <h2>Impressum</h2>
          <p>Im Impressum finden Sie alle rechtlichen Informationen zu dieser Webseite und ihrem Betreiber. 
            Hier erfahren Sie mehr über die verantwortlichen Personen, unsere Kontaktdaten sowie 
            gesetzlich erforderliche Angaben. 
            <p>Für detaillierte Informationen zu unserer Organisation, 
            unseren rechtlichen Verpflichtungen und den Ansprechpartnern stehen Ihnen alle relevanten 
            Daten zur Verfügung. Bitte zögern Sie nicht, uns bei Fragen oder Anliegen zu kontaktieren.</p></p>
          {/* hier weitere Inhalte für das Impressum hinzufügen */}
        </div>
      )}

      {activeFooterTab === 'Datenschutz' && (
        <div className="container mt-3">
          <h2>Datenschutz</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Auf dieser Seite informieren wir Sie darüber, wie wir Ihre Daten erfassen, verwenden und schützen.
            <p>Wir erläutern, welche Informationen wir sammeln, zu welchem Zweck wir diese nutzen und 
              wie wir Ihre Daten sichern. Zudem erfahren Sie, welche Rechte Sie in Bezug auf Ihre 
              persönlichen Informationen haben, einschließlich Ihres Rechts auf Auskunft, Berichtigung, 
              Löschung und Widerspruch.
              <p>Unser Ziel ist es, Ihre Privatsphäre zu wahren und sicherzustellen, dass Ihre Daten 
                gemäß den geltenden Datenschutzgesetzen behandelt werden. 
                Für detaillierte Informationen über unsere Datenschutzpraktiken und Ihre Rechte lesen 
                Sie bitte unsere umfassenden Datenschutzrichtlinien. Bei weiteren Fragen oder Anliegen 
                können Sie uns gerne kontaktieren.</p></p></p>
          {/* hier weitere Inhalte zum Datenschutz hinzufügen */}
        </div>
      )}
    </div>
  );
}

export default App;
