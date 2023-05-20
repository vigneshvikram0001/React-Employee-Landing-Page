import React from "react";

function Services() {
  return (
    <div id="services">
      <h2 className="head">Services</h2>
      <div className="services-cards-list">
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1060&t=st=1684567280~exp=1684567880~hmac=29c8decda8f36b21733ca9b69feb9585eab3b537f3d018b495d709991e555552"
            class="card-img-top"
            alt="Web Development"
          />
          <div class="card-body">
            <h5 class="card-title service-title">Web Development</h5>
          </div>
        </div>
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?w=1060&t=st=1684567170~exp=1684567770~hmac=a5073864f9efd19a1ef46447435a3cc1e377b0409cd9be4e44044d27279a09b0"
            class="card-img-top"
            alt="Web Desiging"
          />
          <div class="card-body">
            <h5 class="card-title service-title">Web Desiging</h5>
          </div>
        </div>
        <div class="card service-card">
          <img
            src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?w=1060&t=st=1684567370~exp=1684567970~hmac=e8a36f0ce55bc8b32c6b2148dda851577dc9ef03ef43c5884157815368ec1528"
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
