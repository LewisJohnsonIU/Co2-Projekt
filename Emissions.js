import React, { useState, useMemo } from "react";

function Emissions() {
  const [selectedCountry, setSelectedCountry] = useState("Alle");
  const [selectedCompany, setSelectedCompany] = useState("Alle");
  const [countrySearch, setCountrySearch] = useState("");
  const [companySearch, setCompanySearch] = useState("");
  const [emissionsData, setEmissionsData] = useState([]);

  const countries = [
    "Alle",
    "USA",
    "China",
    "Indien",
    "Deutschland",
    "Brasilien",
  ];
  const companies = [
    "Alle",
    "Apple",
    "BMW - Bayrisches Motoren Werk",
    "Microsoft",
    "Tesla",
    "Google",
    "Meta",
    "Zoom",
  ];

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.toLowerCase().includes(countrySearch.toLowerCase())
    );
  }, [countrySearch, countries]);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
      company.toLowerCase().includes(companySearch.toLowerCase())
    );
  }, [companySearch, companies]);

  const getEmissionsData = (companies, countries) => {
    // Zufällig generierte Daten
    return Math.floor(Math.random() * 10000) + 500; // Zahl zwischen 500 und 10.500
  };

  const handleSubmit = () => {
    const data = getEmissionsData();
    setEmissionsData([
      { country: selectedCountry, company: selectedCompany, data },
    ]);
  };

  const handleCountrySearchChange = (e) => {
    setCountrySearch(e.target.value);
    setSelectedCountry(filteredCountries[0] || "Alle");
  };

  const handleCompanySearchChange = (e) => {
    setCompanySearch(e.target.value);
    setSelectedCompany(filteredCompanies[0] || "Alle");
  };

  return (
    <main className="container my-5">
      <h1>CO2 Emissions Data</h1>

      {/* Land Suchen über Suchleiste */}
      <div className="search-input-group">
        <label htmlFor="country-search">Land:</label>
        <input
          id="country-search"
          type="text"
          value={countrySearch}
          onChange={handleCountrySearchChange}
        />

        {/* Unternehmen Suchen über Suchleiste */}
        <label htmlFor="company-search">..........Unternehmen:</label>
        <input
          id="company-search"
          type="text"
          value={companySearch}
          onChange={handleCompanySearchChange}
        />
      </div>

      {/* Land Wählen über Dropdown */}
      <div className="dropdown-select-group">
        <label htmlFor="selected-country">Land:</label>
        <select
          id="selected-country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {filteredCountries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>

        {/* Unternehmen Wählen über Dropdown */}
        <label htmlFor="selected-company">
          ..........................Unternehmen:
        </label>
        <select
          id="selected-company"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {filteredCompanies.map((company) => (
            <option value={company} key={company}>
              {company}
            </option>
          ))}
        </select>

        {/* Button, um Auswahl zu bestätigen */}
        <button id="submit-btn" onClick={handleSubmit}>
          Fertig
        </button>
      </div>

      {/* Tabelle um Ergebnisse anzuzeigen */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Land</th>
            <th>Unternehmen</th>
            <th>CO2 Emissionen (in Tonnen)</th>
          </tr>
        </thead>
        <tbody>
          {emissionsData.map((item, index) => (
            <tr key={index}>
              <td>{item.country}</td>
              <td>{item.company}</td>
              <td>{item.data.toLocaleString()} tons</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Emissions;
