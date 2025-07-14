const ChooseMenu = (props) => {
  const { resData } = props;

  return (
    <div className="res-menu">
     
      <img
        className="res-menu-logo"
        alt="res-menu-logo"
        // style={{ width: "100%", height: "150px" }}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${resData.imageId}`}
      />
    </div>
    
  );
};

export default ChooseMenu;
