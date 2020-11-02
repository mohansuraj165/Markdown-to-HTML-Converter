/* Converts markdown to paragraph tag
* @param {string} str
* @return {string} paraTag
*/

export const paragraph = (str) => {
  let paraTag = `<p> ${str} </p>`
  return paraTag
};
