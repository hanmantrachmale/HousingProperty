import { Property } from 'src/app/model/property';
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
  properties: Array<Property>;
  sellRent = 1;
  City = '';
  SearchCity = '';
  sortByItem = '';
  sortByOrder = 'desc';
  Sortby: Array<string> = ['City', 'Price'];
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

  onCitySearch() {
    this.SearchCity = this.City;
  }
  onCitySearchClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortOrderChange() {
    if (this.sortByOrder === 'desc') {
      this.sortByOrder = 'asc';
    } else {
      this.sortByOrder = 'desc';
    }
  }
}
