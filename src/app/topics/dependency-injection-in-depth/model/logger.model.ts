export interface Logger {
  prefix: string;
  log: (str: string) => void;
  clear: () => void;
}
