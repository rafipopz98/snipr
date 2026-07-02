export interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}

export interface TranscriptResult {
  language: string;
  segments: TranscriptSegment[];
}
