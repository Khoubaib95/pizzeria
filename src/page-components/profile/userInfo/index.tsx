import { useState } from "react";
import Gradient from "../../../shared/UIKIT/Gradient";
import "./index.scss";

function UserInfo() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  return (
    <Gradient
      className="profile-info"
      element="form"
      //@ts-ignore
      onSubmit={(e) => {
        e.preventDefault();
        return console.log(name);
      }}
    >
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Phone Number
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        City
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <div className="form-footer">
      <button className="cancel" type="submit">
        Cancel
      </button>
      <button className="submit" type="submit">
        Update
      </button>
      </div>
    </Gradient>
  );
}
export default UserInfo;
