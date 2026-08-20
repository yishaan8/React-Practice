import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";


const Body = () => {

  const listofrestaurants=[];
  return (
    <div className= "body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{console.log("button clicked")}}>Top rated restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;