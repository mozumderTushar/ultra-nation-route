import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';

const EachCountry = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() =>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
           
            {
                country.map(country => <CountryDetails key={country.name} country={country}></CountryDetails>)
            }
        </div>
    );
};

export default EachCountry;