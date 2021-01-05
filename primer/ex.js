// TODO: define addFavoriteBook(..) function
function addFavoriteBook(name){
   var sample=name.split(" ");
   for(let words of sample){
      if(words=="Great"){
         return;
      }
   }
   favoriteBooks.push(name);
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks(){
   for(let i of favoriteBooks){
      console.log(i);
   }
}
var favoriteBooks = [];
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();