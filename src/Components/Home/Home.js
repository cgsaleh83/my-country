import React, { useState } from 'react';
import { useEffect } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <p>Total Country: {country.length}</p>
            {
                country.map(country => <CountryInfo country={country}></CountryInfo>)
            }
        </div>
    );
};

export default Home;
