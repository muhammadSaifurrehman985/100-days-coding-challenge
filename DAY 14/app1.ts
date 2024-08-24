// DAY 14 
//QUESTION 40
function  makeAlbum(artist : string,title : string, track? : number){
    let album: { artist: string; title: string; track?: number } = {artist , title}
    if (track) {
album.track = track;
    }
    return album;
}
console.log(makeAlbum("The First Artist", "The First Album"));

//QUESTION 41 
 
let magicians: string[]=["JADO", "Alexender", "John"]

 magicians.forEach((names)=>{
    console.log(names)
 })


//QUESTION 42 

function addTheGreat (){
    for (let i = 0; i < magicians.length; i++) {
        const element = magicians[i];
        console.log(`The great magician ` + element);
        
    }
}
addTheGreat()