import {useState} from 'react';
export default function Reactrender() {
    const [number,setNumber]=useState(0);
    return(
        <>
            <p>{number}</p>
            <button onClick={() => {
                setNumber(number + 1);
                console.log('revanth')
                setNumber(number + 1);
                console.log('hari');
                setNumber(number + 1);
            }}>+3</button>
        </>
    )
}