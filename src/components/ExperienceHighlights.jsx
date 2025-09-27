import Timeline from "./common/Timeline.jsx";
import { experience } from "../data/experience.js";

export default function ExperienceHighlights({ items = experience }) {
  return <Timeline items={items} />;
}
