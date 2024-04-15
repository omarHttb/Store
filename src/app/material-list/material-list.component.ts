import { Component, OnInit } from '@angular/core';
import { Material } from '../model/material';
import { MaterialService } from '../service/material.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  
  materials!:Material[]

  constructor(private materialService:MaterialService, private router:Router){}

  ngOnInit(): void {
    debugger
    this.getAll()
  }

  delete(id:number){
    this.materialService.Delete(id).subscribe({
      next:data=>{
        this.getAll()

      },
      error:err=>
      {
        console.log("Error");
      }
    })
  }


  getAll(){
    
    this.materialService.loadAll().subscribe({
      next:data=>{
        this.materials=data
        
      },
      error:err=>{
        console.log("error");
      }
    })
  }

  edit(id:number){
    this.router.navigate(['/NewMaterial'],{queryParams:{Id:id}})
  }




}
