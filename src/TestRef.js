import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe(Counter, () => {
    test('Initializes correctly with 0', () =>{
        const {getByTestId} = render(<Counter initial={0} />)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(0)
    })

    test('Adds 1 if the Add button is clicked', () =>{
        const {getByTestId, getByRole} = render(<Counter initial={0} />)
        const addButton = getByRole("button", {name:"Add"})
        fireEvent.click(addButton)
        const countValue = Number(getByTestId("count").textContent)
        expect(countValue).toEqual(1)
    })
})