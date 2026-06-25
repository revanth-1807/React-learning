function D() {
    return(
        <form onSubmit={(e)=>{e.preventDefault();alert('submitted');}}>
            <input type='text '/>
            <button type='submit'>submit</button>
        </form>
    )
}

export default D;