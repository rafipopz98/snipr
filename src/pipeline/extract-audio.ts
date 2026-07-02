import { join } from "node:path";
import type { DownloadResult } from "../integration/ytdlp";
import { extractAudio as extractAudioIntegration } from "../integration/ffmpeg";

export async function extractAudio(download: DownloadResult) {
  const outputPath = join(download.workspace.path, "speech.wav");

  return extractAudioIntegration({
    videoPath: download.videoPath,
    outputPath,
  });
}
