import { join } from "node:path";
import { writeFile } from "node:fs/promises";

import type { ExtractAudioResult } from "../integration/ffmpeg";
import { transcribe } from "../integration/whisper";
import type { DownloadResult } from "../integration/ytdlp";

export interface AudioStageResult extends ExtractAudioResult {
  workspace: DownloadResult["workspace"];
}

export async function transcribeAudio(input: AudioStageResult) {
  const transcript = await transcribe({
    audioPath: input.audioPath,
  });

  const transcriptPath = join(input.workspace.path, "transcript.json");

  await writeFile(transcriptPath, JSON.stringify(transcript, null, 2));

  return {
    workspace: input.workspace,
    transcriptPath,
    transcript,
  };
}
