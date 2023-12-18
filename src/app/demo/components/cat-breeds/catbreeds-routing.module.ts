import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatBreedsComponent } from './cat-breeds.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: CatBreedsComponent }]),
    ],
    exports: [RouterModule],
})
export class CatBreedsRoutingModule {}
