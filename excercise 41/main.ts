//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians:string[]=["chris","michael","tom"];

function showMagicians(magicians:string[]) {
    magicians.forEach(magician =>{
        console.log(magician);
    });
}
showMagicians(magicians);