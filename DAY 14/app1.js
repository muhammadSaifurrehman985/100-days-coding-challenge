"use strict";
// DAY 14 
//QUESTION 40
function makeAlbum(artist, title, track) {
    let album = { artist, title };
    if (track) {
        album.track = track;
    }
    return album;
}
console.log(makeAlbum("The First Artist", "The First Album"));
//QUESTION 41 
let magicians = ["JADO", "Alexender", "John"];
magicians.forEach((names) => {
    console.log(names);
});
//QUESTION 42 
function addTheGreat() {
    for (let i = 0; i < magicians.length; i++) {
        const element = magicians[i];
        console.log(`The great magician ` + element);
    }
}
addTheGreat();
