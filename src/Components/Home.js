import React, { useEffect } from "react";
import "../Style/Home.css";

import SvgImage from "../Assets/amico.png";
function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="outer ">
        <section className="wrapper">
          <div className="container">
            <div className="grid-cols-2">
            <div className="grid-item-2">
            <div className="team_img_wrapper" style={{ marginLeft: '10px' }}>
              <img src={SvgImage} alt="team-img" style={{ marginLeft: '-50px' }} />
            </div>
            </div>
              <div className="grid-item-1">
                <h1 className="main-heading" style={{ marginLeft: '100px' }}>
                  Passion , Dedication <span>Excellence</span>
                  <br />
                  Push Limits Break <span>Records</span>
                </h1>
               
              </div>
              

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
