import { Injectable } from '@angular/core';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  constructor() { }
  properties:Property[]=[];
  CreateProperty(propert:Property){
    this.properties.push(propert);
  }


}
