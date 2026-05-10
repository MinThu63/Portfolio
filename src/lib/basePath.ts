const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
