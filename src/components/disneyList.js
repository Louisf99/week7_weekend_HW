import React from "react";
import DisneyItem from "./disneyItem";


const DisneyList = ({disneys, onDisneySelected}) => {

    const DisneysItems = disneys.map((disney, index) => {
        return <DisneyItem disney={disney} key={index} onDisneySelected={onDisneySelected} />
    })


    return (
        <div id="countryList" class='component'>
            <h2>All Disney characters</h2>
            <hr></hr>
            <ul>
                {DisneysItems}
            </ul>
        </div>


       
    )
};

export default DisneyList;