import React from "react";
import ReactDOM from "react-dom/client"

const jsxheading = <h1 id="heading">Namaste ishaan using React</h1>

const Heading=()=>{
    return <h1>Namaste React!!</h1>
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading />)