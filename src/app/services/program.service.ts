import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProgram } from '../../interfaces/IProgram';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Array<IProgram>> {
    return this.http.get<Array<IProgram>>('data/programsTutorials.json');
  }
}
