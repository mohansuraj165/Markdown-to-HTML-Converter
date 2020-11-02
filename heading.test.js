import heading from "./heading.js";

describe("Header tag test", () =>{
    test("valid header 1", () =>{
        let input = "# Header 1"
        let output = "<h1> Header 1 </h1>"
        expect(heading(input)).toEqual(output)
    })
})