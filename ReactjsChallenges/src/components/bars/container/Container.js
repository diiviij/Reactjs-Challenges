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
              Buy now
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="long-arrow-alt-right"
                class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                ></path>
              </svg>
            </a>
            <a href="#demos" class="btn btn-rounded btn-contrast scrollto">
              Explore demos
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
