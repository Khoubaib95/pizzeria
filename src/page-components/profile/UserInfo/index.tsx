import { useState, useMemo, useEffect } from "react";
import { userInfoPropTypes } from "./type";
import Gradient from "../../../shared/UIKIT/Gradient";
import "./index.scss";

function UserInfo() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [info, setInfo] = useState<userInfoPropTypes>({
    name: { value: "khoubaib", updated: false },
    email: { value: "khoubaibab01@gmail.com", updated: false },
    phone: { value: "99540894", updated: false },
    city: { value: "Bouficha", updated: false },
  });
  const initialInfo: userInfoPropTypes = useMemo(() => info, []);

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [e.target.name]: {
        value: e.target.value,
        updated:
          //@ts-ignore
          info[e.target.name] === initialInfo[e.target.name] ? true : false,
      },
    });
  };

  useEffect(() => {
    const i = Object.keys(info).filter(
      //@ts-ignore
      (key: string) => info[key].value !== initialInfo[key].value
    ).length;
    if (i > 0) setDisabled(true);
    else setDisabled(false);
  }, [info]);

  return (
    <Gradient
      className="profile-info"
      element="form"
      //@ts-ignore
      onSubmit={(e) => {
        e.preventDefault();
        console.log(info.name);
      }}
    >
      <label>
        Name
        <input
          className={info.name.updated ? "updated" : ""}
          type="text"
          value={info.name.value}
          name="name"
          onChange={(e) => {
            handleInfo(e);
          }}
        />
      </label>
      <label>
        Phone Number
        <input
          className={info.phone.updated ? "updated" : ""}
          type="text"
          name="phone"
          value={info.phone.value}
          onChange={(e) => {
            handleInfo(e);
          }}
        />
      </label>
      <label>
        Email
        <input
          className={info.email.updated ? "updated" : ""}
          type="email"
          name="email"
          value={info.email.value}
          onChange={(e) => {
            handleInfo(e);
          }}
        />
      </label>
      <label>
        City
        <input
          className={info.city.updated ? "updated" : ""}
          type="text"
          name="city"
          value={info.city.value}
          onChange={(e) => {
            handleInfo(e);
          }}
        />
      </label>
      <div className="form-footer">
        <button
          className={disabled ? "active" : "disabled"}
          disabled={!disabled}
          onClick={(e) => {
            setInfo({ ...initialInfo });
            setDisabled(true);
          }}
        >
          Cancel
        </button>
        <button
          className={disabled ? "active" : "disabled"}
          disabled={!disabled}
          type="submit"
        >
          Update
        </button>
      </div>
    </Gradient>
  );
}
export default UserInfo;
