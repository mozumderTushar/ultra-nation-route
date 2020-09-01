import React, { useState } from 'react';
import { useEffect } from 'react';
import AllCountries from '../AllCountries/AllCountries';

const Countires = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Total Countries: {countries.length}</h3> 
            {
                countries.map(country => <AllCountries country={country} key={country.name}></AllCountries>)
            }
        </div>
    );
};

export default Countires;