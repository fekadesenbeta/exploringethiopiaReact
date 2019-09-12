import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import parade from "./ethiopiapics/parade.jpeg";


function People() {
    return(
        <div className="people-container">
            <img id="parade-image" src={[parade]} alt="#"/>
            <h1 id="tribe-click">Click on a tribe to learn more</h1>
                <ul id="people-list">
                        <div id="oromo">
                            <li><a href="https://www.google.com/search?q=oromo&rlz=1C5CHFA_enUS838US838&oq=oromo&aqs=chrome.0.69i59j0l4j69i60.1053j0j4&sourceid=chrome&ie=UTF-8" target="_blank">Oromo</a></li>
                                <div id="population">Population: 39,386,078 </div>
                        </div>
                        <div id="amhara">
                            <li><a href="https://www.google.com/search?rlz=1C5CHFA_enUS838US838&sxsrf=ACYBGNQuCtrRNlGoOQalHNpiphMwZwB9rw:1568226548207&q=amhara&spell=1&sa=X&ved=0ahUKEwjk6dSSs8nkAhWLnp4KHRkXAaEQBQgvKAA&biw=1920&bih=1001" target="_blank">Amhara</a></li>
                                <div id="population">Population: 30,383,546</div>
                        </div>
                        <div id="somali">
                            <li><a href="https://www.google.com/search?rlz=1C5CHFA_enUS838US838&biw=1920&bih=1001&sxsrf=ACYBGNQjg297L7wxl0P0n0P9HrH_MyXHVw%3A1568226550514&ei=9jx5XcKFH5Pr-gSBs6yYCA&q=somali&oq=somali&gs_l=psy-ab.3..0i67l4j0l6.99025.99593..99941...0.3..0.216.734.3j2j1......0....1..gws-wiz.......0i71j35i39j0i131j0i20i263.3Bc41ZvSiDM&ved=0ahUKEwjC2OGTs8nkAhWTtZ4KHYEZC4MQ4dUDCAs&uact=5" target="_blank">Somali</a></li>
                                <div id="population">Population: 6,976,962 </div>
                        </div>
                        <div id="tigraway">
                            <li><a href="https://en.wikipedia.org/wiki/Tigrayans" target="_blank">Tigraway</a></li>
                                <div id="population">Population: 6,751,899</div>
                        </div>
                        <div id="gurage">
                            <li><a href="https://www.google.com/search?rlz=1C5CHFA_enUS838US838&sxsrf=ACYBGNStLaB1uyq7TnBQFWyfnTS9e6Hp7w%3A1568226597624&ei=JT15Xf7YJcrY-gTY1q3IBg&q=gurage&oq=gurage&gs_l=psy-ab.3..0j0i10j0l2j0i10j0l2j0i10l3.106040.106699..106860...0.3..0.203.596.3j1j1......0....1..gws-wiz.......0i71j35i39j0i131i67j0i67j0i131.gr1k5zcwo6s&ved=0ahUKEwi-_5yqs8nkAhVKrJ4KHVhrC2kQ4dUDCAs&uact=5" target="_blank">Gurage</a></li>
                            <div id="population">Population: 2,813,291</div>
                        </div>
                </ul>
        </div>
    )
}

// * Oromo 34.5%
// * Amhara 26.9%
// * Somali 6.2%
// * Tigraway 6.1%
// * Gurage 2.5%
export default People;