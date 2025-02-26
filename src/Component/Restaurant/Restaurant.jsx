import React, { useState } from "react";
import data from "../../../data";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./Restaurant.css";

export default function Restaurant() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        setSearchTerm(e.target.value.toLowerCase());
    }

    const filteredRestaurants = data.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            {/* Search Bar */}
            <div>
                <input 
                    type="search" 
                    placeholder="Search restaurants..." 
                    style={{ width: "250px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc",marginLeft:"100px" }}
                    onChange={handleSearch} 
                />
            </div>

            {/* Restaurant Cards */}
            <div className="rest-container">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant, index) => (
                        <RestaurantCard 
                            key={restaurant._id?.$oid || index} 
                            restaurant={restaurant} 
                        />
                    ))
                ) : (
                    <p>No restaurants found</p>
                )}
            </div>
        </div>
    );
}
