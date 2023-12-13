import React, { forwardRef } from "react";
import SvgImage from "../Assets/sports.jpg";
import "../Style/Aboutus.css";

const AboutComponent = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-3 py-md-5 py-xl-8 try">
      <div className="container">
        <div className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 text-black">
          About Us
        </div>

        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-12 col-md-6">
            {/* 50% width for the image */}
            <img
              className="img-fluid rounded sizeimg"
              loading="lazy"
              src={SvgImage}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", }}
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-6">
            {/* Adjust the width and add padding for the text */}
            <div className="row justify-content-center">
              <div className="col-30 col-xl-50 px-0">
                <p
                  className="lead mb-1 aboutfont text-center"
                  style={{ lineHeight: "1.4" }}
                >
                  Welcome to the Walchand College of Engineering Sangli Sports
                  Club – the dynamic heartbeat of our campus's sporting spirit!
                  Our club hosts a variety of exhilarating events throughout the
                  academic year, including the highly anticipated DCup in Oct-Nov,
                  the fiercely competitive Departmental Cup in February, and the
                  thrilling Walchand Super Leagues in March-April. Committed to nurturing
                  a vibrant sports culture, our club actively encourages student
                  participation in Zonals and organizes annual sports events.
                  Join us on the field, and let's champion the spirit of
                  sportsmanship together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutComponent;
