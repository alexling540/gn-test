import React from "react";

import { ProjectPageTemplate } from "../../templates/project-page";

const ProjectPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  return (
    <ProjectPageTemplate
      name={entry.getIn(["data", "projectName"])}
      date={entry.getIn(["data", "eventDate"]).toString()}
      description={entry.getIn(["data", "eventDescription"])}
      banner={entry.getIn(["data", "projectBanner"])}
      team={widgetsFor("projectTeam")}
      html={widgetFor("body")}
    />
  );
};

export default ProjectPagePreview;
