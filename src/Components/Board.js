import React from "react";
import "../Style/Board.css";
import linkedin from "../Assets/icons8-linkedin-64.png";
import Instagram from "../Assets/icons8-instagram-48.png";
import { Link } from "react-router-dom";
import Github from "../Assets/icons8-github-50.png";

const img_url= "https://console.cloudinary.com/pm/c-be77a7ae9b919c90fa25cbc1b732bf/media-explorer"
function Board({ mentor }) {
    

    return (
        <div className="card mt-5">
            <div className="imge flex flex-col justify-center items-center md:w-12/12">
                <p className="text-white font-bold">{mentor.name}</p>
                <p className="text-white semibold">{mentor.position}</p>
            </div>
            <div className="Description flex justify-center items-center ml-2">
                <img src={mentor.img_url} className="imgstyle object-contain"/>
            </div>
            <div className="social flex mt-4 items-center justify-center gap-4">
                <Link to={mentor.linkedin_link}>
                     <img src={linkedin} className="h-[50px] w-[50px]" alt="LinkedIn" />
                </Link>
                
            </div>
        </div>
    );
}

export default Board;
