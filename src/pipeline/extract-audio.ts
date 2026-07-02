import { join } from "node:path";
import type { DownloadResult } from "../integration/ytdlp";
import { extractAudio as ffmpeg } from "../integration/ffmpeg";

export interface AudioStageResult {
  workspace: DownloadResult["workspace"];
  audioPath: string;
}

export async function extractAudio(
  download: DownloadResult,
): Promise<AudioStageResult> {
  const outputPath = join(download.workspace.path, "speech.wav");

  const result = await ffmpeg({
    videoPath: download.videoPath,
    outputPath,
  });

  return {
    workspace: download.workspace,
    audioPath: result.audioPath,
  };
}
