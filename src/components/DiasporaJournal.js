import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';




function DiasporaJournal() {

    const opts = {
        height: '900',
        width: '1930',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }}


    return(
        <div className="diaspora">
            <h1>Diaspora Journal</h1>
                <p id="diaspora-info">We all have value within our voice, strength within our stories, and purpose within our pain. 
The Diaspora Journal is a film and campaign to connect the world to the African Diaspora culture.  Immerse into the life of an Ethiopian Diaspora through the journey of Nate as a filmmaker. From giving free taxi rides as a taxi cab’s assistant to shining shoes in the streets of one of the fastest growing economic cities in the world, The Diaspora Journal reveals a young man experiencing a day in the life of locals in Addis Ababa while discovering identity, freedom and hope.</p>
            <div id="video">
                <YouTube
                    id="video"
                    videoId='1oufx-25uqo'
                    opts={opts}/>
            </div>
        </div>
    )

}


export default DiasporaJournal;