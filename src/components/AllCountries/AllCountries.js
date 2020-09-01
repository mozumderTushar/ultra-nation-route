import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AllCountries.css'

const AllCountries = (props) => {
    const {name, flag ,alpha3Code} = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/country/${name}`)
    }
    return (
        <div className="countries-container">
            <img src={flag} alt=""/>
            <h2>{name}</h2>
            <Link to={`/country/${name}`}> <h4 className="link-more">More Info</h4> </Link>
            <button onClick={()=>handleClick(name)} className="main-button">More Info</button>
        </div>
    );
};

export default AllCountries;