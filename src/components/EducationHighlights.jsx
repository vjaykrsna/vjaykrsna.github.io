import Timeline from "./common/Timeline.jsx";
import { education } from "../data/education.js";

export default function EducationHighlights({ items = education }) {
  return <Timeline items={items} />;
}
