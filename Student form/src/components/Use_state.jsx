import '../App.css';
import {useState} from 'react';
import {sculptureList} from './data'
export default function Use_state() {
    const [ind,setInd]=useState(0);
    const [show,setShow]=useState(false);
    function handleClick() {
        setInd((ind+1)%12);
    }
    function sh(){
        setShow(!show);
    }
    let s=sculptureList[ind];
    return(
        <div>
            <div className='a'>
            <p>{ind}/11</p>
            <button onClick={()=>handleClick()}>Next</button><br /><br />
            </div>
            <img 
                src={s.url}
                alt={s.alt}
                height={200}
                width={200}
            />
            <br />
            <button onClick={()=>sh()}>{show?"hide":"show"}</button><br />
            <div className='a'>
            {show? s.description:""}
            </div>
        </div>
    );
}