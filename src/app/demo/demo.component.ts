import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
questions = [
    {
      description: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },
    {
      description: 'Which programming language do you prefer?',
      options: ['JavaScript', 'Python', 'Java', 'C#']
    },
    // Add more questions as needed
  ];
}
