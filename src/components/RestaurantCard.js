const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-[250px] bg-white transform transition-transform duration-300 hover:scale-95">
      <img
        className="w-full h-48 rounded-2xl"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${resData.info.cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
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
