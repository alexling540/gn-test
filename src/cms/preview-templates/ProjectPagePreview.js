import React from "react";

import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

const ProjectPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  return (
    <ProjectPageTemplate
      // name={entry.getIn(["data", "projectName"])}
      // banner={entry.getIn(["data", "projectBanner"])}
      // team={widgetsFor("projectTeam")}
      body={widgetFor("body")}
    />
  );
};

export default ProjectPagePreview;
