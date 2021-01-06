class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	 addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		this.favoriteBooks.push(bookName);
	}
}
	printFavoriteBooks() {
	console.log(`Favorite Books: ${this.favoriteBooks.length}`);
	for (let bookName of this.favoriteBooks) {
		console.log(bookName);
	}
}
}



function loadBooks( bookshelf ) {
	fakeAjax(BOOK_API,function onbooks(bookName){
		for(let bookNames of bookName){
				bookshelf.addFavoriteBook(bookNames);
		}
		bookshelf.printFavoriteBooks();
	});
	
}
var mybooks=new Bookshelf();
loadBooks(mybooks);

function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all

