import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if (localProperties) {
          for (const id in localProperties) {
            if (
              localProperties.hasOwnProperty(id) &&
              localProperties[id].SellRent === sellRent
            ) {
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property) {
    let newProperty = [property];
    if (localStorage.getItem('newProp')) {
      newProperty = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProperty));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '1001');
      return 1001;
    }
  }
}
