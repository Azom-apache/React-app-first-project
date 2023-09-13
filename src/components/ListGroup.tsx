import React, { useState, useEffect } from 'react';

function ListGroup() {
  const [countries, setCountries] = useState([]);
  const textAlign = {
    textAlign: 'center',
  };

  useEffect(() => {
    // Fetch data from the URL when the component mounts
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div style={textAlign}>List</div>


      
      <ul style={textAlign} className="list-group">
        
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
