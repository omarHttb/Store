import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mSold } from '../model/mSold';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialSoldService {

  constructor(private httpClient:HttpClient) { }


  //MaterialSold
  Insert(mSold:mSold):Observable<any>
  {
    return this.httpClient.post('http://localhost/StorageAPI/api/MaterialSold',mSold)
  }

  loadAll():Observable<any>{
    return this.httpClient.get('http://localhost/StorageAPI/api/MaterialSold/LoadAll')
  }

  Delete(id:number):Observable<any>{
    return this.httpClient.delete('http://localhost/StorageAPI/api/MaterialSold?Id='+id)
  }

  Load(id:number):Observable<any>{
    return this.httpClient.get('http://localhost/StorageAPI/api/MaterialSold/Load?Id='+id)
  }

  update(MaterialSold:mSold):Observable<any>{
    return this.httpClient.put('http://localhost/StorageAPI/api/MaterialSold',MaterialSold)
  }

}
