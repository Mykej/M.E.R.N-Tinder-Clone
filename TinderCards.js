import React, { useState }from 'react';
import TinderCard from 'react-tinder-card';
import './css/TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            "name": "Alicia Keys",
            "imgUrl": "https://vividpost.files.wordpress.com/2012/04/alicia-keys-attitude.jpg",
        },
        {
            "name": "Louis Armstrong",
            "imgUrl": "http://static1.squarespace.com/static/56858337cbced60d3b293aef/58655aea893fc03fc334a02f/5983c93ce58c62ee93051096/1596510738175/LouisArmstrong_TheDefinitiveCollection_crop_16x9.jpg?format=1500w",
        },
        {
            "name": "Ed Sheeran",
            "imgUrl": "https://www.roadiemusic.com/blog/wp-content/uploads/2018/01/Ed-Sheeran2.jpg",
        },
        {
            "name": "Dolly Parton",
            "imgUrl": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcxNTc1ODQ3MTkzNDIxMTYw/gettyimages-831437824.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        
    };

    const outOfFrame = (name) => {
        console.log(name + " Left the screen!");
    };

    return (
        <div className = "tinderCards">
            <div className = "tinderCards_cardContainer">
                {people.map((person) => (
                <TinderCard
                    className = "swipe" 
                    key = {person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe = {(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                    >

                        <div
                            style = {{ backgroundImage : `url(${person.url}}` }}
                            className = "card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
