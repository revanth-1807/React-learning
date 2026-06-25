// Using Diff Naming conventions on event handlers


export default function Toolbar() {
    return(
        <>
            <Play name="criminal" />
            <Upload />
        </>
    )
}

function Play({name}) {
    return (
        <Smash onClick={()=>alert('playing '+name)}>
            play '{name}'
        </Smash>
    )
}

function Upload() {
    return (
        <Smash onClick={()=>alert('uploading')}>
            upload
        </Smash>
    )
}

function Smash({onClick,children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}