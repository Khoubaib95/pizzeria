import "./index.scss";
function Grid({ children, className }: any) {
  return <div className={`grid ${className}`}>{children}</div>;
}
export default Grid;
