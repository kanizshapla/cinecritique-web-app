import React from "react";
import PageContent from "./page-content";

function Home(){
    return(
        <div>
        <div className="Cine-Critique">
        <h1 className="homeheading">Cine-Critique</h1>
        <div className="home-content-box">
        <p className="home-contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec ex magna, malesuada vitae congue a, gravida non lectus.
         Sed mollis purus quis dolor dapibus, sit amet pharetra erat ultricies.
         Nam feugiat rhoncus diam, id consectetur nulla volutpat nec.</p>
         
        </div>
        
    </div>
    <PageContent/>
    </div>
    );
}

export default Home;