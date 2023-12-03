import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ICandidate } from '../assessment-page/assessment-page.component';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http : HttpClient) { }

  getAssessmentData(){
    console.log(this.http.get<ICandidate[]>("/assets/dummy.json"))
      return this.http.get<ICandidate[]>("/assets/dummy.json");
  }
}
