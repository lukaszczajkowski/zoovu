import React from 'react';
import {useRecoilState} from 'recoil';


export default function GamePage() {

    const[name] = useRecoilState();
    console.log(name);
    return (
        <h1>Game page</h1>
    );
}