/* Creates anchor tag without explicit link test
* @param {string} url
* @param {string} str
* @param {number} urlIdx
* @return {string} str
*/
const getTagWithoutLinkText = (url, str, urlIdx) => {
  url = url.replace(/\(|\)/g, "");
  let anchorTag = `<a href='${url}'> ${url} </a>`
  str = str.slice(0, urlIdx) + anchorTag + str.slice(urlIdx+url.length+2)
  return str
}

/* Converts markdown to anchor tag
* @param {string} str
* @return {string} str
*/
export const anchor = (str) => {
  let anchorTag

  //get the link text and link from the parameter
  let text = str.match(/\[.*?\]/).toString();//type cast to string. Else it will be assigned as list
  let url = str.match(/\(.*?\)/g).toString();

  let textIdx = str.indexOf(text) 
  let urlIdx = str.indexOf(url)

  //Missing link text
  if(text.length<=2){
    str = getTagWithoutLinkText(url, str, urlIdx);
    return str
  }
  //Missing URL
  if(url.length<=2){
    console.log("No URL for anchor tag")
    //log error
  }

  //validate format for spaces and words between pairs of brackets
  
  if(textIdx+text.length == urlIdx){
    
    text = text.replace(/\[|\]/g, "");
    url = url.replace(/\(|\)/g, "");
    anchorTag = `<a href='${url}'> ${text} </a>`
    str = str.slice(0, textIdx) + anchorTag + str.slice(textIdx+text.length+url.length+4)
  } 
  else {
    str = getTagWithoutLinkText(url, str, urlIdx);
  }
  return str
};
