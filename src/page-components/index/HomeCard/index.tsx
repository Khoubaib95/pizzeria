import { homeCardPropType } from "./type";
import Card from "../../../shared/UIKIT/Card";
import Clock from "../../../assets/icons/clock.svg";
import Star from "../../../assets/icons/star.svg";
import "./index.scss";

function HomeCard({
  img = "",
  title = "",
  link,
  stars = 0,
  pastPrice = 0,
  newPrice = 0,
  time = 0,
}: homeCardPropType) {
  return (
    <Card title={title} link={link} img={img}>
      <div className="price">
        <span className="past">{`$${pastPrice}`}</span>
        <span className="new">{`$${newPrice}`}</span>
      </div>
      <div className="footer">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <img src={Star} alt="star" key={s} />
          ))}
        </div>
        <div className="time">
          <img src={Clock} alt="clock" /> <span>{time} mins</span>
        </div>
      </div>
    </Card>
  );
}
export default HomeCard;
