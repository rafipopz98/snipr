import type { PipelineOptions } from "../types/pipeline";
import { logger } from "../utils/logger";

export async function runPipeline(options: PipelineOptions) {
  logger.info(`Starting pipeline for: ${options.input}`);

  logger.info("Download");
  logger.info("Extract Audio");
  logger.info("Transcribe");
  logger.info("Analyze");
  logger.info("Render");

  logger.success("Pipeline complete.");
}
