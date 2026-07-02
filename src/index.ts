import { Command } from "commander";
import { doctor } from "./commands/doctor";

const program = new Command();

program
  .name("snipr")
  .description("AI-powered YouTube → Shorts CLI")
  .version("0.1.0");

program
  .command("doctor")
  .description("Check Snipr dependencies")
  .action(doctor);

program.parse();
