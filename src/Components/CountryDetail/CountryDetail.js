import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = (props) => {
    let { countryDetail} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/alpha/${countryDetail}`;
         fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, []);

  
    
    return (
        <div>
            
            <h1>Hey This Is My Infrmation</h1>
            <div className='countryStyle'>
                <div className="row">
                    <h1>{countryDetail}</h1>
                    
                    <img className='countryFlag' src={country.flag} alt="" />
                    <h3>  <small>Population: {country.population} </small> </h3>
                    <h3> <small>Region: {country.region} </small></h3>
                    <h3><small>Country Name: {country.nativeName}</small></h3>
                    <button className='styleBtn'>More Details</button>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;