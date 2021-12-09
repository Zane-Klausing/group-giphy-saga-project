import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'


function SearchView(){
    const dispatch = useDispatch();

    const [newImage, setNewImage] = useState('');
    useEffect(() => {
        handleSearch()
        },[]
    )


    function setFavoriteCategory(category){
        switch(category){
            case Funny: 
                return console.log('HA THIS IS FUNNY')
            case Cohort: 
                return console.log('HA THIS IS cohort')
            case Cartoon: 
                return console.log('HA THIS IS cartoon')
            case Nsfw: 
                return console.log('HA THIS IS nsfw')
            case Meme: 
                return console.log('HA THIS IS meme')
            default:
                return console.log('Hey something is not working');
        }
    }

    function handleSearch () {
        dispatch({
            type:'FETCH_GIF',
            // payload: newSearch // This is the phrase/word that the user search
        })
    }
    // setNewImage (useSelector((store) => store.gifReducer));
    return (

        <div>
                <form onSubmit={()=>{handleSearch()}}>
                <input onChange={e => setFavoriteCategory(Funny)} type="radio" id="Funny" name="order_type" value="funny"/>
                    <label for="Funny">Funny</label>
                <input onChange={e => setFavoriteCategory(Cohort)} type="radio" id="Cohort" name="order_type" value="cohort"/>
                    <label for="Cohort">Cohort</label>
                <input onChange={e => setFavoriteCategory(Cartoon)} type="radio" id="Cartoon" name="order_type" value="cartoon"/>
                    <label for="Cartoon">Cartoon</label>
                <input onChange={e => setFavoriteCategory(Nsfw)} type="radio" id="Nsfw" name="order_type" value="nsfw"/>
                    <label for="Nsfw">NSFW</label>
                <input onChange={e => setFavoriteCategory(Meme)} type="radio" id="Meme" name="order_type" value="meme"/>
                    <label for="Meme">Meme</label>
                </form>
                {/* <img src={newImage.data}></img> */}
        </div>
    )

}



export default SearchView;