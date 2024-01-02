import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss']
})
export class ExamPageComponent {
  first: number = 0;
  rows: number = 10;

  question : any = [
    {
      "question": "What is TypeScript?",
      "options": [
        "A superset of JavaScript",
        "A subset of JavaScript",
        "A completely different language",
        "A type of database"
      ],
      "correctAnswer": "A superset of JavaScript"
    },
    {
      "question": "Which company developed TypeScript?",
      "options": ["Microsoft", "Google", "Facebook", "Apple"],
      "correctAnswer": "Microsoft"
    },
    {
      "question": "What does 'TS' stand for in TypeScript?",
      "options": [
        "Text Script",
        "Type String",
        "TypeScript",
        "Type Struct"
      ],
      "correctAnswer": "TypeScript"
    },
    {
      "question": "What is the main purpose of using TypeScript?",
      "options": [
        "To add static typing to JavaScript",
        "To remove all types from JavaScript",
        "To replace JavaScript",
        "To add more bugs to JavaScript"
      ],
      "correctAnswer": "To add static typing to JavaScript"
    },
    {
      "question": "How do you define a variable with a specific type in TypeScript?",
      "options": [
        "let x: varType = value",
        "let x = (varType) value",
        "let x = value as varType",
        "let x: varType = value"
      ],
      "correctAnswer": "let x: varType = value"
    },
    {
      "question": "Which symbol is used for defining types in TypeScript?",
      "options": ["#", "$", "@", ":"],
      "correctAnswer": ":"
    },
    {
      "question": "What is the purpose of the 'interface' keyword in TypeScript?",
      "options": [
        "To define a class",
        "To declare a variable",
        "To create a function",
        "To define a contract for an object"
      ],
      "correctAnswer": "To define a contract for an object"
    },
    {
      "question": "What does the 'readonly' keyword do in TypeScript?",
      "options": [
        "Makes a variable non-modifiable",
        "Declares a variable as optional",
        "Enforces a variable to be initialized",
        "Specifies a variable as a constant"
      ],
      "correctAnswer": "Makes a variable non-modifiable"
    },
    {
      "question": "How can you compile TypeScript code?",
      "options": [
        "Using a web browser",
        "Using the TypeScript compiler (tsc)",
        "Using the JavaScript interpreter",
        "Using a text editor"
      ],
      "correctAnswer": "Using the TypeScript compiler (tsc)"
    },
    {
      "question": "Which file contains configuration settings for TypeScript?",
      "options": [
        "tsconfig.json",
        "config.ts",
        "typescript.config",
        "tssettings.json"
      ],
      "correctAnswer": "tsconfig.json"
    },
    {
      "question": "What is the purpose of 'type assertion' in TypeScript?",
      "options": [
        "To force a variable to be a certain type",
        "To prevent type errors",
        "To infer the type of a variable",
        "To assign a type to a variable"
      ],
      "correctAnswer": "To force a variable to be a certain type"
    },
    {
      "question": "What is the syntax for defining a function type in TypeScript?",
      "options": [
        "functionType myFunction()",
        "type myFunction = function()",
        "function myFunction(): type",
        "type = function myFunction()"
      ],
      "correctAnswer": "function myFunction(): type"
    },
    {
      "question": "Which TypeScript feature allows you to create a union of types?",
      "options": [
        "Type alias",
        "Type assertion",
        "Type inference",
        "Type guard"
      ],
      "correctAnswer": "Type alias"
    },
    {
      "question": "What is the purpose of the 'class' keyword in TypeScript?",
      "options": [
        "To declare a function",
        "To create an object",
        "To define a class",
        "To import a module"
      ],
      "correctAnswer": "To define a class"
    },
    {
      "question": "How can you define optional parameters in a TypeScript function?",
      "options": [
        "Using the 'optional' keyword",
        "Adding a default value to the parameter",
        "By not specifying a type for the parameter",
        "Using the '?' symbol after the parameter name"
      ],
      "correctAnswer": "Using the '?' symbol after the parameter name"
    }
  ]
firstQuestion = "Finish the shopping List Component. The Component will receive an array od string as the items array. It should render one li element per item in the Array"
selectedCategories: any[] = [];

categories: any[] = [
   'Accounting jdfbvajka vbuabvhav vbauivbahvb vakuvbaluibva ubvauibva ubavbhuiabv jbvliaubva kjavbaubva vajbvUVHAS;OJ KJ BUBVDAVAV UBVAH V', 'Marketing','Production',  'Research',
];
  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
      console.log("onpage event happened")
  }
  @Input() questions: any = [
    {
      "question": "What is TypeScript?",
      "options": [
        "A superset of JavaScript",
        "A subset of JavaScript",
        "A completely different language",
        "A type of database"
      ],
      "correctAnswer": "A superset of JavaScript"
    },
    {
      "question": "Which company developed TypeScript?",
      "options": ["Microsoft", "Google", "Facebook", "Apple"],
      "correctAnswer": "Microsoft"
    },
    {
      "question": "What does 'TS' stand for in TypeScript?",
      "options": [
        "Text Script",
        "Type String",
        "TypeScript",
        "Type Struct"
      ],
      "correctAnswer": "TypeScript"
    },
    {
      "question": "What is the main purpose of using TypeScript?",
      "options": [
        "To add static typing to JavaScript",
        "To remove all types from JavaScript",
        "To replace JavaScript",
        "To add more bugs to JavaScript"
      ],
      "correctAnswer": "To add static typing to JavaScript"
    },
    {
      "question": "How do you define a variable with a specific type in TypeScript?",
      "options": [
        "let x: varType = value",
        "let x = (varType) value",
        "let x = value as varType",
        "let x: varType = value"
      ],
      "correctAnswer": "let x: varType = value"
    },
    {
      "question": "Which symbol is used for defining types in TypeScript?",
      "options": ["#", "$", "@", ":"],
      "correctAnswer": ":"
    },
    {
      "question": "What is the purpose of the 'interface' keyword in TypeScript?",
      "options": [
        "To define a class",
        "To declare a variable",
        "To create a function",
        "To define a contract for an object"
      ],
      "correctAnswer": "To define a contract for an object"
    },
    {
      "question": "What does the 'readonly' keyword do in TypeScript?",
      "options": [
        "Makes a variable non-modifiable",
        "Declares a variable as optional",
        "Enforces a variable to be initialized",
        "Specifies a variable as a constant"
      ],
      "correctAnswer": "Makes a variable non-modifiable"
    },
    {
      "question": "How can you compile TypeScript code?",
      "options": [
        "Using a web browser",
        "Using the TypeScript compiler (tsc)",
        "Using the JavaScript interpreter",
        "Using a text editor"
      ],
      "correctAnswer": "Using the TypeScript compiler (tsc)"
    },
    {
      "question": "Which file contains configuration settings for TypeScript?",
      "options": [
        "tsconfig.json",
        "config.ts",
        "typescript.config",
        "tssettings.json"
      ],
      "correctAnswer": "tsconfig.json"
    },
    {
      "question": "What is the purpose of 'type assertion' in TypeScript?",
      "options": [
        "To force a variable to be a certain type",
        "To prevent type errors",
        "To infer the type of a variable",
        "To assign a type to a variable"
      ],
      "correctAnswer": "To force a variable to be a certain type"
    },
    {
      "question": "What is the syntax for defining a function type in TypeScript?",
      "options": [
        "functionType myFunction()",
        "type myFunction = function()",
        "function myFunction(): type",
        "type = function myFunction()"
      ],
      "correctAnswer": "function myFunction(): type"
    },
    {
      "question": "Which TypeScript feature allows you to create a union of types?",
      "options": [
        "Type alias",
        "Type assertion",
        "Type inference",
        "Type guard"
      ],
      "correctAnswer": "Type alias"
    },
    {
      "question": "What is the purpose of the 'class' keyword in TypeScript?",
      "options": [
        "To declare a function",
        "To create an object",
        "To define a class",
        "To import a module"
      ],
      "correctAnswer": "To define a class"
    },
    {
      "question": "How can you define optional parameters in a TypeScript function?",
      "options": [
        "Using the 'optional' keyword",
        "Adding a default value to the parameter",
        "By not specifying a type for the parameter",
        "Using the '?' symbol after the parameter name"
      ],
      "correctAnswer": "Using the '?' symbol after the parameter name"
    }
  ]
  currentQuestionIndex = 0;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
}
