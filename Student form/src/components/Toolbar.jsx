// Passing props


export default function Toolbar() {
    return (
        <>
            <Greek message="uploading">
                upload
            </Greek>
            <Greek message="downloading">
                download
            </Greek>
        </>
    )
}

function Greek({ message, children }) {
    return (
        <button onClick={()=> alert(message)}>
            {children}
        </button>
    )
}