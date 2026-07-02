import { runPipeline } from "../pipeline";

export async function youtube(url: string) {
  await runPipeline({ input: url });
}
