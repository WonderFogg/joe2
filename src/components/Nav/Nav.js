import React from "react";
import "./Nav.css";


const Nav = () => (
        <div>
                <nav className="Nav-header">
        
                        <h1 className="Nav-title">Test Nav</h1>


                        <div className="row">
                                <div className="col-md-4">SISTORY</div>
                                <div className="col-md-4">ORLANDO</div>
                                <div className="col-md-4">
                                        <p><a href="https://www.wonderfogg.com./">EVENTS</a></p>

                                </div>
                        </div>

                        <div className="row">
                                <div className="col-md-4"id="sistorycov"></div>
                                <div className="col-md-4"id="blacklogo"></div>
                                <div className="col-md-4"id="photoal"></div>
                        </div>
                </nav>
  
        </div>
 	);







export default Nav;