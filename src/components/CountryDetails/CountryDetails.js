import React from 'react';

const CountryDetails = (props) => {
    const {name,capital,region,subregion,population,currencies} = props.country;
    return (
        <div>
           <h2>{name}</h2>
           <h3>Captial: {capital}</h3>
           <h3>Region: {region}</h3>
           <h3>Subregion: {subregion}</h3>
           <p>Population: {population}</p>
           currencies:
           {
               currencies.map(currencies => <p key={currencies.code}>{currencies.code}</p>)
           }
        </div>
    );
};

export default CountryDetails;