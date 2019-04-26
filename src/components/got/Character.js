import React from 'react';

function Character(props) {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h2>Culture: {props.data.culture}</h2>
            <h5>Aliases:</h5>
            <ul>
                {props.data.aliases? props.data.aliases.map((alias,i) => <li key={i}>{alias}</li>) : "None"}
            </ul>
            <h5>Played By: {props.data.playedBy}</h5>
        </div>
    )
}

export default Character;