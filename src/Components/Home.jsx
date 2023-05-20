import React from "react";

function Home() {
  return (
    <div className="Home-img" id="home">
      <div className="home-main">
        <img
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="d-block w-100"
          alt="..."
        />
        <span className="home-img-hover"></span>
      </div>
      <div class="row home-content__main home-img-text">
        <h3>
          {" "}
          We are a creative group of people who design influential brands and
          digital experiences.
        </h3>
        <div class="home-content__buttons">
          <a href="#contact" class="smoothscroll btn btn--stroke">
            Start a Project
          </a>
          <a href="#about" class="smoothscroll btn btn--stroke">
            More About Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
