import React from "react";
import "../container/Container.css";

const Container = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-contrast display-4 display-md-3">
            <span class="bold">Laapp</span>
          </h1>
          <p class="lead bold">Premium Startup &amp; App Landing Page</p>
          <p class="lead">
            Besides its beautiful design. Laapp is an incredibly rich core
            framework for you to showcase your App.
          </p>
          <nav class="my-5 nav">
            <a href="#!" class="btn btn-rounded btn-alternate mr-2 mr-md-5">
              LinkedIn
            </a>
            <a href="#demos" class="btn btn-rounded btn-contrast scrollto">
              GitHub Repo
            </a>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="iphone front mx-auto">
            <div class="screen shadow-box">
              <img
                src="https://5studios.net/themes/laapp-react/static/media/9.21d4215d.png"
                alt="..."
              />
            </div>
            <div class="notch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
