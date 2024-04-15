import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Material } from '../model/material';
import { ActivatedRoute } from '@angular/router';
import { MaterialBoughtService } from '../service/material-bought.service';
import { MaterialService } from '../service/material.service';
import { mBought } from '../model/mBought';

@Component({
  selector: 'app-materials-bought',
  templateUrl: './materials-bought.component.html',
  styleUrls: ['./materials-bought.component.css']
})
export class MaterialsBoughtComponent implements OnInit {

isEdit:boolean=false
mBoughtForm!:FormGroup;
materials!:Material[]
Id!:number
constructor(private formBuilder:FormBuilder, 
            private activatedRoute:ActivatedRoute , 
            private mBoughtService:MaterialBoughtService , 
            private materialService:MaterialService){}
//calculate value

calculateTotal() {
  const unitPrice = this.mBoughtForm.get('txtUnitPrice')!.value;
  const quantity = this.mBoughtForm.get('txtQuantity')!.value;
  this.mBoughtForm.get('txtTotalPrice')!.setValue(unitPrice * quantity);
}

// adds material
  fillMaterial(){
    
    this.materialService.loadAll().subscribe({
      next:data=>{
        this.materials=data
      },
      error:err=>{
        console.log("error");
      }
    })
  }         
// on in initialize 
  ngOnInit(): void {
    this.fillMaterial()
    if(this.activatedRoute.snapshot.queryParams["Id"] !=undefined){
      this.Id = this.activatedRoute.snapshot.queryParams["Id"]
      this.isEdit= true
    }

    this.mBoughtForm = this.formBuilder.group({
      "txtUnitPrice":['',Validators.required],
      "txtQuantity":['',Validators.required],
      "txtDateBought":['',Validators.required],
      "material_Id":['',Validators.required],
      "txtTotalPrice":[{ value: 0, disabled: true },Validators.required]
    })

    this.mBoughtForm.get('txtUnitPrice')!.valueChanges.subscribe(() => {
      this.calculateTotal();
    });

    this.mBoughtForm.get('txtQuantity')!.valueChanges.subscribe(() => {
      this.calculateTotal();
    });
  }

  // when update
  edit(){
    this.mBoughtService.Load(this.Id).subscribe({
      next:data=>{
        this.mBoughtForm.controls['txtUnitPrice'].setValue(data.UnitPrice)
        this.mBoughtForm.controls['txtQuantity'].setValue(data.Quantity)
        this.mBoughtForm.controls['txtDateBought'].setValue(data.DateBought)
        this.mBoughtForm.controls['material_Id'].setValue(data.material_Id)
        this.mBoughtForm.controls['txtTotalPrice'].setValue(data.TotalPrice)
      }
    })
  }

  // for date
  reformatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth()+ 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
  }

  // insert
  onSave(){
    if(this.mBoughtForm.valid == true){
      var newBought = new mBought();
      debugger
      this.calculateTotal();
      
      newBought.dateBought=this.mBoughtForm.controls['txtDateBought'].value
      newBought.material_Id = this.mBoughtForm.controls['material_Id'].value
      newBought.totalPrice = this.mBoughtForm.controls['txtTotalPrice'].value.toString();//.value['txtTotalPrice']
      newBought.unitPrice = this.mBoughtForm.controls['txtUnitPrice'].value
      newBought.quantity = this.mBoughtForm.controls['txtQuantity'].value
      

      console.log(this.mBoughtForm.value);
      this.mBoughtService.Insert(newBought).subscribe({
        next:data=>{
          console.log("good");
        },
        error:err=>{
          console.log("bad");
        }
      })
    }
  }



  };
  



