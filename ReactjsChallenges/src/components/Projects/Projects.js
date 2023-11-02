import React from "react";
import "../Projects/Projects.css";
import Projectsdata from "./Projectsdata";
import Projectlist from "./Projectslist";
import BubbleWrap from "../section/bubblewrap";

const Projects = () => {
  return (
    <>
      <section class="work section" id="work">
        <h2 class="section-title">Projects</h2>
        <Projectsdata
          img={require("../Assets/img/newsletter.jpg")}
          title={Projectlist[3].title}
          demo={Projectlist[3].demo}
          git={Projectlist[3].git}
          data={Projectlist[3].data}
        />
        <Projectsdata
          img={require("../Assets/img/tree.png")}
          title={Projectlist[0].title}
          demo={Projectlist[0].demo}
          git={Projectlist[0].git}
        />
        <Projectsdata
          img={require("../Assets/img/random.png")}
          title={Projectlist[1].title}
          demo={Projectlist[1].demo}
          git={Projectlist[1].git}
        />
        <Projectsdata
          img={require("../Assets/img/github.png")}
          title={Projectlist[2].title}
          demo={Projectlist[2].demo}
          git={Projectlist[2].git}
        />
        <Projectsdata
          // img={require("../Assets/img/coming.jpg")}
          title={Projectlist[4].title}
          demo={Projectlist[4].demo}
          git={Projectlist[4].git}
        />

        <Projectsdata
          img={require("../Assets/img/random.png")}
          title={Projectlist[5].title}
          demo={Projectlist[5].demo}
          git={Projectlist[5].git}
        />

        <Projectsdata
          img={require("../Assets/img/random.png")}
          title={Projectlist[7].title}
          demo={Projectlist[7].demo}
          git={Projectlist[7].git}
        />

        <Projectsdata
          img={require("../Assets/img/random.png")}
          title={Projectlist[6].title}
          demo={Projectlist[6].demo}
          git={Projectlist[6].git}
        />
      </section>
      <BubbleWrap />
    </>
  );
};

export default Projects;
