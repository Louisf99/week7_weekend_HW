import React from "react";
import FavDisneyItem from "./favDisneyItem";

const FavDisneys = ({favDisneysList}) => {

    const starDisneys = favDisneysList.map((favDisney, index) => {
        return <FavDisneyItem favDisney={favDisney} key={index} />
    });

    return (
        <div class='component'>
            <h2>Favourite Disney characters</h2>
            <ul>
                {starDisneys}
            </ul>
        </div>
    )
};

export default FavDisneys;