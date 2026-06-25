// Propagation understanding


function Propagation() {
    return(
        <div onClick={()=>alert('Parent hai')} >
            <button onClick={()=>alert('Child hai')}>Click me</button>
        </div>
    );
}

export default Propagation;