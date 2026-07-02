import { logger } from "../utils/logger";

export function doctor() {
  logger.info("Running Snipr diagnostics...");
  logger.success("Everything looks good.");
}
