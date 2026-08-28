import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

  // REACT (Local State Variables- super powerful variables) -> maintains the state of your component
  const[listofrestaurants,setListofrestautants ]=useState([]);
  const[filteredrestaurants,setFilteredrestaurants]=useState([]);

  const[searchtext,setsearchtext]=useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData= async()=>{ 
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.49270&lng=77.53580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ) 

    const json=await data.json()
    //optional chaining
    setListofrestautants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
            const filteredList = listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
            setFilteredrestaurants(filteredList)
          }}>Search</button>
        </div>


        <button className="filter-btn" onClick={()=>{
          const filteredlist=listofrestaurants.filter(res => res.info.avgRating>4)
          setListofrestautants(filteredlist)
        }}
          >Top rated restaurants</button>
      </div>

      
      <div className="res-container">
        {filteredrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;