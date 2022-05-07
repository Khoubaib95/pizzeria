import Card from "../../../shared/UIKIT/Card";
import "./index.scss";
function HistoryProductCard({
  img,
  name,
  link,
  className,
  size,
  direction,
}: any) {
  return (
    <>
      <Card
        size="small"
        direction="horizontal"
        img="/images/the-original-chicken-burger.png"
        name="The Original Chicken Burger"
        slug="/the-original-chicken-burger"
        className="card-history"
        past_price={67.99}
        new_price={60.0}
        description={
          <>
            <span>#219867</span>
            <br />
            <span>18:00 | 24/12/20</span>
          </>
        }
      >
        <div className="card-body">
          <button>Reorder</button>
        </div>
      </Card>
    </>
  );
}
export default HistoryProductCard;
