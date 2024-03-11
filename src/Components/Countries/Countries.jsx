import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import('./Country.css')


const Countries = () => {
    const [countries, setContries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json()
                .then(data => setContries(data)))
    }, []);

    const handleCountryClick = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries :{countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}
                        handleCountryClick={handleCountryClick}></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;