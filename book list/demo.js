//declaring variables
const submit=document.querySelector('#book-form');
const title=document.getElementById('title');
const author=document.getElementById('author');
const isbn=document.getElementById('isbn');
//adding event-listeners to the variables
submit.addEventListener('submit',saveDetails);
document.addEventListener('DOMContentLoaded',loadBookList);
//loadBookList fnc
function loadBookList()
{
  //get booklist from local storage
  let booklist;
  if(localStorage.getItem('books')===null)
  {
    booklist= [];
  }
  else
  {
    booklist=JSON.parse(localStorage.getItem('books'));
  }
  //load the booklist on page
    booklist.forEach(function(book){
      const div=document.createElement("tr");
  div.innerHTML='<td>'+book.title+'</td><td>'+book.author+'</td><td>'+book.isbn+'</td>';
  document.querySelector("#book-list").appendChild(div);
      
    });
}
//saveDetails fnc
function saveDetails(e)
{
  e.preventDefault();
  let newbook=new book(title.value,author.value,isbn.value);
  console.log(newbook);
  const div=document.createElement("tr");
  div.innerHTML='<td>'+newbook.title+'</td><td>'+newbook.author+'</td><td>'+newbook.isbn+'</td>';
  document.querySelector("#book-list").appendChild(div);
  //reset the input fields after submit
  title.value='';
  author.value='';
  isbn.value='';
  //save book to local storage
  let booklist;
  if(localStorage.getItem('books')===null)
  {
    booklist=[];
  }
  else{
    booklist=JSON.parse(localStorage.getItem('books'));
  }
  booklist.push(newbook);
  localStorage.setItem('books',JSON.stringify(booklist));
}
//book class
class book{
  constructor(title,author,isbn)
  {
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }
}