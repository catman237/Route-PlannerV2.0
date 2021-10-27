import React from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const InputForm = () => {
  return (
    <div className='inputFormContainer'>
      <div className='originInput'>
        <Input defaultValue="Enter Origin" />
        <Button>Submit</Button>
      </div>
      <div className='stopInput'>
        <Input defaultValue="Enter a Stop" />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default InputForm;
