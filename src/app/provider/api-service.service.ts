import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response {
  data: Catagory[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  etag: string;
  succeeded: boolean;
}

export interface Catagory {
  id: string;
  etag: string;
  typeId: string;
  title: string;
  hasChilds: boolean;
  extendedAttributes: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private _http: HttpClient) { }

  getItems(categoryIds: string): Observable<any[]> {
    return this._http
      .get<Response>(
        'http://android-api.testbazaar.in/v1/catalog/tests/packages?CategoryIds=' +
        categoryIds
      )
      .pipe(map((response: Response) => response.data));
  }

  getCat(): Observable<Catagory[]> {
    return this._http
      .get<any>(
        'http://android-api.testbazaar.in/v1/catalog/categories/list'
      )
      .pipe(map((response: any) => response.data));
  }
}
