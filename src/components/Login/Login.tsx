import React, { useState } from "react";
import { Button } from "../common/Button/Button";

const Login: React.FC = () => {
  return (
    <>
      <Button
        onClick={() => {
          console.log("login");
        }}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
