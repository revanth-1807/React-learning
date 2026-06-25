import Util from './Util';

function Gr(props) {
    return(
        <div>
            <img src={Util(props.Person.imageId)}  alt={props.Person.name} />
            <h1>Hello {props.Person.name}!</h1>
            <h2>Age: {props.age}</h2>
        </div>
    );
}

export default function Greet() {
    return(
        <Gr Person={{name:"prasad", imageId:'YfeOqp2'}} age={25}/>
    );
}