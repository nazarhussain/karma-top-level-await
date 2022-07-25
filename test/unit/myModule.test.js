import { expect } from "chai";
import moduleValue from "../../src/myModule/index.mjs";

describe("myModule", () => {
  it("should have initialized value", () => {
    expect(moduleValue).to.eql("initialized");
  });
});
