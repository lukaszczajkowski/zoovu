import React from 'react';
import getImage from '../../js/exportingImages'

export default function Card({data}) {

    const letter = getImage(data);

    return (
        <div className = "card">
            <img src = {letter} alt = "letter"></img>
        </div>
    );
}