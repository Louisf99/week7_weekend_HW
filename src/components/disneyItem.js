import React from "react";


const DisneyItem = ({disney, onDisneySelected}) => {
    return(
        <li onClick={ () => {onDisneySelected(disney) } }>{disney['name']}</li>
    )
};


export default DisneyItem;