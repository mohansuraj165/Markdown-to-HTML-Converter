import { heading } from "./heading.js";
import { paragraph } from "./paragraph.js";
import { anchor } from "./anchor.js";
const TagsEnum = {"heading":1, "paragraph":2, "anchor":3, "blank":4}

//Identify what tags are present and call appropriate function to handle the conversion
export const parse = (line) => {
  let tagType = identifyTag(line);

  tagType.forEach(tag =>{
    switch(tag) {
      case TagsEnum.heading:
        line = heading(line)
        break;
      case TagsEnum.paragraph:
        line = paragraph(line)
        break;
      case TagsEnum.anchor:
        line = anchor(line)
        break
      case TagsEnum.blank:
        return ("")
      default:
        console.log(`Invalid tag ${tag} found for line ${line}`)
        // log error. Return empty or line as p tag
    }
  });
  
  return line;
};

const identifyTag = (line) => {
  const headingRegEx = RegExp("^#{1,6} ");
  const linkRegEx = RegExp("[.*](.+)");
  const notlinkRegEx = RegExp("^(\\[)");
  const notLinkOrHeadingRagEx = RegExp("^(?!#{1,6} |\\[).+")
  const sentenceRegEx = RegExp("[a-zA-Z0-9:/!@#,\$%\^\&*\)\(\[\\]+=._-]+",'g');//[a-zA-Z0-9:/!@#,\$%\^\&*\)\(\[\\]+=._-]+
  let tags = [];
  
  //Blank line
  if(line.trim()==""){
    tags.push(TagsEnum.blank)
    return tags;
  }
  
  //Heading tag
  if (headingRegEx.test(line)) {
    tags.push(TagsEnum.heading);
  }

  //Paragraph tag
  if(notLinkOrHeadingRagEx.test(line)){
    tags.push(TagsEnum.paragraph);
  }

  //Link tag
  if (linkRegEx.test(line)) {
    tags.push(TagsEnum.anchor);
  }

  return tags;
};
