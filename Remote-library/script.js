let myLibrary = [];
const booksGrid = document.getElementById("grid");

addBookToLibrary(new Book("title", "author", "pages", true))
addBookToLibrary(new Book("title1", "author1", "pages1", true))
addBookToLibrary(new Book("title2", "author2", "pages2", true))

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function(){
        console.log(title)
        console.log(author)
        console.log(pages)
    }
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function writeBooks(){
    alert("penis")
}

document.querySelector("#new_book").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});


document.querySelector("#submitBook").addEventListener("click", function(){

        var inputTitle = document.getElementById("title").value;
        var inputAuthor = document.getElementById("Author").value;
        var inputPages = document.getElementById("Pages").value;
        var inputRead = document.getElementById("read").value;
        var checked = false;
    
        if (inputTitle === "" || inputAuthor === "" || inputPages === ""){
            alert("required")
        }
        else{

            if(document.getElementById('read').checked){
                checked = true
            }
            else{
                checked = false
            }
            myLibrary.push(new Book(inputTitle, inputAuthor, inputPages, checked))
        
            document.getElementById("title").value = ""
            document.getElementById("Author").value = ""
            document.getElementById("Pages").value = ""
            document.getElementById("read").checked = false;
            
            document.querySelector(".popup").classList.remove("active");
            updateBooksGrid();
    }
   
});


function updateBooksGrid(){
    booksGrid.innerHTML = "";
    for (let element of myLibrary) {
        createBookCard(element);
      }
}


function removeBook(bookName){
    myLibrary.forEach(element => 
        {
        if(element.author===bookName){         
            const index = myLibrary.indexOf(element);
            if (index > -1) {
                myLibrary.splice(index, 1);
              }      
            }
        }   
        );
    updateBooksGrid();
}



function createBookCard(book) {
    
    const bookCard = document.createElement("div");
    bookCard.classList.add("books_grid");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readButton = document.createElement("button");
    readButton.classList.add("button_inside_grid");
    readButton.addEventListener("click", function(){
        if(readButton.textContent === "Read"){
            readButton.textContent = "Unread"
        }
        else{
            readButton.textContent = "Read"
        }
    });



    const removeButton = document.createElement("button");
    removeButton.classList.add("button_inside_grid");

    title.textContent = "title: " + book.title;
    author.textContent = "author: " + book.author;
    pages.textContent = "number of pages: " + book.pages;
    removeButton.textContent = "Remove";

    document.querySelector("#new_book").addEventListener("click", function(){
        document.querySelector(".popup").classList.add("active");
        booksGrid.innerHTML = "";
    });

    removeButton.addEventListener("click", function(){
        var bookName = readButton.parentElement.childNodes.item(1).textContent.slice(8);
        removeBook(bookName);
    });
    

    if (book.isRead) {
        readButton.textContent = "Read";
      } else {
        readButton.textContent = "Not read";
      }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);
    booksGrid.appendChild(bookCard);  
}