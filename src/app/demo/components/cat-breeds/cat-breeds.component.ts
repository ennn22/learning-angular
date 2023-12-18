import { Component, OnDestroy, OnInit } from '@angular/core';
import { catBreed } from '../../api/cat-breeds';
import { CatBreedsService } from '../../service/cat-breeds.service';

@Component({
    selector: 'app-cat-breeds',
    templateUrl: './cat-breeds.component.html',
    styleUrls: ['./cat-breeds.component.scss'],
})
export class CatBreedsComponent implements OnInit {
    catBreeds: catBreed[];

    constructor(private catBreedsService: CatBreedsService) {}

    ngOnInit(): void {
        this.catBreedsService.getCatBreeds().then((data) => {
            this.catBreeds = data;
        });
    }
}
