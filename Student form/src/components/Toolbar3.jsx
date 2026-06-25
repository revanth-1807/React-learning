// Extra Work to play with events


export default function Toolbar3() {
    return(
        <New
            Up={()=>alert('uploading')}
            Do={()=>alert('downloading')}
        />
    )
}
function New({Up,Do}) {
    return(
        <>
            <Revanth onClick={Up}>
                Upload
            </Revanth>
            <Revanth onClick={Do}>
                Download
            </Revanth>
        </>
    );
}
function Revanth({onClick,children}) {
    return (<button onClick={onClick}>{children}</button>);
}