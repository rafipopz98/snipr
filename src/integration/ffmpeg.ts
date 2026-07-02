import { $ } from "bun";

export interface ExtractAudioOptions {
  videoPath: string;
  outputPath: string;
}

export interface ExtractAudioResult {
  audioPath: string;
}

export async function extractAudio(
  options: ExtractAudioOptions,
): Promise<ExtractAudioResult> {
  await $`ffmpeg -y -i ${options.videoPath} -vn -ac 1 -ar 16000 -c:a pcm_s16le ${options.outputPath}`.quiet();

  return {
    audioPath: options.outputPath,
  };
}
