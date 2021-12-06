import React from "react";


const CountryItem = ({country, onCountrySelected}) => {
    return(
        <li onClick={ () => {onCountrySelected(country) } }>{country['name']}</li>
    )
};


export default CountryItem;