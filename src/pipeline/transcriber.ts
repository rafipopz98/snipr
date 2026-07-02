import { logger } from "../utils/logger";
export interface TranscribeResult {
  output: string;
}

export const transcriber = async (input: string): Promise<TranscribeResult> => {
  logger.info(`Transcribing input of length ${input.length}`);
  return { output: input };
};
