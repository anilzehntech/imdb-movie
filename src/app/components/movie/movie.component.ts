import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieData:any = [];
  searchText:string = '';
  p: number = 1;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.getIMDBMovies();
  }

  getIMDBMovies(){
    this.movieService.getMovieList().subscribe(data=>{
      this.movieData = data;
    },err=>{
      console.log(err);
    })
  }

  sortProperty(property){
    this.movieData.sort(this.sortByProperty(property));
  }

  /**
 * Generic array sorting
 * @param property
 * @returns {Function}
 */
sortByProperty(property) {
  return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  };
};

}
