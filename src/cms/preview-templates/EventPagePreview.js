import React from "react";

import { EventPageTemplate } from "../../templates/event-page";

const EventPagePreview = ({ entry, widgetFor }) => {
  return (
    <EventPageTemplate
      name={entry.getIn(["data", "eventName"])}
      date={entry.getIn(["data", "eventDate"]).toString()}
      description={entry.getIn(["data", "eventDescription"])}
      banner={entry.getIn(["data", "eventBanner"])}
    />
  );
};

export default EventPagePreview;
