import React from "react";

const Projectsdata = (props) => {
  return (
    <>
      <div className="pro">
        <div class="work__img">
          <img src={props.img} />
          <h4 className="section-title">{props.title}</h4>
          <div className="projectsbtn">
            <a
              href={props.demo}
              class="btn2 btn-rounded btn-alternate mr-2 mr-md-5"
            >
              Live Demo
            </a>
            <a href={props.git} class="btn2 btn-rounded btn-contrast scrollto">
              GitHub Repo
            </a>
          </div>
          <div className="para-content">
            <p>{props.data}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectsdata;
