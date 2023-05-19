import React from "react";
import "./Style.css";
import img from "../assets/group16x9.jpg"
import img2 from "../assets/pair-programming10x8.jpg"

function About() {
  return (
    <div id="about">
      <h2 className="head">About Us</h2>
      <div class="card text-bg-dark">
        <img src={img} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title sub-head">Friendly Company</h5>
          <p class="card-text">
            Software is our craft and our passion. At{" "}
            <span className="link">Senchola</span>, we create beautiful software
            to solve business problems. We believe that software is the ultimate
            product of the mind and the hands.
          </p>
          <p class="card-text">
            Our engineers spend years mastering their craft, bringing together
            decades of engineering expertise to produce a real work of art. When
            you choose Senchola, you get more than just a single product or a
            tightly integrated suite. You get our commitment to continuous
            refinement and to{" "}
            <span className="link">improving your experience.</span> And you get
            our relentless devotion to your satisfaction.
          </p>
        </div>
      </div>
      <div class="card text-bg-dark">
        <div class="card-img-overlay">
          <p class="card-text">
            We’re gentle in our sales approach, so we don't push our people to
            push you. You won’t find us trying to endlessly upsell you, or
            buying your loyalty through multi-year contracts. And with growth
            that regularly outstrips our competitors, we know that this model
            works.
          </p>
          <p class="card-text">
            The decision to value customer privacy isn't one you make after
            watching which way the wind blows. It must stem from prior belief,
            perhaps even dogma. This is exactly why we made the decision more
            than two decades ago that we weren't going to sell ads inside our
            products, not even within the free editions. We're not interested in
            tracking your clicks to feed{" "}
            <span className="link">the marketing monster.</span> We will make
            our money the traditional way—bringing you valuable software that
            you are happy to pay us for. So why did we make this choice to put
            privacy first? Simple. We valued our privacy; we figured you would,
            too. And that's why we've prided ourselves on being ahead of the
            curve when it comes to government regulations about privacy; we
            don't need to be told what good business should look like.
          </p>
        </div>
        <img src={img2} class="card-img" alt="..." />
      </div>
    </div>
  );
}

export default About;
