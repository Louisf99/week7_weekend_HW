import React from "react";
import CountryItem from "./disneyItem";


const CountryList = ({countries, onCountrySelected}) => {

    const CountriesItems = countries.map((country, index) => {
        return <CountryItem country={country} key={index} onCountrySelected={onCountrySelected} />
    })


    return (
        <div id="countryList" class='component'>
            <h2>All Disney characters</h2>
            <hr></hr>
            <ul>
                {CountriesItems}
            </ul>
        </div>


       
    )
};

export default CountryList;