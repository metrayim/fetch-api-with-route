import React from "react";
import auth from "./Auth";
import {Button} from 'react-bootstrap';
import './App.css'
const LandingPage = props => {
 
  return (
    <div  className="login mt-5">
      <h1 className="mt-5">Landing Page</h1>
      <Button style={style}
        onClick={() => {
          auth.login(() => {
            props.history.push("/article");
          });
        }}
      >
        Login
      </Button>
    </div>
  );
};
export default LandingPage;
const style={
  border:" 2px solid #cccc",
borderRadius: "30px",
width:"100px"
}