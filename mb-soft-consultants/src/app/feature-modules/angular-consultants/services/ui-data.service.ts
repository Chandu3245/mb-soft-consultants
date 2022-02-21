import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/data-models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UiDataService {

  constructor(private http: HttpClient) { }

  getUIData(): Observable<Profile> {
    return this.http.get<Profile>('/assets/data/ui.json');
  }
}
