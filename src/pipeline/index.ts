import type { PipelineOptions } from "../types/pipeline";
import { logger } from "../utils/logger";
import { createWorkspace } from "../utils/workspace";
import { download } from "./downloader";
import { extractAudio } from "./extract-audio";

export async function runPipeline(options: PipelineOptions) {
  const workspace = await createWorkspace();

  logger.info(`Workspace: ${workspace.id}`);

  const video = await download(options.input, workspace);

  logger.success(`Video ready: ${video.videoPath}`);

  const audioResult = await extractAudio(video);

  logger.success(`Audio ready: ${audioResult.audioPath}`);
}
