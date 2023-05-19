import React from "react";

function Services() {
  return (
    <div id="services">
      <h2 className="head">Services</h2>
      <h3>What we can Provide you</h3>
      <div className="services-cards-list">
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=1060&t=st=1684422731~exp=1684423331~hmac=be3df12df99f69a9c5d7ac1b1c4382273d14a4190749a16063cefa597f1b8f1d"
            class="card-img-top"
            alt="Web Development"
          />
          <div class="card-body">
            <h5 class="card-title service-title">Web Development</h5>
          </div>
        </div>
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=1380&t=st=1684422319~exp=1684422919~hmac=1fb6411dead86da9a44e111774a24df7316b94172871bedfc0e9607381f3c663"
            class="card-img-top"
            alt="Web Desiging"
          />
          <div class="card-body">
            <h5 class="card-title service-title">Web Desiging</h5>
          </div>
        </div>
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-851.jpg?w=740&t=st=1684423912~exp=1684424512~hmac=06647333108ac36aee4c088185db43a7700e837835b64a1db59d65c622b53896"
            class="card-img-top"
            alt="Content Writing"
          />
          <div class="card-body">
            <h5 class="card-title service-title">Content Writing</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
