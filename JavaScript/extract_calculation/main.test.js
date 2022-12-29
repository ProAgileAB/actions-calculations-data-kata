import {describe, it, expect} from 'vitest'
import {calc_total} from './main'

describe("shopping cart total price calculation", () => {
    it("gives the price of item if 1 item with amount 1 is in cart", () => {
        const input_cart = [{
            price: 10
        }]
        expect(calc_total(input_cart)).toBe(10);
    })
    it("gives the price of 2 items if there are 2 items", () => {
        const input_cart = [{price: 10}, {price: 4}]
        expect(calc_total(input_cart)).toBe(14);
    })
})
