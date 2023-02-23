import React from "react";
import MiniNav from "../common/MiniNav/MiniNav";
import "./main.css";
const Main = () => {
  const sections: [{},{},{},{}] = [{ name: "Personal", link: "https://a" }, { name: "Skills", link: "https://a" }, { name: "Experience", link: "https://a" }, { name: "Github", link: "https://a" }];

  return (
    <>
<main>
  
        <header className="row ">
          <MiniNav sec = {sections} />
        </header>
  
        <div className="row container-fluid ">
          <article id="personal-data">
            <div className="photo-div ">
              <img
                className="photo"
                src="/src/assets/fotoPerfil.jpeg"
                alt="photo"
              />
            </div>
            <div className="data-div ">
              <div className="main-data-div">
                <div className="name">
                  <h1>Gabriel Maglia</h1>
                  <p>Full-Stack developer</p>
                </div>
                <div className="contact">
                  <p>gab.maglia@gmail.com</p>
                  <p>+54 9 341 720 7863</p>
                </div>
              </div>
  
              <div className="about">
                <p>
                  Self-motivated developer, who is willing to learn and create
                  outstanding UI applications. Donec aliquam est dui, vel
                  vestibulum diam sollicitudin id. Quisque feugiat malesuada
                  molestie.{" "}
                </p>
              </div>
            </div>
          </article>
        </div>
  
</main>
    </>
  );
};

export default Main;
