import type { PipelineOptions } from "../types/pipeline";
import { logger } from "../utils/logger";
import { createWorkspace } from "../utils/workspace";
import { download } from "./downloader";

export async function runPipeline(options: PipelineOptions) {
  const workspace = await createWorkspace();

  logger.info(`Workspace: ${workspace.id}`);

  const video = await download(options.input, workspace);

  logger.success(`Video ready: ${video.videoPath}`);
}
