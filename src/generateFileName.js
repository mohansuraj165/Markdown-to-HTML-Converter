//Generate a random hex file name for resulting HTML file
export const generateFileName = () =>{
    let fn = Math.random(99999).toString(16)
    fn = fn.slice(fn.indexOf('.')+1)
    return fn
}