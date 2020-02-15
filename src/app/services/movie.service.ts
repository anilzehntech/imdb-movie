import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MovieService {
    baseUrl: any = 'http://starlord.hackerearth.com';
    constructor(private http:HttpClient) {

     }

    /**
    * Developer Name: Anil Prajapat
    * Date: 16-02-2020
    * @desc Get IMDB Movie list
    *
    * @return json
    */
   getMovieList() {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    //headers.append('Access-Control-Allow-Origin','*');
    return this.http.get('movies', {headers: headers});
   }
}