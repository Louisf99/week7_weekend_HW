import React, {useState} from "react";
import CountryItem from "./disneyItem";

const CountryDetail = ({country, onFavSelected, favCountriesList}) => {
    
    if (!country) {
        return <h2>Please select a country too see more details</h2>
    }

    if (favCountriesList.find(favCountry => favCountry['name'] === country['name'])) {
        return (
            <div class='component'>
            <h2>Chosen character</h2>
            <hr></hr>
            <h3>{country['name']}</h3>
            <img src={country['imageUrl']} alt={country['imageUrl']} />
            <br/>
            <h3>This character features in -</h3>
            <p>Films: {country['films']}</p>
            <p>tvShows: {country['tvShows']}</p>
            <p>Friends/Allies: {country['allies']}</p>
            <p>Enemies: {country['enemies']}</p>
            <a href={country['sourceUrl']} target="_blank">To Find out even more info click on this!</a> 
            </div>
        )
    }

        

    return (
        <div class='component'>
            <h2>Chosen character</h2>
            <hr></hr>
           <h3>{country['name']}</h3>
            <img src={country['imageUrl']} alt={country['imageUrl']} />
            <br/>
            <h3>This character features in -</h3>
            <p>Films: {country['films']}</p>
            <p>tvShows: {country['tvShows']}</p>
            <p>Friends/Allies: {country['allies']}</p>
            <p>Enemies: {country['enemies']}</p>
            <a href={country['sourceUrl']} target="_blank">To Find out even more info click on this!</a>  
            <br/>
            <button  class="button" onClick={ () => {onFavSelected(country) } }>&#11088;</button>
        
        </div>
    )
}

export default CountryDetail