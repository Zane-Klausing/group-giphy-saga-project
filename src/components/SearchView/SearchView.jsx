import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'


function SearchView(){
    const dispatch = useDispatch();
    let gifReducer = useSelector((store) => store.gifReducer);
    const [newImage, setNewImage] = useState({});
    const [newSearch, setSearch] = useState('');
    useEffect(() => {
        handleSearch()
        },[]
    )

    function readyNewImage (event){

        setNewImage(gifReducer) 
        return(
            <img src={newImage.data}></img>
        )
    }


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

    const handleSearch = () =>{
        dispatch({
            type:'FETCH_GIF',
            // payload: newSearch // This is the phrase/word that the user search
        })
        console.log('THIS IS THE NEW IMAGE', newImage);
    }

    // Starting a POST for Search router
    const sendRequest = () => {
        dispatch({
        type: 'SEARCH_GIF',
        payload: newSearch
        })
        console.log('DISPATCHED SEARCH')
    };

return (
        <div>
                <form onSubmit={()=>{sendRequest()}}>
                {/* <input onChange={e => setFavoriteCategory(Funny)} type="radio" id="Funny" name="order_type" value="funny"/>
                    <label for="Funny">Funny</label>
                <input onChange={e => setFavoriteCategory(Cohort)} type="radio" id="Cohort" name="order_type" value="cohort"/>
                    <label for="Cohort">Cohort</label>
                <input onChange={e => setFavoriteCategory(Cartoon)} type="radio" id="Cartoon" name="order_type" value="cartoon"/>
                    <label for="Cartoon">Cartoon</label>
                <input onChange={e => setFavoriteCategory(Nsfw)} type="radio" id="Nsfw" name="order_type" value="nsfw"/>
                    <label for="Nsfw">NSFW</label>
                <input onChange={e => setFavoriteCategory(Meme)} type="radio" id="Meme" name="order_type" value="meme"/>
                    <label for="Meme">Meme</label> */}
                <input
                    placeholder="search gifs"
                    type="text"
                    value={newSearch}
                    onChange={e => setSearch(e.target.value)}
                />
                <button>Search</button>
                </form>
                {gifReducer.data ? gifReducer.data.map(gif => (<img id={newSearch}src={gif.images['480w_still'].url}></img>)): null}
                </div>
                )
            }
export default SearchView;