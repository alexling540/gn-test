import React from "react";

import ProjectPageTemplate from "../../components/templates/ProjectPageTemplate";

const ProjectPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  return (
    <ProjectPageTemplate
      name={entry.getIn(["data", "projectName"])}
      banner={entry.getIn(["data", "projectBanner"])}
      html={widgetFor("body")}
    />
  );
};

export default ProjectPagePreview;
