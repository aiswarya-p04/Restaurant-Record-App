import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './rest.model';

@Component({
  selector: 'app-rest-dash',
  templateUrl: './rest-dash.component.html',
  styleUrls: ['./rest-dash.component.css']
})
export class RestDashComponent implements OnInit {

  formValue!:FormGroup
  allRestaurantData:any;
  showAdd!:boolean;
  showBtn!:boolean;
  restaurantModelObj:RestaurantData=new RestaurantData;
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:[''],
    })
    this.getAllData();

  }
  clickAddRest(){
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }
addRest(){
  this.restaurantModelObj.name=this.formValue.value.name;
  this.restaurantModelObj.email=this.formValue.value.email;
  this.restaurantModelObj.mobile=this.formValue.value.mobile;
  this.restaurantModelObj.address=this.formValue.value.address;
  this.restaurantModelObj.services=this.formValue.value.services;

  this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
    console.log(res);
    alert("Restaurant records added successfully");
    let ref=document.getElementById('clear');
    ref?.click();
    this.formValue.reset();
    
    this.getAllData();
  },
  err=>{
    alert("Something's wrong")
  })
}
getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData=res;
  })
}

deleteRest(data:any){
  this.api.deleteRestaurant(data.id).subscribe(res=>{
    alert("Restaurant records deleted")
    this.getAllData();
  })
}

onEditRest(data:any){
  this.showAdd=false;
    this.showBtn=true;
  this.restaurantModelObj.id=data.id;
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.services);
}
updateRest(){
  this.restaurantModelObj.name=this.formValue.value.name;
  this.restaurantModelObj.email=this.formValue.value.email;
  this.restaurantModelObj.mobile=this.formValue.value.mobile;
  this.restaurantModelObj.address=this.formValue.value.address;
  this.restaurantModelObj.services=this.formValue.value.services;

  this.api.updateRestaurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
    alert("Restaurant records updated successfully");
    let ref=document.getElementById('clear');
    ref?.click();
    this.formValue.reset();
    
    this.getAllData();
  })
}
}

