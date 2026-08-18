import React from "react";
import ReactDOM from "react-dom/client"
/**
*Header 
*   -Logo
*  - Nav items
*Body   
*   -Search
*   - Restaurant container
*          -restaurant card
*               -Name of the restaurant , res star rating ,cuisine ,delivery time
*               -Img
*Footer
*   -Copyright
*   -links
*   -address
*   -contact
*/
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhvKgEYiRwE4j6XjXVJSg5aZjJ7dEkDCFQ1K3ryCjBHNfY7OHEvSEv6c&s=10" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
                </div>
        </div>
    )
}
const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard />
        </div>
        </div>
    )
}


const AppLayout=()=>{
    return (
        <div className="app">
           
            <Header />
            <Body />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)