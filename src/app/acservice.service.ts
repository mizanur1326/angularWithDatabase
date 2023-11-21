import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcserviceService {

  baseUrl = 'http://localhost/Angular/evidenceWithDatabase/api' ;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/services.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

}