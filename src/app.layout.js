import React from "react";
import auth from "./Auth";
import Data from './App copy'
import {Button} from 'react-bootstrap'

const AppLayout = props => {
  return (
    <div>
      {/* <h1>App Layout</h1> */}
      
      {/* <Button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </Button> */}
      <Data/>
    </div>
  );
};
export default AppLayout;