import React from "react";
import Contacts from "./contacts/Contacts";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Contacts</h1>
      <div className="grid-2">
        <div>{/* form */}</div>
        <div>
          <Contacts />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
