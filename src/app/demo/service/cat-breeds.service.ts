import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catBreed } from '../api/cat-breeds';

@Injectable({
    providedIn: 'root',
})
export class CatBreedsService {
    constructor(private http: HttpClient) {}

    getCatBreeds() {
        return this.http
            .get<any>('https://catfact.ninja/breeds?limit=20')
            .toPromise()
            .then((res) => res.data as catBreed[])
            .then((data) => data);
    }
}
