import React from "react";

const Head = () => {
  return (
    <div class="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
      <div class="container">
        <button class="navbar-toggler" type="button">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="mr-lg-5 navbar-brand" href="/themes/laapp-react/">
          <img
            src="https://5studios.net//themes/laapp-react/static/media/logo.ad20194d.png"
            alt="Laapp"
            class="logo logo-sticky d-block d-md-none"
          />
          <img src="" alt="Laapp" class="logo d-none d-md-block" />
        </a>
        <div class="collapse navbar-collapse">
          <div class="sidebar-brand">
            <a href="/themes/laapp-react/">
              <img
                src="/themes/laapp-react/static/media/logo.ad20194d.png"
                alt="Laapp Template"
                class="logo"
              />
            </a>
          </div>
          <ul class="nav navbar-nav ml-auto navbar-nav">
            <li class="nav-item">
              <a href="#!" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#!" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Head;
