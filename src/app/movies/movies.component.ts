import { Component, OnInit } from '@angular/core';
import { mockMovies } from './mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Movies";
  movies = mockMovies;
  constructor() { }

  ngOnInit(): void {
  }
  selectedMovie?: Movie;
  onSelect(movie: Movie){
    this.selectedMovie = movie;
  }
}

export interface Movie {
  id: number,
  title: string
}
