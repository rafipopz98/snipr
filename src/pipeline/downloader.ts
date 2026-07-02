import { downloadVideo } from "../integration/ytdlp";
import type { Workspace } from "../utils/workspace";

export async function download(input: string, workspace: Workspace) {
  return downloadVideo({
    url: input,
    workspace,
  });
}
