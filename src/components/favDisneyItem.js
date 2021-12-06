import React from "react";

const FavCountryItem = ({favCountry}) => {
    return (
        <>
        <li id="favList"><h2>{favCountry['name']}</h2></li>
        </>
    )
};

export default FavCountryItem;