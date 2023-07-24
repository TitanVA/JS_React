import './App.css';
import {Component} from "react";

const Header = () => {
    return <h2>Hello World!</h2>
};

// const Field = () => {
//     const text = "Enter here"
//     const styledField = {
//         width: "300px"
//     }
//     return <input
//         placeholder={text}
//         type="text"
//         style={styledField}/>
// };

class Field extends Component {
    render() {
        const text = "Enter here"
        const styledField = {
            width: "300px"
        }
        return <input
            placeholder={text}
            type="text"
            style={styledField}/>
    }
}

function Btn() {
    const text = "Log In"
    const logged = true
    const res = () => {
        return "Log Out"
    }
    return (
        <div>
            <button>{logged ? "Joined" : text}</button>
            <button>{res()}</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
    );
}

export {Header};
export default App;
