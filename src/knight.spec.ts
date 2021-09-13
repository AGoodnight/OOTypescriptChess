import Knight from "./knight";

const exampleKnightAttempts = [
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
  [
    {
      x: 3,
      y: 12,
    },
    {
      x: 0,
      y: 5,
    },
  ],
];

describe("The Knight", () => {
  let thisKnight: Knight = null;

  beforeAll(() => {
    thisKnight = new Knight();
  });

  it("Moves in an L Shape only", () => {
    expect(
      thisKnight.canMoveToDestination.apply(
        thisKnight,
        exampleKnightAttempts[0]
      )
    ).toBeTruthy();
    expect(
      thisKnight.canMoveToDestination.apply(
        thisKnight,
        exampleKnightAttempts[1]
      )
    ).toBeTruthy();
    expect(
      thisKnight.canMoveToDestination.apply(
        thisKnight,
        exampleKnightAttempts[2]
      )
    ).toBeFalsy();
  });
});
