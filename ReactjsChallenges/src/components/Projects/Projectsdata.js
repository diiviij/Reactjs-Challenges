import React from "react";
import Button from "react-bootstrap/Button";

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
            <p>
              {props.data}
              <Button variant="outline-primary">{props.button}</Button>{" "}
              <Button variant="outline-success">{props.button2}</Button>{" "}
              <Button variant="outline-warning">{props.button3}</Button>{" "}
              <Button variant="outline-danger">{props.button4}</Button>{" "}
              <Button variant="outline-info">{props.button5}</Button>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectsdata;
