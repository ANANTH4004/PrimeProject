import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../Services/candidate.service';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

export interface ICandidate {
  CandidateName: string
  Manager: string
  Assesssment: string
  Date: string
  Skills: string[]
  Result: string
  Score: number
}

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})

export class AssessmentPageComponent implements OnInit {

  ///
  countries: any[] | undefined;
  selectedCountry: any | undefined;
  ///


  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  candidateData !: ICandidate[];
  managers : any[] = ["Shanthosh","Suresh" ,"Alamelu" , "Madan"];
  candidates : any[] = ["Anand" ,"Nithya" , "varun" , "samantha"];
  status : string[] = ["Shortlisted", "Rejected" , "Awaiting" , "Cancelled" , "Scheduled"];
  skills : any[] = ["Java", "Node Js", "Angular", "JavaScript"];
  selectedManager!: any;
selectedCandidate: any;
selectedSkill: any;
selectedStatus: any;

  constructor(private candidateService: CandidateService) { }
  ngOnInit() {

    this.candidateService.getAssessmentData().subscribe((data: ICandidate[]) => {
      this.candidateData = data;
      console.log(data)
    });
    this.items = [{ label: 'Home',routerLink:'/login',icon: 'pi pi-home' }, { label: 'Assessment' , routerLink: "dashboard"}];
    //this.home = { icon: 'pi pi-home', routerLink: '/login' };
  }
  getResultClass(result : string): string {
    if(result == "ShortListed"){
      return "selected"
    }
    else if(result == "Rejected"){
      return "not-selected"
    }else{
      return "pending"
    }

  }
  // getFormattedSkills(skills:string[]): string {
  //   const maxLength = 12;

  //   let result = '';
  //   let totalLength = 0;

  //   for (const skill of skills) {
  //     if (totalLength + skill.length <= maxLength) {
  //       if (result !== '') {
  //         result += ', ';
  //       }
  //       result += skill;
  //       totalLength += skill.length;
  //     } else {
  //       break;
  //     }
  //   }

  //   const remainingCount = skills.length - (result.split(',').length - 1);
  //   if (remainingCount > 0) {
  //     result += ` +${remainingCount}`;
  //   }

  //   return result;
  // }
  getFormattedSkills(skills: string[]): { skills: string[], remainingCount: number } {
    const maxLength = 12;

    let result: string[] = [];
    let totalLength = 0;

    for (const skill of skills) {
      if (totalLength + skill.length <= maxLength) {
        // Include the skill in the result
        result.push(skill);
        totalLength += skill.length;
      } else {
        // Stop adding skills if the limit is reached
        break;
      }
    }

    // Calculate the count of remaining skills
    const remainingCount = skills.length - result.length;

    return { skills: result, remainingCount: remainingCount };
  }

  value1(arg0: any) {
   console.log(arg0);
    }
    clear(table: Table) {
      table.clear();
  }
}
