const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        style={{ width: "100%", height: "150px" }}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${resData.info.cloudinaryImageId}`}
      />
      <h3>{resData.info.name}</h3>
      <h5>
        {Array.isArray(resData.info.cuisines)
          ? resData.info.cuisines.join(", ")
          : resData.info.cuisines}
      </h5>
      <div className="causian">
        <ul className="causian">
          <li className="rating" style={{ height: "15px", width: "35px" }}>
            {resData.info.avgRating}
          </li>
          <li>{resData.info.costForTwo}</li>

          <li>{resData.info.sla.slaString} </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
