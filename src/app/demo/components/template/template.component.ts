import { Component } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
    street1: string = '';
    street2: string = '';
    city: string = '';
    selectedState: any = null;
    zip: number;
    isSubmitted: boolean = false;

    malaysiaStates = [
        { name: 'Johor', code: 'Johor' },
        { name: 'Kedah', code: 'Kedah' },
        { name: 'Kelantan', code: 'Kelantan' },
        { name: 'Kuala Lumpur', code: 'Kuala Lumpur' },
        { name: 'Labuan', code: 'Labuan' },
        { name: 'Melaka', code: 'Melaka' },
        { name: 'Negeri Sembilan', code: 'Negeri Sembilan' },
        { name: 'Pahang', code: 'Pahang' },
        { name: 'Perak', code: 'Perak' },
        { name: 'Perlis', code: 'Perlis' },
        { name: 'Pulau Pinang', code: 'Pulau Pinang' },
        { name: 'Putrajaya', code: 'Putrajaya' },
        { name: 'Sabah', code: 'Sabah' },
        { name: 'Sarawak', code: 'Sarawak' },
        { name: 'Selangor', code: 'Selangor' },
        { name: 'Terengganu', code: 'Terengganu' },
    ];

    zipCode: RegExp = /^\d{5}$/;

    onSubmit() {
        this.isSubmitted = true;
        this.street1 = this.street1;
        this.street2 = this.street2;
        this.city = this.city;
        this.selectedState = this.selectedState;
        this.zip = this.zip;
    }
}
