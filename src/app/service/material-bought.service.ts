import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mBought } from '../model/mBought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialBoughtService {

  constructor(private httpClient:HttpClient) { }

  Insert(mBought:mBought):Observable<any>
  {
    return this.httpClient.post('http://localhost/StorageAPI/api/MaterialBought',mBought)
  }

  loadAll():Observable<any>{
    return this.httpClient.get('http://localhost/StorageAPI/api/MaterialBought/LoadAll')
  }

  Delete(id:number):Observable<any>{
    return this.httpClient.delete('http://localhost/StorageAPI/api/MaterialBought?Id='+id)
  }

  Load(id:number):Observable<any>{
    return this.httpClient.get('http://localhost/StorageAPI/api/MaterialBought/Load?Id='+id)
  }

  update(MaterialBought:mBought):Observable<any>{
    return this.httpClient.put('http://localhost/StorageAPI/api/MaterialBought',MaterialBought)
  }
}
