import { $ } from "bun";
import type { TranscriptResult } from "../types/transcript";

export interface TranscribeOptions {
  audioPath: string;
  model?: string;
}

export async function transcribe(
  options: TranscribeOptions,
): Promise<TranscriptResult> {
  const model = options.model ?? "base";

  const output =
    await $`python3 scripts/transcribe.py --input ${options.audioPath} --model ${model}`.text();

  return JSON.parse(output) as TranscriptResult;
}
