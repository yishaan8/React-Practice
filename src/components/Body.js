import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

  // REACT (Local State Variables- super powerful variables) -> maintains the state of your component
  const[listofrestaurants,setListofrestautants ]=useState(resList);
  const[filteredrestaurants,setFilteredrestaurants]=useState(resList);
  
  const[searchtext,setsearchtext]=useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData= async()=>{ 
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )


    const json=await data.json()

    console.log(json)
  }
  // conditional rendering  

  return listofrestaurants.length=== 0 ? <Shimmer /> : (
    <div className= "body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" placeholder="Search for restaurants" value={searchtext} onChange={(e)=>{
            setsearchtext(e.target.value)
          }} />


          <button onClick={()=>{
            // fiter the restaurant cards and update the UI
            const filteredList = listofrestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchtext.toLowerCase()))
            setFilteredrestaurants(filteredList)
          }}>Search</button>
        </div>


        <button className="filter-btn" onClick={()=>{
          const filteredlist=listofrestaurants.filter(res => res.data.avgRating>4)
          setListofrestautants(filteredlist)
        }}
          >Top rated restaurants</button>
      </div>

      
      <div className="res-container">
        {filteredrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;