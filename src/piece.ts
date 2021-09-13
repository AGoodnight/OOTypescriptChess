import { Point } from "ChessTypes";

export default class Piece {
  position: Point;

  differenceInPoints(o: number, d: number) {
    let dif = o > d ? o - d : d - o;
    return dif;
  }

  changeInCoordinates(origin: Point, destination: Point): Point {
    let request: Point = { x: null, y: null };
    Object.keys(origin).map((axis: string) => {
      request[axis] = this.differenceInPoints(origin[axis], destination[axis]);
    });
    return request;
  }

  canMoveToDestination(origin: Point, destination: Point): boolean {
    return false;
  }
}
