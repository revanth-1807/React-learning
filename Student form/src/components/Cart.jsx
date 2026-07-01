
   // The Bugged code where we fault of batching concept\


// import {useState} from 'react';

// export default function Cart() {
//     const [count, setCount] = useState(0);
//     const [soldcount,setSoldcount]=useState(0);
//     async function handleClick() {
//         setCount(count+1);
//         await new Promise(resolve=>
//             setTimeout(resolve,3000)
//         );
//         setCount(count-1);
//         setSoldcount(soldcount+1);
//     }
//     return(
//         <>
//             {soldcount} <br />
//             {count} <br />
//             <button onClick={handleClick}>Click</button>
//         </>
//     )
// }




  /// The resolved code where we known how the batching is gonna works in real life scenario\


import {useState} from 'react';

export default function Cart() {
    const [count, setCount] = useState(0);
    const [soldcount,setSoldcount]=useState(0);
    async function handleClick() {
        setCount(count=> count+1);
        await new Promise(resolve=>
            setTimeout(resolve,3000)
        );
        setCount(count=> count-1);
        setSoldcount(soldcount=> soldcount+1);
    }
    return(
        <>
            {soldcount} <br />
            {count} <br />
            <button onClick={handleClick}>Click</button>
        </>
    )
}