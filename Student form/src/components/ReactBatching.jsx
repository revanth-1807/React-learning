import {useState} from 'react';

export default function ReactBatching() {
    const [count, setCount] = useState(0);
    return(
        <>
            {count} <br />
            <button onClick={()=>{
                setCount(count+1);
                setCount(count+1);
                setCount(count+1);
                setCount(count=>count+1);
            }}>Click</button>
        </>
    )
}