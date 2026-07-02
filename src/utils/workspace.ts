import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

export interface Workspace {
  id: string;
  path: string;
}

export async function createWorkspace(): Promise<Workspace> {
  const id = randomUUID();

  const path = join(process.cwd(), "temp", id);

  await mkdir(path, {
    recursive: true,
  });

  return {
    id,
    path,
  };
}
