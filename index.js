//127.0.0.1:5500/index.html
//JSX - JavaScript and XML
// JSX -> Babel (Transpiler) -> JavaScript Object

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

function render(){
    div1.innerHTML = `
    <h1>${new Date().toLocaleTimeString()}</h1>
    `
}

setInterval(render, 1000);

/**
 * Two types of Components:
 * - Class-based Component
 * - Function-based Component
 */

function Button({obj:{name}}){
    return <button>{name}</button>
}
 
function App(){
    return <>
        <h1 className='main'>{new Date().toLocaleTimeString()}</h1> 
        <Button obj={{name:'Save'}}/>
        <Button obj={{name:'Cancel'}}/>
        <Button obj={{name:'Update'}}/>
        <Button obj={{name:'Edit'}}/>
    </>
}

const root = ReactDOM.createRoot(div2)

setInterval(function(){
    root.render(<App/>)
}, 1000);
