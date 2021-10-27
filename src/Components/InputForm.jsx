import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const InputForm = ({
  setShop,
  shop,
  setStop,
  stop,
  setDirectionsInfo,
  setDistances,
  setGoogleMapsRouteInfo
}) => {
  return (
    <div className="inputFormContainer">
      <div className="StartPointInput">
        <Input
          placeholder="Enter Shop"
          onChange={(e) => setShop(e.target.value)}
        />
        {/* <Button>Submit</Button> */}
      </div>
      <div className="stopInput">
        <Input placeholder="Enter a Stop" onChange={(e) => setStop(e.target.value)}/>
      </div>
      <div className="formSubmitButtonContainer">
        <Button onClick={(shop, stop) => setGoogleMapsRouteInfo(shop, stop)}>Submit</Button>
      </div>
    </div>
  );
};

export default InputForm;
