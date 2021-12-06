import React from "react";


const DisneyDetail = ({disney, onFavSelected, favDisneysList}) => {
    
    if (!disney) {
        return <h2>Please select a Disney character too see more details</h2>
    }

    if (favDisneysList.find(favDisney => favDisney['name'] === disney['name'])) {
        return (
            <div class='component'>
            <h2>Chosen character</h2>
            <hr></hr>
            <h3>{disney['name']}</h3>
            <img src={disney['imageUrl']} alt={disney['imageUrl']} />
            <br/>
            <h3>This character features in -</h3>
            <p>Films: {disney['films']}</p>
            <p>tvShows: {disney['tvShows']}</p>
            <p>Friends/Allies: {disney['allies']}</p>
            <p>Enemies: {disney['enemies']}</p>
            <a href={disney['sourceUrl']} target="_blank">To Find out even more info about them click here!</a> 
            </div>
        )
    }

        

    return (
        <div class='component'>
            <h2>Chosen character</h2>
            <hr></hr>
           <h3>{disney['name']}</h3>
            <img src={disney['imageUrl']} alt={disney['imageUrl']} />
            <br/>
            <h3>This character features in -</h3>
            <p>Films: {disney['films']}</p>
            <p>tvShows: {disney['tvShows']}</p>
            <p>Friends/Allies: {disney['allies']}</p>
            <p>Enemies: {disney['enemies']}</p>
            <a href={disney['sourceUrl']} target="_blank">To Find out even more info click on this!</a>  
            <br/>
            <button  class="button" onClick={ () => {onFavSelected(disney) } }>&#11088;</button>
        
        </div>
    )
}

export default DisneyDetail