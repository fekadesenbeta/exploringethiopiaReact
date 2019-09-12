import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
// import oromo1 from "./ethiopiapics/oromofreedom.jpg";
import flag from './ethiopiapics/flag.jpg'; 





function History() {
    return(
        <div className="history">
            <img id="history-image" src={[flag]} alt="history"/>
            <ul id="history-list">
                <li id="foundation">
                    <h1 id="history-header">Some Foundation</h1>
                        <p> First founded in 980BC, Ethiopia is Africa’s oldest independent country. 3. Ethiopia is also the second most-populous country in Africa, with a population of over 106 million, growing by 10 percent a year. It is second to Nigeria’s population of over 193 million.  
                            Ethiopia’s capital city, Addis Ababa, is the highest capital city in Africa at 7,726ft above sea level. Ethiopia is the only country in Africa that was never formally colonized, although Italy twice occupied it, from 1895 to 96 and 1935 to 1941.  Ethiopia is home to Lake Tana which feeds into the Blue Nile, one of the two major tributaries of the River Nile, the longest river in the world. 
                            Ethiopia is the only country to use a time system with a 12-hour clock counting from dawn to dusk, and from dusk to dawn. Thus 7:00AM in Ethiopia corresponds to 1:00 in daylight hours in local Ethiopian time. Midday is 6:00. The Ethiopian Calendar has 13 months and is over seven years behind the Gregorian calendar. As such, Ethiopia celebrated the new millennium on 11th September 2007.
                            This is because the Ethiopians did not change their calendar when the Roman church amended its ancient calendar in 525AD.
                            Ethiopians believe that the Ark of the Covenant, the legendary relic said to hold the 10 Commandments, is housed in a church in Ethiopia. Only one specially chosen guardian has access to the Ark, and even he is not allowed to look at it to confirm it’s actually there. 
                            There is only one man alive who has seen the alleged Ark in all its biblical glory. It is, according to Ethiopian lore, hidden in a church in Aksum—a small city in the northern highlands—and guarded by a single monk. Nobody else enters the room and only after his death will the monk leave the grounds. 
                        </p>
                </li>
                <li id="horn" >
                    <h1 id="history-header">The Horn of Africa</h1>
                        <p>Ethiopia, country on the Horn of Africa. The country lies completely within the tropical latitudes and is relatively compact, with similar north-south and east-west dimensions. The capital is Addis Ababa - “New Flower”, located almost at the centre of the country. Ethiopia is the largest and most populated country in the Horn of Africa. 
                            With the 1993 secession of Eritrea, its former province along the Red Sea, Ethiopia became landlocked.
                            Ethiopia is one of the world’s oldest countries, its territorial extent having varied over the millennia of its existence. In ancient times it remained centred on Aksum, an imperial capital located in the northern part of the modern state, about 100 miles (160 km) from the Red Sea coast. The present territory was consolidated during the 19th and 20th centuries as European powers encroached into Ethiopia’s historical domain. 
                            Ethiopia became prominent in modern world affairs first in 1896, when it defeated colonial Italy in the Battle of Adwa, and again in 1935–36, when it was invaded and occupied by fascist Italy. Liberation during World War II by the Allied powers set the stage for Ethiopia to play a more prominent role in world affairs.
                            Ethiopia was among the first independent nations to sign the Charter of the United Nations, and it gave moral and material support to the decolonization of Africa and to the growth of Pan-African cooperation. 
                            These efforts culminated in the establishment of the Organization of African Unity (since 2002, the African Union) and the United Nations Economic Commission for Africa, both of which have their headquarters in Addis Ababa</p>
                </li>
                <li id="facts" >
                    <h1 id="history-header">Beautiful Facts About Ethiopia</h1>
                        <p>In 1960, Ethiopian Abebe Bikila became the first black African to win an Olympic gold medal. He won the marathon in Rome barefoot after his only pair of running shoes were ruined and his replacements gave him blisters.
                            First founded in 980BC, Ethiopia is Africa’s oldest independent country.
                            Ethiopians believe that the Ark of the Covenant, the legendary relic said to hold the 10 Commandments, is housed in a church in Ethiopia. Only one specially chosen guardian has access to the Ark, and even he is not allowed to look at it to confirm it’s actually there. Handy that.
                            Ethiopia is home to the world’s rarest canid and Africa’s most threatened carnivore: the Ethiopian wolf. Fewer than 500 remain in the wild.
                            Ethiopia is the only country in Africa that was never formally colonised, although Italy twice occupied it: from 1895-96 and 1935-1941.</p>
                </li>
            </ul>
        </div>
    )

}


export default History;