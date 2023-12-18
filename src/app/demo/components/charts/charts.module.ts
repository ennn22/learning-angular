import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './chart-routing.module';
import { ChartModule } from 'primeng/chart';
import { ChartsComponent } from './charts.component';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule, ChartsModule],
    declarations: [ChartsComponent],
})
export class ChartsModule {}
