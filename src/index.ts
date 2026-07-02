import { Command } from "commander";
import { doctor } from "./commands/doctor";
import { youtube } from "./commands/youtube";

const program = new Command();

program
  .name("snipr")
  .description("AI-powered YouTube → Shorts CLI")
  .version("0.1.0");

program
  .command("doctor")
  .description("Check Snipr dependencies")
  .action(doctor);

program
  .command("youtube")
  .argument("<url>")
  .description("Download and process a YouTube video")
  .action(youtube);

program.parse();
