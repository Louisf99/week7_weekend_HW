import React from "react";

const FavDisneyItem = ({favDisney}) => {
    return (
        <>
        <li id="favList"><h2>{favDisney['name']}</h2></li>
        </>
    )
};

export default FavDisneyItem;