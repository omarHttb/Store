import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../service/material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Material } from '../model/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-material',
  templateUrl: './new-material.component.html',
  styleUrls: ['./new-material.component.css']
})
export class NewMaterialComponent implements OnInit {

  isEdit:boolean= false;
  materialForm!:FormGroup;
  Id!:number
  constructor(private materialService:MaterialService , private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute){}

 


  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams["Id"] !=undefined)
    {
      this.Id = this.activatedRoute.snapshot.queryParams["Id"]
      this.isEdit = true
    }
      this.materialForm = this.formBuilder.group ({
        "txtName":['',Validators.required]
      })
  }

  onSave(){
    
    if (this.materialForm.valid == true){
      var newMaterial = new Material();
      
      newMaterial.name = this.materialForm.value['txtName']
      this.materialService.Insert(newMaterial).subscribe({
        next:data=>{
          console.log("ok");
        },
        error:err=>{
          console.log("error");

        }
      })
    }
    // this.materialService.Insert()
  }

  edit(){
    this.materialService.Load(this.Id).subscribe({
      next:data=>{
        this.materialForm.controls['txtName'].setValue(data.name)
      }
    })
  }

  update(){
    if(this.materialForm.valid==true){
      var newMaterial = new Material();
      newMaterial.id = this.Id;
      newMaterial.name = this.materialForm.value['txtName']

      this.materialService.update(newMaterial).subscribe({
        next:data=>{
          console.log("OK");
        }
      })
    }
  }

}
