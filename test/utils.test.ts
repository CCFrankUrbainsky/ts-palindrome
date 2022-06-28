import { readArgs } from '../src/utils'

describe("utils", () => {
    it("readArgs should return empty array if no arguments are provided", () => {
        expect(readArgs()).toEqual([])
    })

    it("readArgs should return argument array if arguments are provided", () => {
        process.argv.push('two')
        process.argv.push('arguments')
        expect(readArgs()).toEqual(['two', 'arguments'])
    })
})
