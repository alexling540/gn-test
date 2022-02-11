import CMS from "netlify-cms-app";

import EventPagePreview from "./preview-templates/EventPagePreview";
import ProjectPagePreview from "./preview-templates/ProjectPagePreview";

CMS.registerPreviewTemplate("events", EventPagePreview);
CMS.registerPreviewTemplate("projects", ProjectPagePreview);
