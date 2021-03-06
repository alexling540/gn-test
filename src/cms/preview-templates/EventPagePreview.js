import React from "react";

import EventPageTemplate from "../../components/templates/EventPageTemplate";

const EventPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  return (
    <EventPageTemplate
      name={entry.getIn(["data", "eventName"])}
      date={entry.getIn(["data", "eventDate"]).toString()}
      banner={entry.getIn(["data", "eventBanner"])}
      description={entry.getIn(["data", "eventDescription"])}
      location={entry.getIn(["data", "eventLocation"])}
      html={widgetFor("body")}
    />
  );
};

export default EventPagePreview;
