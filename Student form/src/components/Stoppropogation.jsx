// Stop propagation and dont reach back to parent


export default function Stoppropogation() {
    return(
        <div onClick={()=>alert('Parent bhaai')}>
             <Button onClick={()=>alert('Child bhaai')}>
                click me
             </Button>
        </div>
    )
}

function Button({onClick,children}) {
    return(
        <button onClick={(e)=>{
            e.stopPropagation();
            onClick();
        }}>
        {children}
        </button>
    )
}