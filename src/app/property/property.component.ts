import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Property } from '../property';
import { PropertyServiceService } from '../property-service.service';
import { PropertyListComponent } from '../property-list/property-list.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
property:Property[]=[];
prop:any[];

  constructor(private propService:PropertyServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }
  onsubmit(form:NgForm){
  this.property.push(form.value);
  //this.prop=this.property;
  //this.goto();console.log(this.property[0])
 
 form.reset();
  for(let i=0;i<this.property.length;i++){
 this.goto(this.property[i]); 
  }
  }
  goto(prop:Property){
    this.propService.CreateProperty(prop);
    this.router.navigate(['/list']);
  }
 

}

