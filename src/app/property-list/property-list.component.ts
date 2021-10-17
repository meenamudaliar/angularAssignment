import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../property';
import { PropertyServiceService } from '../property-service.service';
import { PropertyComponent } from '../property/property.component';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
property:Property[]=[];
  propertyService: any;
  
  constructor(private propService:PropertyServiceService, private router:Router) { }

  ngOnInit(): void {
   this.addproperty();
  }
  addproperty(){
this.property=this.propService.properties;
  }
  create(){
    this.router.navigate(['/create']);
  }

}
