import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologylist = technologies.map((techs)=>(
    <span key={techs}>{techs}</span>
  ) )


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       {technologylist}
      </div>
    </div>
  );
}

export default ProjectItem;
