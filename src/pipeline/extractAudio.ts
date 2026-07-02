import { logger } from "../utils/logger";

export interface AudioResult {
  audioPath: string;
}

export const extractAudio = async (input: string): Promise<AudioResult> => {
  logger.info(`Extracting audio from input of length ${input.length}`);
  return { audioPath: input };
};
