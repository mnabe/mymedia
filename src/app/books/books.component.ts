import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = "Books";
  books: Book[] = [
    {
      id: 1,
      title: 'Book title'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

interface Book {
  id: number;
  title: string
}
