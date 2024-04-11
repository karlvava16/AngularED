import { Component } from '@angular/core';
import { books } from './books';

interface Book {
  title: string;
  author: string;
  image: string;
  year: number;
  price: number;
  rating: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public books = books;
  selectedBook: Book = {} as Book;
  changeBook(id: number) {
    this.selectedBook = books[id];
  }
}
