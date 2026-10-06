import { describe, it, expect } from "vitest"
import { smallestOfTwo } from "./smallest_of_two.js"

describe("smallest", () => {
  it("nånting", () => {
    expect(smallestOfTwo(1, 2)).toBe(1)
  })
})