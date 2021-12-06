import React, {useState, useEffect} from 'react';
import DisneyList from '../components/disneyList';
import DisneyDetail from '../components/disneyDetails';
import FavDisneys from '../components/favDisneys';

const DisneyContainer = () => {

    const [countries, setCountries] = useState([]);
    const [ selectedCountry, setSelectedCountry] = useState(null);
    const [ favCountriesList, setSelectedFavCountry] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    const getCountries = function(){
        fetch('https://api.disneyapi.dev/characters')
        .then(res => res.json())
        .then(countries => setCountries(countries.data))
    };
    
    const onCountrySelected = (country) => {
        setSelectedCountry(country);
    }

    const onFavSelected = (favCountry) => {
        setSelectedFavCountry([...favCountriesList, favCountry])
    }

    return (
        <div class='container'>
            <DisneyList countries={countries} onCountrySelected={onCountrySelected}/>
            <DisneyDetail country={selectedCountry} onFavSelected={onFavSelected} favCountriesList={favCountriesList}/>
            <FavDisneys favCountriesList={favCountriesList} />
        </div>

        
    )
}

export default DisneyContainer;