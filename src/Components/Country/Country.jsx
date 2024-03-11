import { useState } from 'react';

import('./Country.css')
const Country = ({ country, handleCountryClick }) => {
    // console.log(country)
    const { name, capital, flags, population, cca3 } = country

    const [visited, setVisited] = useState(true)

    const handleClick = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${!visited ? 'visited' : 'non-visited'}`}>
            <h2>Name :{name.common} </h2>
            <img src={flags.png} alt="" />
            <h2>Capital :{capital}</h2>
            <p>Population :{population}</p>
            <h5>Country Code : {cca3}</h5>
            <button onClick={() => handleCountryClick(country)}>Visited Country</button>
            <br />
            <button onClick={handleClick}>{!visited ? 'Visited' : 'Going'}</button>
            <br />
            {!visited ? 'I have visited this country' : 'I am going to visit this country'}
        </div>
    );
};

export default Country;