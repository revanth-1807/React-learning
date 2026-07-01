// function Recipe({ drinkers }) {
//   return (
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// }
// import Avenger from './components/Avenger';

// function App() {
//   return (
//     <Avenger />
    
//   );
// }

// export default App;


// function HandleClick() {
//   alert('you clicked brohh');
// }
// function App() {
//   return (
//     <>
//     <button onClick={alert('You clicked me!')}></button>
//     <button onClick={()=>alert('clicked me')}>Click me</button>
//     <button onClick={HandleClick()}>Click me</button>
//     <button onClick={HandleClick}>Click me</button>
//     </>
//   );
// }

// export default App;


// import Toolbar from './components/Toolbar';

// export default function App() {
//   return (<Toolbar /> );
// }


// import Toolbar1 from './components/Toolbar1';

// export default function App() {
//   return (<Toolbar1 /> );
// }


// import Toolbar3 from './components/Toolbar3';

// export default function App() {
//   return (<Toolbar3 /> );
// }

// import Propagation from './components/Propagation';
// export default function App() {
//   return (
//     <Propagation />
//   )
// }


// import Stoppropogation from './components/Stoppropogation';
// export default function App() {
//   return (
//     <Stoppropogation />
//   )
// }


// import D from './components/Default';
// export default function App() {
//     return <D />
// }

// import './App.css'
// import Use_state from './components/Use_state';
// export default function App() {
//     return(
//         <div className='container'>
//             <Use_state />
//             <Use_state />
//         </div>
//     )
// }



// import Reactrender from './components/Reactrender';
// export default function App() {
//     return(
//         <Reactrender />
//     );
// }


// import ReactBatching from './components/ReactBatching';
// export default function App() {
//     return(
//         <ReactBatching />
//     );
// }


import Cart from './components/Cart';
export default function App() {
    return(
        <Cart />
    );
}