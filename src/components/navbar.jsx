import React from "react";

const Navbar = () => {

  return (
    <div id="Left-Box" className="Box">
        {/* <h1>Navbar</h1> */}
      <nav>
        <ul> 
          <li>
            <a  className="button-59 gradient-custom-4" href="#section-1">Home</a>
          </li>
          <li>
            <a  className="button-59 gradient-custom-4" href="#section-2">About</a>
          </li>
          <li>
            <a  className="button-59 gradient-custom-4" href="#section-3">Upcoming Events</a>
          </li>
          <li>
            <a className="button-59 gradient-custom-4"  href="#section-4">Raise Funds</a>
          </li>
          <li>
            <a className="button-59 gradient-custom-4"  href="#section-5">Donations</a>
          </li>
          <li>
            <a className="button-59 gradient-custom-4"  href="#section-6">Complaints</a>
          </li>
          <li>
            <a  className="button-59 gradient-custom-4" href="#section-7">Contact</a>
          </li>
          <li>
            <a className="button-59 gradient-custom-4"  href="#section-8">Help</a>
          </li>
          <li>
            <a className="button-59 gradient-custom-4"  href="#section-9">Rate Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
