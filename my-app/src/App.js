import './App.css';
import {Component, StrictMode} from "react";


function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>
            <Field/>
            <Btn/>
        </div>
    );
}

export default App;
