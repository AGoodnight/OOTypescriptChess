declare module "ChessTypes" {
  export interface Point extends Record<string, number> {
    x: number;
    y: number;
  }
}
