import React from "react";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import About from "./about";
import MovieReviews from "./movie-reviews";
import Home from "./home";
import SignUp from "./signup"

function Header() {
    return (
      <BrowserRouter>
        <div className="Mask">
          <div className="Articles-Listings-with-side-bar">
            <div className="Rectangle">
              <div className="Bitmap">
                <div className="Top-Menu">
                  <Link to="/" className="Home">Home</Link>
                  <Link to="/about" className="About">About</Link>
                  <Link to="/movie-reviews" className="MovieReviews">Movie Reviews</Link>
                  <Link to="/signup" className="SignUp">Sign Up/SignIn</Link>
                </div>
              </div>
            </div>
          </div>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/movie-reviews" element={<MovieReviews />} />
             <Route path="/signup" element={<SignUp />} />
         </Routes>
        </div>
      </BrowserRouter>
    );
  }
  
  export default Header;
  