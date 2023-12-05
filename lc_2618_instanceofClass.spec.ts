import { checkIfInstanceOf } from "./lc_2618_instanceofClass";
describe("instance of class", () => {
  it("should check instance of class", () => {
    expect(checkIfInstanceOf(new Date(), Date)).toEqual(true);
  });
});
