import React from 'react';
import {useRecoilState} from 'recoil';
import { nameState } from '../../js/name';

import Card from '../molecules/Card';

import letters from '../../resources/letters.json';

export default function GamePage() {

    const[name] = useRecoilState(nameState);

    const randomOrder = generateRandomOrder();

    const cards = renderCards(randomOrder);

    return (
        <div className = "gamepage">
            <div className = "header">
                <div className = "greeting">
                    <p>Good luck, {name}</p>
                    <p>Pick up the right cards</p>
                </div>
                <div className = "timer"> 
                    <p>Your score</p>
                    <p>The faster the better</p>
                </div>
            </div>
            <div className = "random-cards">
            {cards}
            </div>
        </div>
    );
}

function generateRandomOrder() {

    const letterArrayLength = 5;
    
    const randomOrder = [];

    let visitedNumbers = [];

    for (let i = 0; i < letterArrayLength; i++) {
        let randomItem = Math.floor(Math.random()*(letterArrayLength));
        if(visitedNumbers.includes(randomItem)){
            i--;
        } else {
            randomOrder[i] = randomItem;
            visitedNumbers.push(randomItem);
        }
    }

    return randomOrder;
}

function renderCards(randomOrder) {
    const cards = randomOrder.map(item => letters[item]).map(letter => {
       return <Card key = {letter.id} data = {letter.key}/>
    });
    return cards;
}