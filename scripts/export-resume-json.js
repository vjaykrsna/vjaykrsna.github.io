import fs from "fs";
import { resumeData } from "../src/data/resumeData.js";

fs.writeFileSync("./public/resume.json", JSON.stringify(resumeData, null, 2));
console.log("✓ Exported public/resume.json");
