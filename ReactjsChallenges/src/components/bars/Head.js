import React from "react";

const Head = () => {
  return (
    <nav class="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
      <div class="container">
        <button class="navbar-toggler" type="button">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="collapse navbar-collapse">
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
    </nav>
  );
};

export default Head;
