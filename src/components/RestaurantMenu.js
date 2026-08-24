import {useEffect} from "react";
const RestaurantMenu= ()=>{
    useEffect(()=>{
        fetchMenu();
    },[])

   const fetchMenu= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.49270&lng=77.53580&restaurantId=301417&catalog_qa=undefined&submitAction=ENTER"
    );
    const json=await data.json();
    console.log(json)
   };
   
    return(
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Rolls</li>
                <li>Diet coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;