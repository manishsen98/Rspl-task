import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <div className="admin-panel">
        <h1 className="rspl-heading">RSFP</h1>
       <div>
          <hr style={{ borderColor: "white", height: "2px" }} />
        </div>
        <div>
           <p className="admin-name"> Admin Name </p>
           <p className="super-admin"> Super Admin </p>
        </div>
        <div>
          <hr style={{ borderColor: "white", height: "2px" }} />
        </div>
        <div className="panel-links" >
          <p>DashBoard</p>
          <p>payment</p>
          <p>Purchase Order</p>
          <p>Shipment</p>
          <p>Enquire</p>
        </div>
      </div>

      {/* dashboard panel */}
      <div className="dashboard panel"></div>
    </div>
  );
};

export default Home;
