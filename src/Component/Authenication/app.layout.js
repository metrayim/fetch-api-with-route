import React from "react";
import Data from '../CompoentData/App copy'


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