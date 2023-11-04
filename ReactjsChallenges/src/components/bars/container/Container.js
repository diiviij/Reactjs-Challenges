import React from "react";
const Container = () => {
  return (
    <div>
      <div class="row">
        <div class="wrapper">
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
        </div>

        <div class="col-md-6">
          <h1 class="text-contrast display-4 display-md-3">
            <span class="bold">React Challenges</span>
          </h1>

          <p class="lead bold">Learn React by Building Real-World Projects !</p>
          <p class="lead">
            A series of 50 React.js projects, from beginner to advanced level.
          </p>
          <nav class="my-5 nav">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7121172960194813952/"
              target="new"
              class="btn btn-rounded btn-alternate mr-2 mr-md-5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/diiviij/Reactjs-Challenges"
              target="_blank"
              class="btn btn-rounded btn-contrast scrollto"
            >
              GitHub Repo
            </a>
          </nav>
        </div>
        <div class="col-md-6">
          <div class="iphone front mx-auto">
            <div class="screen shadow-box">
              <img src={require("../../Assets/img/phone.png")} alt="..." />
            </div>
            <div class="notch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
