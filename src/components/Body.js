import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {

  // REACT (Local State Variables- super powerful variables) -> maintains the state of your component
  const[listofrestaurants,setListofrestautants ]=useState(resList);

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

  

  return (
    <div className= "body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredlist=listofrestaurants.filter(res => res.data.avgRating>4)
          setListofrestautants(filteredlist)
        }}
          >Top rated restaurants</button>
      </div>
      <div className="res-container">
        {listofrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;