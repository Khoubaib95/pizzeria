import "./index.scss";

function RestaurentHeader() {
  return (
    <div className="restaurent-header">
      <div
        className="primary-img"
        style={{
          background: `url(${"/images/restaurant-mindels-burger-and-fries-main.png"}), #C4C4C4`,
        }}
      />
      <div className="secondary">
        <div
          style={{
            background: `url(${"/images/restaurant-mindels-burger-and-fries-1.png"}), #C4C4C4`,
          }}
        />
        <div
          style={{
            background: `url(${"/images/restaurant-mindels-burger-and-fries-2.png"}), #C4C4C4`,
          }}
        />
        <div
          style={{
            background: `url(${"/images/restaurant-mindels-burger-and-fries-3.png"}), #C4C4C4`,
          }}
        />
        <div
          style={{
            background: `url(${"/images/restaurant-mindels-burger-and-fries-4.png"}), #C4C4C4`,
          }}
        >
          15 +
        </div>
      </div>
    </div>
  );
}

export default RestaurentHeader;
