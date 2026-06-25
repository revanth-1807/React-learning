// Passing Events haldlers as a props


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
        <Button onClick={()=>alert('playing '+name)}>
            play '{name}'
        </Button>
    )
}

function Upload() {
    return (
        <Button onClick={()=>alert('uploading')}>
            upload
        </Button>
    )
}

function Button({onClick,children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}