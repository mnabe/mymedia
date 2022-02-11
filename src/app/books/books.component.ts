import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [
    {
      englishTitle: 'Hej',
      danishTitle: 'Hej',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
