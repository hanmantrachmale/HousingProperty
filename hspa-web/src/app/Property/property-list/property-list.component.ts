import { HousingService } from './../../service/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  sellRent = 1;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      (data) => {
        this.properties = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
