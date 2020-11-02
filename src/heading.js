export const heading = (str) => {

  //Log error if format does not match

  let splitStr = str.split(" ");
  let hashCount = splitStr.shift();
  hashCount = hashCount.trim().length;
  let heading = `<h${hashCount}> ${splitStr.join(" ")} </h${hashCount}>`
  return heading
};
