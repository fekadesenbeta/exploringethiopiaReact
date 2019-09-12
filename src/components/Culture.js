import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import family from "./ethiopiapics/family.jpg";




function Culture() {
    return(
        <div className="culture">
            <img id="family-image" src={[family]} alt="family"/>
            <ul id="culture-list">
                <li>
                    <h1 id="culture-header">Social Organization</h1>
                        <p> Family is the most important aspect of Ethiopians’ lives. It forms the basis of people’s support networks, with relatives often being mutually reliant on one another to meet everyday challenges (see Collective Life and Community Belonging in Core Concepts). 
                            The importance of family ties means that many Ethiopians feel a strong obligation to support kin that may seem ‘distantly’ related by Western standards. 
                            For example, an Ethiopian person living in an English-speaking Western country may priorities sending money back to extended family members overseas over building their personal savings. In some cases, entire communities can be dependent (directly or indirectly) on the provisions of an immigrant living overseas.
                            The extended family remains the focus of the social system. It includes relatives on both sides of the family as well as close friends. Quite often the husband’s parents will live with the nuclear family when they get older and can no longer care for themselves. When people marry, they join their families, thus ensuring that there will always be a group to turn to in times of need.
                            Individuals achieve recognition or social standing through their extended family. A family's honor is influenced by the actions of its members. Family needs are put before all other obligations, including business.
                        </p>
                </li>
                <li >
                    <h1 id="culture-header">Customs and Traditions</h1>
                        <p> The handshake is generally much lighter than in Western cultures. After a close personal relationship has been established people may kiss three times on the cheeks. 
                            People are addressed with their honorific title and their first name. “Ato", "Woizero", and "Woizrity" are used to address a man, married woman, and unmarried woman respectively. Elders should be greeted first. It is customary to bow when introduced to someone who is obviously older or has a more senior position. Children will often be seen doing so. 
                            If you are invited to an Ethiopian’s home, bring pastries, fruit, or flowers to the host. It is customary to bow when introduced to someone who is obviously older or has a more senior position. Children will often be seen doing so.
                            A gifts or in most cases, any item, is given with two hands or the right hand only; never the left hand.Ethiopians are hospitable and like to entertain friends in their homes.An invitation to a private home should be considered an honor.A woman should offer to help the hostess with the preparation or clearing up after a meal is served. 
                            You will always be offered a cup of coffee. It is considered impolite to refuse.
                        </p>
                </li>
                <li id="facts" >
                    <h1 id="culture-header">Language</h1>
                        <p> Ethiopia has many indigenous languages, 84 according to the Ethnologue, 77 according to the 1994 census.Amharic is a Semitic language and the national language of Ethiopia. The majority of the 25 million or so speakers of Amharic can be found in Ethiopia, but there are also speakers in a number of other countries, particularly Eritrea, Canada, the USA and Sweden.
                            The name Amharic comes from the district of Amhara in northern Ethiopia, which is thought to be the historic centre of the language.
                            Amharic is written with a version of the Ge'ez script known as ፊደል (Fidel). There are a number of ways to transliterate Amharic into the Latin alphabet, including one developed by Ernst Hammerschmidt, the EAE Transliteration system, developed by Encyclopedia Ethiopia, and the BGN/PCGN* system, which was designed for use in romanizing names written in Amharic characters and adopted by the UN in 1967.
                            English is the most widely spoken foreign language and is the medium of instruction in secondary schools and universities. Amharic was the language of primary school instruction, but has been replaced in many areas by local languages such as Oromigna and Tigrinya.
                        </p>
                </li>
            </ul>
        </div>
    )
}






export default Culture;