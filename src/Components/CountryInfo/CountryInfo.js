import React from 'react';
import './CountryInfo.css'
import { Link, useHistory } from 'react-router-dom';

const CountryInfo = (props) => {
    const { name, flag, alpha2Code} = props.country;

    const history = useHistory();
    const handleClick = (countryAlpha) =>{
        const url = `/area/${countryAlpha}`
            history.push(url)                                  // history.push(`/country${countryAlpha}`)
    }
    return (
        <div className='countryStyle'>
            
            <div className="row">
                
                <img className='countryFlag' src={flag} alt="" />
                <h3> <small>{name}</small> </h3>
                <h3>{alpha2Code}</h3>
                <Link to={`/area/${alpha2Code}`}> <button className='styleBtn'>More Details</button></Link>
                <button className='styleBtn' onClick={() => handleClick(alpha2Code)}>click me</button>
            </div>
        </div>
    );
};

export default CountryInfo;