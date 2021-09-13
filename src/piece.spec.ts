import Piece from "./piece";

const exampleMoveRequests = [
  [
    {
      x: 10,
      y: 4,
    },
    {
      x: 100,
      y: 84,
    },
  ],
  [
    {
      x: 12,
      y: 1,
    },
    {
      x: 14,
      y: 0,
    },
  ],
];

describe("A Piece", () => {
  let thisPiece: Piece = null;

  beforeAll(() => {
    thisPiece = new Piece();
  });

  test("Can find the difference between Origin and Destination", () => {
    let diff = thisPiece.changeInCoordinates.apply(
      thisPiece,
      exampleMoveRequests[0]
    );
    expect(diff.x).toBe(90);
    expect(diff.y).toBe(80);

    diff = thisPiece.changeInCoordinates.apply(
      thisPiece,
      exampleMoveRequests[1]
    );
    expect(diff.x).toBe(2);
    expect(diff.y).toBe(1);
  });
});
