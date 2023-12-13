import React from "react";
import "../Style/Footer.css";
import SvgImage0 from "../Assets/YouTube.png";
import SvgImage1 from "../Assets/LinkedIn.png";
import SvgImage2 from "../Assets/Instagram.png";

function Footer({
  scrollToHome,
  scrollToAboutUs,
  scrollToGallery,
  scrollToMentors,
  scrollToTeam,
}) {
  const youtubeUrl = "";
  const linkedinUrl =
    "";
  const instagramUrl =
    "";
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3>Sports Club</h3>
          <p>
          Achieve greatness on the field with our  Sports Club at Walchand College, where teamwork and dedication unite."
          </p>
          <div className="btn_wrapper1 iconssoc">
            <button
              className="btn view_more_btn1"
              onClick={() => openSocialMediaLink(youtubeUrl)}
            >
              <img
                src={SvgImage0}
                alt="YouTube"
                style={{ width: "200%", height: "auto" }}
              />
            </button>
            <button
              className="btn view_more_btn1"
              onClick={() => openSocialMediaLink(linkedinUrl)}
            >
              <img
                src={SvgImage1}
                alt="LinkedIn"
                style={{ width: "200%", height: "auto" }}
              />
            </button>
            
          </div>
        </div>

       

        <div className="column links">
          <h3>Professional Correspondence</h3>
          <ul>
            <li>
              <a href="">
                Email : sportsclub@walchandsangli.ac.in
              </a>
            </li>
            
            <li>
              <a href="">
              Phone no. : 91 788 749 4325
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
