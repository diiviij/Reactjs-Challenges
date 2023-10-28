import React from "react";
const BubbleWrap = () => {
  return (
    <section class="section integration-bubbles">
      <div class="overflow-hidden container">
        <div class="row">
          <div class="col-md-6">
            <div class="bubbles-wrapper">
              <div class="animations m-0">
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src={require("../Assets/img/apx.svg")}
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Autoprefixer
                  </span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src={require("../Assets/img/bootstrap.svg")}
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">Bootstrap</span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="/themes/laapp-react/static/media/cordova.aa5aebb4.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">Cordova</span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="/themes/laapp-react/static/media/css.d3ad67fa.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">CSS</span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src={require("../Assets/img/font.svg")}
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Fontawesome
                  </span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="/themes/laapp-react/static/media/html.24845c5c.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">HTML</span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="/themes/laapp-react/static/media/js.87711407.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Javascript
                  </span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="/themes/laapp-react/static/media/npm.4ffaf293.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">Npm</span>
                </div>

                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="/themes/laapp-react/static/media/sass.470548b4.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">SASS</span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src="/themes/laapp-react/static/media/apx.8a905a8b.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Autoprefixer
                  </span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src="/themes/laapp-react/static/media/bs.71e42b5a.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">Bootstrap</span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src="/themes/laapp-react/static/media/cordova.aa5aebb4.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">Cordova</span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                  <img
                    src="/themes/laapp-react/static/media/css.d3ad67fa.svg"
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">CSS</span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                  <img
                    src={require("../Assets/img/font.svg")}
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Fontawesome
                  </span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                  <img
                    src={require("../Assets/img/html.svg")}
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">HTML</span>
                </div>
                <div class="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                  <img
                    src={require("../Assets/img/js.svg")}
                    alt=""
                    class="img-responsive"
                  />
                  <span class="badge badge-contrast shadow-box">
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="section-heading">
              <p class="text-alternate text-uppercase bold">Extending core</p>
              <h2 class="heading-line">Integrations to make it better</h2>
              <p class="lead text-muted">
                Ever wonder about the wonder of Laap: We count on hundreds of
                friends contributing day by day to make Laapp a wonderful tool
              </p>
            </div>
            <a class="more-link undefined" href="#">
              Explore all integration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BubbleWrap;
