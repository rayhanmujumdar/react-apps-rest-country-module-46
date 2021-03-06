import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"
const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div> 
            <h2 className='py-3'>Hello Countries</h2>
            <h4 className='p-3'>Available country: {countries.length}</h4>
            <div className='country-container row justify-content-around'>
            {
                countries
                .map(country => <Country 
                    countryData={country}
                    key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};
export default Countries;