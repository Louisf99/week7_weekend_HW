import React, {useState, useEffect} from 'react';
import CountryList from '../components/disneyList';
import CountryDetail from '../components/disneyDetails';
import FavCountries from '../components/favDisneys';

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
            <CountryList countries={countries} onCountrySelected={onCountrySelected}/>
            <CountryDetail country={selectedCountry} onFavSelected={onFavSelected} favCountriesList={favCountriesList}/>
            <FavCountries favCountriesList={favCountriesList} />
        </div>

        
    )
}

export default DisneyContainer;