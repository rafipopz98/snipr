import { $ } from "bun";
import { join } from "node:path";
import type { Workspace } from "../utils/workspace";
import { logger } from "../utils/logger";

export interface DownloadOptions {
  url: string;
  workspace: Workspace;
}

export interface DownloadResult {
  workspace: Workspace;
  videoPath: string;
}

export async function downloadVideo(
  options: DownloadOptions,
): Promise<DownloadResult> {
  const output = join(options.workspace.path, "video.%(ext)s");

  const videoPath =
    await $`yt-dlp -o ${output} --print after_move:filepath ${options.url}`.text();

  logger.info(`Downloaded to ${videoPath.trim()}`);

  return {
    workspace: options.workspace,
    videoPath: videoPath.trim(),
  };
}
