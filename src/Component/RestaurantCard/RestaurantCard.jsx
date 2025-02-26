import "./RestaurantCard.css"; 

function RestaurantCard(props) {
    console.log(props);
    return (
        <div className="restCard-container">
            <h4 className="restCard-name">{props.restaurant.name}</h4>
            <p className="restCard-rating">⭐ {props.restaurant.rating}</p>
            <p className="restCard-address">{props.restaurant.address}</p>
            <div className="restCardSub-container">
                <p style={{marginLeft:"20px"}}>{props.restaurant.type_of_food}</p>
                <a href="#" style={{marginLeft:"20px",color:"blue"}}>Visit-menu</a>
            </div>
        </div>
    );
}

export default RestaurantCard;
