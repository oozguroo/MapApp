import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point } from '../_models/point';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class PointsService {
   baseUrl = environment.apiUrl;
   constructor(private http: HttpClient) { }

  getPoints(): Observable<Point[]> {
   const url = `${this.baseUrl}points`;
   console.log('API URL:', url);
   return this.http.get<Point[]>(url);
}

addPoint(point: any): Observable<any> {
   return this.http.post<any>(this.baseUrl + 'points/add', point);
 }

 deletePoint(id: number): Observable<any> {
   return this.http.delete<any>(`${this.baseUrl}points/${id}`);
 }

}