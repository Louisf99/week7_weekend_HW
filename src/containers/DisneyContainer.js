import React, {useState, useEffect} from 'react';
import DisneyList from '../components/disneyList';
import DisneyDetail from '../components/disneyDetails';
import FavDisneys from '../components/favDisneys';

const DisneyContainer = () => {

    const [ disneys, setDisneys] = useState([]);
    const [ selectedDisney, setSelectedDisney] = useState(null);
    const [ favDisneysList, setSelectedFavDisney] = useState([]);

    useEffect(() => {
      getDisneys();
    }, []);

    const getDisneys = function(){
        fetch('https://api.disneyapi.dev/characters')
        .then(res => res.json())
        .then(disneys => setDisneys(disneys.data))
    };
    
    const onDisneySelected = (disney) => {
        setSelectedDisney(disney);
    }

    const onFavSelected = (favDisney) => {
        setSelectedFavDisney([...favDisneysList, favDisney])
    }

    return (
        <div class='container'>
            <DisneyList disneys={disneys} onDisneySelected={onDisneySelected}/>
            <DisneyDetail disney={selectedDisney} onFavSelected={onFavSelected} favDisneysList={favDisneysList}/>
            <FavDisneys favDisneysList={favDisneysList} />
        </div>

        
    )
}

export default DisneyContainer;