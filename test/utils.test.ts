import { readArgs } from '../src/utils'

describe("utils", () => {
    it("readArgs should return empty argument array if no arguments are provided", () => {
        expect(readArgs()).toEqual([])
    })
})
