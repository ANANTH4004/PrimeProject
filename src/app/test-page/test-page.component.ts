import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit{
  questions: any[] = [
    { title: 'Question 1', description: 'Description for Question 1' },
    { title: 'Question 2', description: 'Description for Question 2' },
    { title: 'Question 3', description: 'Description for Question 3' },
    { title: 'Question 4', description: 'Description for Question 4' },
    { title: 'Question 5', description: 'Description for Question 5' }
  ];

  selectedQuestion: any;

  constructor() { }

  ngOnInit(): void {
    this.showQuestion(0);
  }

  showQuestion(index: number): void {
    this.selectedQuestion = this.questions[index];
  }
}
