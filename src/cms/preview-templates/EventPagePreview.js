import * as React from "react";

import { EventPageTemplate } from "../../templates/event-page";

const EventPagePreview = ({ entry, widgetFor }) => {
  return (
    <EventPageTemplate
      name={entry.getIn(["data", "name"])}
      date={entry.getIn(["data", "date"]).toString()}
      description={entry.getIn(["data", "description"])}
      image={entry.getIn(["data", "image"])}
    />
  );
};

export default EventPagePreview;