import { Point } from "ChessTypes";
import Piece from "./piece";

export default class Knight extends Piece {
  constructor() {
    super();
  }

  canMoveToDestination(origin: Point, destination: Point) {
    const r = this.changeInCoordinates(origin, destination);
    if ((r.x == 2 && r.y == 1) || (r.x == 1 && r.y == 2)) {
      return true;
    } else {
      return false;
    }
  }
}
