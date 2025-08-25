const ItemList = ({ items, dummy }) => {
  console.log("items", items);
  console.log("dummy data :", dummy);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-b-2 flex justify-between"
        >
          <div className="6/12">
            <p className="py-2 text-left ">{item.card.info.name}</p>
            <p className="text-left">₹ {item.card.info.price / 100}</p>
            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-6/12 flex justify-end align-middle my-6 mx-2">
            <img
              className="w-32 h-24 object-cover rounded-md align-middle"
              alt="res-logo"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item.card.info.imageId}`}
            />
            <button className="p-2 bg-black text-white shadow-lg absolute mx-6 rounded-lg  font-semibold">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
