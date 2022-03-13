import { inputPropType } from "./types";
import "./index.scss";

function Input({
  icon,
  placeholder,
  rooteClassName,
  inputclassName,
  onChange,
}: inputPropType) {
  return (
    <div className={`${rooteClassName ? rooteClassName : ""} search-container`}>
      <input
        className={inputclassName ? inputclassName : ""}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon ? <img src={icon} alt="logo" /> : <></>}
    </div>
  );
}

export default Input;
