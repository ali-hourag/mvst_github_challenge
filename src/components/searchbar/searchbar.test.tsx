import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";


describe("When searchbar component is rendered", () => {
    const languages = ["HTML", "JavaScript"]
    beforeEach(() => {
        render(<Searchbar languages={languages} />)
    })

    test("Search input and select element exist", () => {
        const searchInput = screen.getByTestId("searchbar-input");
        expect(searchInput).toBeDefined();

        const selectFilter = screen.getAllByTestId("select-filter");
        expect(selectFilter).toBeDefined();
    })
})