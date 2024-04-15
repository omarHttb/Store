import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../model/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient:HttpClient) { }

  Insert(material:Material):Observable<any>{
    return this.httpClient.post("http://localhost/StorageAPI/api/Material",material)
  }

  loadAll():Observable<any>{
    
    return this.httpClient.get("http://localhost/StorageAPI/api/Material/LoadAll")
  }

  Delete(Id:number):Observable<any>{
    return this.httpClient.delete("http://localhost/StorageAPI/api/Material/?Id="+Id)
  }

  Load(Id:number):Observable<any>{
    return this.httpClient.get("http://localhost/StorageAPI/api/Material/Load?Id="+ Id)
  }
   
  update(material:Material):Observable<any>{
    return this.httpClient.put("http://localhost/StorageAPI/api/Material",material)
  }

}
