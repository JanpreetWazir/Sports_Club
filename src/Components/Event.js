// Import the required modules at the top of your file
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import events from "../Data/EventData";
import "../Style/Event.css";  // Add the path to your CSS file

const Event = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="event_section">
      <div className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 text-black">
        Upcoming Events
      </div>

      <div className="flex flex-wrap justify-center mt-2 event_section_events">
        {events.map((event, i) => (
          <div
            key={i}
            className="w-[100%] md:w-[45%] lg:w-[30%] xl:w-[25%] p-3 mt-4 bg-gradient-to-b from-0E2032 to-ADEFD1 flex flex-col items-center rounded-[10px] poster bg-[#0e3132fc] mx-[15px]"
          >
            <div className="mt-2">
              <img
                src={event.poster_url}
                alt="Events don't have a poster"
                className="w-[40em] h-[1005] rounded-[10px] poster_img"
              />
            </div>

            <div className="font-bold text-2xl gtext my-2 text-center">
              <span style={{ color: event.textColor }}>
                {event.event_name}
              </span>
            </div>
            <div>
              <p className="text-gray-100 text-sm mb-4 description">
                {event.description.substring(0, 240) + " "}
              </p>
            </div>
            <div className="knowMore">
             
            </div>
          </div>
        ))}
      </div>

      {/* Register for Event Button */}
      <div className="text-center mt-4">
        <Link to="/form" className="btn-register-for-event">
          Register For Event
        </Link>
      </div>
    </div>
  );
});

export default Event;
