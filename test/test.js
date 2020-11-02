import chai from "chai"
import { parse } from "../src/parser.js";
const expect = chai.expect

describe("Heading tag test", () =>{
    it("valid heading 1", () =>{
        let input = "# Heading 1"
        let output = "<h1> Heading 1 </h1>"
        expect(parse(input)).equal(output)
    })
    it("valid heading 2", () =>{
        let input = "## Heading 2"
        let output = "<h2> Heading 2 </h2>"
        expect(parse(input)).equal(output)
    })
    it("valid heading 3", () =>{
        let input = "### Heading 3"
        let output = "<h3> Heading 3 </h3>"
        expect(parse(input)).equal(output)
    })
    it("valid heading 4", () =>{
        let input = "#### Heading 4"
        let output = "<h4> Heading 4 </h4>"
        expect(parse(input)).equal(output)
    })
    it("valid heading 5", () =>{
        let input = "##### Heading 5"
        let output = "<h5> Heading 5 </h5>"
        expect(parse(input)).equal(output)
    })
    it("valid heading 6", () =>{
        let input = "###### Heading 6"
        let output = "<h6> Heading 6 </h6>"
        expect(parse(input)).equal(output)
    })
    it("invalid heading 7", () =>{
        let input = "####### Heading 7"
        let output = "<p> ####### Heading 7 </p>"
        expect(parse(input)).equal(output)
    })
    it("invalid heading: no space after #", () =>{
        let input = "######Heading 6"
        let output = "<p> ######Heading 6 </p>"
        expect(parse(input)).equal(output)
    })
    it("No text after #", () =>{
        let input = "## "
        let output = "<h2>  </h2>"
        expect(parse(input)).equal(output)
    })
    it("No # before text", () =>{
        let input = "Heading"
        let output = "<p> Heading </p>"
        expect(parse(input)).equal(output)
    })
    it("Empty string", () =>{
        let input = ""
        let output = ""
        expect(parse(input)).equal(output)
    })

})

describe("Anchor tag text", () =>{
    it("Valid link", () => {
        let input = "[Google](www.google.com)"
        let output = "<a href='www.google.com'> Google </a>"
        expect(parse(input)).equal(output)
    })
    it("Format error. ", () => {
        let input = "[Google]and(www.google.com)"
        let output = "[Google]and<a href=\'www.google.com\'> www.google.com </a>"
        expect(parse(input)).equal(output)
    })
    it("No link text in para", () => {
        let input = "No link text here [](www.google.com)"
        let output = "<p> No link text here []<a href=\'www.google.com\'> www.google.com </a> </p>"
        expect(parse(input)).equal(output)
    })
    // it("No link text", () => {
    //     let input = "[](www.google.com)"
    //     let output = "<a href=\'www.google.com\'> www.google.com </a>"
    //     expect(parse(input)).equal(output)
    // })
    // it("link followed by text", () => {
    //     let input = "[Google](www.google.com) link before"
    //     let output = "<a href=\'www.google.com\'> Google </a>"
    //     expect(parse(input)).equal(output)
    // })
    it("No URL", () => {
        let input = "No URL here[Google]()"
        let output = "<p> No URL here[Google]() </p>"
        expect(parse(input)).equal(output)
    })
})

describe("Paragraph tag test", () =>{
    it("valid paragraph text", () =>{
        let input = "This is a simple text"
        let output = "<p> This is a simple text </p>"
        expect(parse(input)).equal(output)
    })
    it("Empty text", () =>{
        let input = ""
        let output = ""
        expect(parse(input)).equal(output)
    })
    it("Heading like text", () =>{
        let input = "##heading 2"
        let output = "<p> ##heading 2 </p>"
        expect(parse(input)).equal(output)
    })
    it("Heading 7 like text", () =>{
        let input = "####### heading 7"
        let output = "<p> ####### heading 7 </p>"
        expect(parse(input)).equal(output)
    })
    it("Link text", () =>{
        let input = "[link](www.google.com)"
        let output = "<a href='www.google.com'> link </a>"
        expect(parse(input)).equal(output)
    })
    
})